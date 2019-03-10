package com.zzjz.service.imp;

import cc.eguid.FFmpegCommandManager.FFmpegManager;
import cc.eguid.FFmpegCommandManager.FFmpegManagerImpl;
import cc.eguid.FFmpegCommandManager.entity.TaskEntity;
import com.zzjz.bean.Camera;
import com.zzjz.bean.Channel;
import com.zzjz.bean.Decoder;
import com.zzjz.bean.ProbeEntity;
import com.zzjz.mapper.DecoderMapper;
import com.zzjz.service.CameraService;
import com.zzjz.service.DecoderService;
import com.zzjz.utils.HttpUtils;
import org.apache.commons.lang.StringUtils;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.task.TaskExecutor;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.security.sasl.AuthenticationException;
import java.io.IOException;
import java.net.DatagramPacket;
import java.net.InetAddress;
import java.net.MulticastSocket;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadPoolExecutor;

/**
 * 解码器service实现类.
 * @author :  fangguitang
 * @version :1.0
 */
@Service
public class DecoderServiceImpl implements DecoderService {

    private static final Logger LOGGER = LoggerFactory.getLogger(DecoderServiceImpl.class);

    @Autowired
    DecoderMapper decoderMapper;

    @Autowired
    CameraService cameraService;

    @Resource(name = "taskExecutor")
    ThreadPoolTaskExecutor taskExecutor;

    /**
     * 获取Ffmpeg Manager(单例)
     */
    private static FFmpegManager manager = null;
    private static synchronized FFmpegManager getInstance() {
        if (manager == null) {
            manager = new FFmpegManagerImpl();
        }
        return manager;
    }

    @Override
    public Decoder getDecoderInfoByIp(String ip) {
        return decoderMapper.getDecoderInfoByIp(ip);
    }

    @Override
    public Decoder getDecoderInfoById(Integer id) {
        return decoderMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<Decoder> getDecoderList(Decoder decoder) {
        return decoderMapper.getDecoderList(decoder);
    }

    @Override
    public boolean addDecoder(Decoder decoder) {
        return decoderMapper.insertSelective(decoder)>0;
    }

    @Override
    public boolean updateDecoder(Decoder decoder) {
        return decoderMapper.updateByPrimaryKeySelective(decoder)>0;
    }

    @Override
    public boolean deleteDecoder(Integer id) {
        return decoderMapper.deleteByPrimaryKey(id)>0;
    }

    @Override
    public Decoder getHkDecoderInfoViaPSIA(Decoder decoder) throws DocumentException, IOException {
        int channelNum = decoder.getDefaultChannel().getNum();
        //1获取默认通道的基本信息
        String streamInfoUrl = "http://" + decoder.getIp() + "/PSIA/Custom/SelfExt/Decode/decodeChannels/" + channelNum + "/streamInfo";
        String result = HttpUtils.get(streamInfoUrl, "Basic " + HttpUtils.getAuthorization(decoder.getUserName(), decoder.getPassword()));
        Document doc = DocumentHelper.parseText(result);
        Element root = doc.getRootElement();
        String cameraIp = root.element("ActiveModeInfo").element("DynamicDecodeCfg").element("EncodeChanCfg").element("EncodeIPAddress").getStringValue();
        decoder.getDefaultChannel().setCameraIp(cameraIp);
        //2获取LinkStatus
        String status = getHkDecoderLinkStatus(decoder);
        decoder.getDefaultChannel().setStatus(status);
        return decoder;
    }

    @Override
    public Decoder getHkDecoderInfoByIp(String ip) {
        Decoder decoder = getDecoderInfoByIp(ip);
        //todo 默认通道1
        Channel channel = new Channel();
        channel.setNum(1);
        decoder.setDefaultChannel(channel);
        try {
            decoder = getHkDecoderInfoViaPSIA(decoder);
        } catch (DocumentException | IOException e) {
            e.printStackTrace();
        }
        return decoder;
    }

    @Override
    public String getHkDecoderLinkStatus(Decoder decoder) throws DocumentException, IOException {
        int channelNum = decoder.getDefaultChannel().getNum();
        String url = "http://" + decoder.getIp() + "/PSIA/Custom/SelfExt/Decode/decodeChannels/" + channelNum + "/linkStatus";
        String result = HttpUtils.get(url, "Basic " + HttpUtils.getAuthorization(decoder.getUserName(), decoder.getPassword()));
        Document doc = DocumentHelper.parseText(result);
        Element root = doc.getRootElement();
        return root.element("ConnectStatus").getStringValue();
    }

    @Override
    public String startTranscoding(Camera camera)  {
        String ip = camera.getIp();
        FFmpegManager manager = getInstance();
        // 查询全部
        Collection<TaskEntity> infoList = manager.queryAll();
        System.out.println(infoList);
        Map<String,String> map = new HashMap<>();
        /*map.put("appName", "hello");*/
        //用ip当做id
        map.put("appName", ip);
        map.put("input", "rtsp://" + camera.getUserName() + ":" + camera.getPassword() + "@" + ip + ":554");
        map.put("output", "rtmp://localhost/live/");
        map.put("codec", "h264");
        map.put("fmt", "flv");
        map.put("fps", "25");
        map.put("rs", "640x360");
        map.put("twoPart", "1");
        // 执行任务，id就是appName，如果执行失败返回为null
        return manager.start(map);
    }

    @Override
    public boolean stopTranscoding() {
        FFmpegManager manager = getInstance();
        Collection<TaskEntity> taskEntities = manager.queryAll();
        int res = manager.stopAll();
        LOGGER.info("停止解码，停止的个数为：" + res);
        return true;
    }

    @Override
    public void refreshSnap(String decoderIp, String cameraIp) throws IOException {
        Camera camera = cameraService.getCameraByIp(cameraIp);
        String path = DecoderServiceImpl.class.getClassLoader().getResource("/").getPath();
        String fileName = path.substring(1, path.lastIndexOf("/WEB-INF")) + "/images/cover/" + decoderIp + ".jpg";
        //命令解释 -y代表强制替换
        String command = "ffmpeg -i rtsp://" + camera.getUserName() + ":" + camera.getPassword() +
                "@" + cameraIp + ":554 -f image2 -an -r 1 -t 00:00:01 -y " + fileName;
        LOGGER.info("获取最新截图command：" + command);
        Runtime.getRuntime().exec(command);
        //manager.start("snap", command);
    }

    @Override
    public Decoder getHkDecoderDetail(String decoderIp, String userName, String password) throws DocumentException, IOException {
        Decoder decoder = new Decoder();
        String url = "http://" + decoderIp + "/PSIA/System/deviceInfo";
        String result = HttpUtils.get(url, "Basic " + HttpUtils.getAuthorization(userName, password));
        if (StringUtils.isBlank(result)) {
            return null;
        }
        Document doc = DocumentHelper.parseText(result);
        Element root = doc.getRootElement();
        decoder.setIp(decoderIp);
        decoder.setPassword(userName);
        decoder.setPassword(password);
        decoder.setDeviceName(root.element("deviceName").getStringValue());
        decoder.setDeviceId(root.element("deviceID").getStringValue());
        decoder.setModel(root.element("model").getStringValue());
        decoder.setSerialNumber(root.element("serialNumber").getStringValue());
        decoder.setMacAddress(root.element("macAddress").getStringValue());
        decoder.setFirmwareVersion(root.element("firmwareVersion").getStringValue());
        decoder.setFirmwareReleasedDate(root.element("firmwareReleasedDate").getStringValue());
        decoder.setLogicVersion(root.element("logicVersion").getStringValue());
        decoder.setLogicReleasedDate(root.element("logicReleasedDate").getStringValue());
        return decoder;
    }

    /**
     * 组播地址
     */
    private final static String BC_IP = "239.255.255.250";
    /**
     * 组播端口
     */
    private final static int BC_PORT = 37020;
    private final static int PACK_SIZE = 4096;
    private volatile boolean  keepListen = true;

    @Override
    public List<ProbeEntity> scanHKDevices() throws IOException, InterruptedException {
        MulticastSocket sock = new MulticastSocket(BC_PORT);
        InetAddress bcAddr = InetAddress.getByName(BC_IP);

        List<ProbeEntity> probeEntityList = new ArrayList<>();
        // 创建socket并加入组播地址
        sock.joinGroup(bcAddr);
        sock.setLoopbackMode(false); // 必须是false才能开启广播功能！！
        keepListen = true;

        Thread a = new Thread(() -> { // 接受广播消息的线程
            try {
                DatagramPacket inpack = new DatagramPacket(new byte[PACK_SIZE], PACK_SIZE);
                while (keepListen) {

                    sock.receive(inpack);
                    System.out.println("广播消息：" + new String(inpack.getData(), 0, inpack.getLength()));
                    //将xml信息转换为实体
                    ProbeEntity probe = conventStrToProbe(new String(inpack.getData(), 0, inpack.getLength()));
                    if (probe != null) {
                        if (!contains(probeEntityList, probe)) {
                            probeEntityList.add(probe);
                        }
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
                if (sock != null) {
                    try {
                        sock.leaveGroup(bcAddr);
                    } catch (Exception e1) {
                        e1.printStackTrace();
                    }
                    sock.close();
                }
                //System.exit(1);
            } catch (DocumentException e) {
                e.printStackTrace();
            }
        });
        a.start();

        //最终关闭程序之前一定要关闭socket

        byte[] buf1 = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Probe><Uuid>C50970A5-90DA-4911-A559-015BA4BEB6A3</Uuid><Types>inquiry</Types></Probe>".getBytes();
        DatagramPacket outpack = new DatagramPacket(buf1, buf1.length, bcAddr , BC_PORT);
        sock.send(outpack);
        //一秒的时间让子线程接收数据
        Thread.sleep(1000);
        keepListen = false;
        sock.send(outpack);
        //sock.close();
        return probeEntityList;
    }

    @Override
    public Decoder getDecoderByMac(String mac) {
        return decoderMapper.getDecoderInfoByMac(mac);
    }

    @Override
    public boolean canHkConnect(String ip, String userName, String password) throws DocumentException, IOException {
        String url = "http://" + ip + "/PSIA/Custom/SelfExt/userCheck";
        String result = HttpUtils.get(url, "Basic " + HttpUtils.getAuthorization(userName, password));
        Document doc = DocumentHelper.parseText(result);
        Element root = doc.getRootElement();
        String statusStr = root.element("statusString").getStringValue();
        if ("Unauthorized".equals(statusStr)) {
            throw new AuthenticationException("用户名或密码错误!");
        } else if ("OK".equals(statusStr)) {
            return true;
        }
        return false;
    }

    boolean contains(List<ProbeEntity> probeEntityList, ProbeEntity probe) {
        if (probeEntityList == null || probeEntityList.size() < 1 || probe == null) {
            return false;
        }
        boolean contain = false;
        for (ProbeEntity probeEntity : probeEntityList) {
            if (probe.getDeviceDescription().equals(probeEntity.getDeviceDescription())) {
                contain = true;
                break;
            }
        }
        return contain;
    }

    public static void main(String[] args) {
        String xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?><Probe><Uuid>C50970A5-90DA-4911-A559-015BA4BEB6A3</Uuid><Types>inquiry</Types></Probe>";
        Document doc = null;
        try {
            doc = DocumentHelper.parseText(xml);
        } catch (DocumentException e) {
            e.printStackTrace();
        }
        Element root = doc.getRootElement();
    }

    /**
     * 将xml信息转换为ProbeEntity
     * @param str str
     * @return 实体
     */
    private ProbeEntity conventStrToProbe(String str) throws DocumentException {
        ProbeEntity probe = new ProbeEntity();
        Document doc = DocumentHelper.parseText(str);
        Element root = doc.getRootElement();
        if (root.element("DeviceType") != null) {
            probe.setDeviceType(root.element("DeviceType").getStringValue());
        } else {
            //设备类型不存在,直接返回null
            return null;
        }
        if (root.element("DeviceDescription") != null) {
            probe.setDeviceDescription(root.element("DeviceDescription").getStringValue());
        }
        if (root.element("DeviceSN") != null) {
            probe.setDeviceSN(root.element("DeviceSN").getStringValue());
        }
        if (root.element("CommandPort") != null) {
            probe.setCommandPort(root.element("CommandPort").getStringValue());
        }
        if (root.element("HttpPort") != null) {
            probe.setHttpPort(root.element("HttpPort").getStringValue());
        }
        if (root.element("MAC") != null) {
            probe.setMac(root.element("MAC").getStringValue());
        }
        if (root.element("IPv4Address") != null) {
            probe.setIpv4Address(root.element("IPv4Address").getStringValue());
        }
        if (root.element("IPv4SubnetMask") != null) {
            probe.setIpv4SubnetMask(root.element("IPv4SubnetMask").getStringValue());
        }
        if (root.element("IPv4Gateway") != null) {
            probe.setIpv4Gateway(root.element("IPv4Gateway").getStringValue());
        }
        if (root.element("DHCP") != null) {
            probe.setDhcp(Boolean.parseBoolean(root.element("DHCP").getStringValue()));
        }
        if (root.element("AnalogChannelNum") != null) {
            probe.setAnalogChannelNum(Integer.parseInt(root.element("AnalogChannelNum").getStringValue()));
        }
        if (root.element("DigitalChannelNum") != null) {
            probe.setDigitalChannelNum(Integer.parseInt(root.element("DigitalChannelNum").getStringValue()));
        }
        if (root.element("SoftwareVersion") != null) {
            probe.setSoftwareVersion(root.element("SoftwareVersion").getStringValue());
        }
        if (root.element("DSPVersion") != null) {
            probe.setDspVersion(root.element("DSPVersion").getStringValue());
        }
        if (root.element("BootTime") != null) {
            probe.setBootTime(root.element("BootTime").getStringValue());
        }
        if (root.element("Encrypt") != null) {
            probe.setEncrypt(Boolean.parseBoolean(root.element("Encrypt").getStringValue()));
        }
        if (root.element("ResetAbility") != null) {
            probe.setResetAbility(Boolean.parseBoolean(root.element("ResetAbility").getStringValue()));
        }
        if (root.element("DiskNumber") != null) {
            probe.setDiskNumber(Integer.parseInt(root.element("DiskNumber").getStringValue()));
        }
        if (root.element("Activated") != null) {
            probe.setActivated(root.element("Activated").getStringValue());
        }
        if (root.element("PasswordResetAbility") != null) {
            probe.setPasswordResetAbility(Boolean.parseBoolean(root.element("PasswordResetAbility").getStringValue()));
        }
        if (root.element("PasswordResetModeSecond") != null) {
            probe.setPasswordResetModeSecond(Boolean.parseBoolean(root.element("PasswordResetModeSecond").getStringValue()));
        }
        if (root.element("DeviceLock") != null) {
            probe.setDeviceLock(Boolean.parseBoolean(root.element("DeviceLock").getStringValue()));
        }
        return probe;
    }
}
