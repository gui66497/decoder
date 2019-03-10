package com.zzjz.service.imp;

import com.zzjz.bean.Camera;
import com.zzjz.mapper.CameraMapper;
import com.zzjz.service.CameraService;
import com.zzjz.utils.ProcessUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.security.sasl.AuthenticationException;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;
import java.util.concurrent.TimeoutException;

/**
 * @author pengpeng
 * @version 2017/11/21
 */
@Service
public class CameraServiceImpl implements CameraService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CameraServiceImpl.class);

    @Autowired
    CameraMapper cameraMapper;

    @Override
    public List<Camera> getCameraList(Camera camera) {
        return cameraMapper.getCameraList(camera);
    }

    @Override
    public boolean insertAuto(Camera camera) {
        return cameraMapper.insertSelective(camera)>0;
    }

    @Override
    public boolean updateAuto(Camera camera) {
        return cameraMapper.updateByPrimaryKey(camera)>0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return cameraMapper.deleteByPrimaryKey(id)>0;
    }

    @Override
    public Camera getCameraById(Integer id) {
        return cameraMapper.selectByPrimaryKey(id);
    }

    @Override
    public Camera getCameraByIp(String ip) {
        return cameraMapper.getCameraByIp(ip);
    }

    @Override
    public Camera getCameraByMac(String mac) {
        return cameraMapper.getCameraByMac(mac);
    }

    @Override
    public boolean canConnnect(String rtspStr) throws IOException, TimeoutException, InterruptedException {
        String command = "ffmpeg -i " + rtspStr + " -f image2 -an -r 1 -t 00:00:01 -y D:/pic/test.jpg";
        LOGGER.info("测试rtsp连接command：" + command);
        Process process = ProcessUtils.executeCommand(command, 8000);
        //取得命令结果的输出流
        InputStream fis = process.getErrorStream();
        //用一个读输出流类去读
        InputStreamReader isr = new InputStreamReader(fis);
        //用缓冲器读行
        BufferedReader br = new BufferedReader(isr);
        String line;
        //直到读完为止
        boolean flag = true;
        while((line=br.readLine())!=null)
        {
            if (line.contains("401 Unauthorized")) {
                throw new AuthenticationException("认证错误,请检查用户名密码");
            }
            System.out.println(line);
        }
        return true;
    }
}
