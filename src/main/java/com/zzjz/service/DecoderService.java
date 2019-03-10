package com.zzjz.service;

import com.zzjz.bean.Camera;
import com.zzjz.bean.Decoder;
import com.zzjz.bean.ProbeEntity;
import org.dom4j.DocumentException;
import javax.security.sasl.AuthenticationException;
import java.io.IOException;
import java.util.List;

/**
 * 解码器service.
 * @author :  xuedong.cao
 * @version :1.0
 */
public interface DecoderService {

    Decoder getDecoderInfoByIp(String ip);

    Decoder getDecoderInfoById(Integer id);

    List<Decoder> getDecoderList(Decoder decoder);

    boolean addDecoder(Decoder decoder);

    boolean updateDecoder(Decoder decoder);

    boolean deleteDecoder(Integer id);

    /**
     * 通过PSIA获取海康解码器的信息.
     * @param decoder 解码器
     * @return 状态
     */
    Decoder getHkDecoderInfoViaPSIA(Decoder decoder) throws DocumentException, IOException;

    /**
     * 通过ip获取解码器及摄像头信息（整合了getHkDecoderInfo和getHkDecoderStatus）.
     * @param ip ip
     * @return 结果
     */
    Decoder getHkDecoderInfoByIp(String ip);

    /**
     * 获取海康解码器的解码状态.
     * @param decoder 解码器
     * @return 状态
     */
    String getHkDecoderLinkStatus(Decoder decoder) throws DocumentException, IOException;

    /**
     * 开始使用ffmpeg转码.
     * @return 结果
     */
    String startTranscoding(Camera camera);

    /**
     * 开始使用ffmpeg转码.
     * @return 结果
     */
    boolean stopTranscoding();

    /**
     * 获取最新截图.
     * @param decoderIp 解码器ip
     * @param cameraIp 摄像机ip
     */
    void refreshSnap(String decoderIp, String cameraIp) throws IOException;

    /**
     * 根据PSIA接口获取海康解码器的详细信息.
     * @param decoderIp 解码器ip
     * @param userName 用户名
     * @param password 密码
     * @return 解码器信息
     */
    Decoder getHkDecoderDetail(String decoderIp, String userName, String password) throws DocumentException, IOException;

    /**
     * 通过组播方式扫描海康的设备.
     * @exception IOException IOException
     * @exception InterruptedException InterruptedException
     * @return 设备列表
     */
    List<ProbeEntity> scanHKDevices() throws IOException, InterruptedException;

    /**
     * 根据mac地址获取解码器信息.
     * @param mac mac地址
     * @return 解码器
     */
    Decoder getDecoderByMac(String mac);

    /**
     * 测试海康解码器是否可以连接.
     * @param ip ip
     * @param userName 用户名
     * @param password 密码
     * @return 结果
     */
    boolean canHkConnect(String ip, String userName, String password) throws DocumentException, IOException;
}
