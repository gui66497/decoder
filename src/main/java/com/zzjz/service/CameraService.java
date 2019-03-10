package com.zzjz.service;

import com.zzjz.bean.Camera;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeoutException;

/**
 * Created by Administrator on 2017/11/21.
 */
public interface CameraService {
    List<Camera> getCameraList(Camera camera);

    boolean insertAuto(Camera camera);

    boolean updateAuto(Camera camera);

    boolean deleteById(Integer id);

    Camera getCameraById(Integer id);

    /**
     * 通过ip获取摄像头信息.
     * @param ip ip
     * @return 摄像头
     */
    Camera getCameraByIp(String ip);

    /**
     * 通过mac地址获取摄像头信息.
     * @param mac mac地址
     * @return 摄像头
     */
    Camera getCameraByMac(String mac);

    /**
     * 测试rtsp是否可以连接.
     * @param rtspStr rtsp连接字符串
     * @return 结果
     */
    boolean canConnnect(String rtspStr) throws IOException, TimeoutException, InterruptedException;
}
