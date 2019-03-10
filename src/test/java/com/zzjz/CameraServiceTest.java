package com.zzjz;

import com.zzjz.service.CameraService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

/**
 * @author 房桂堂
 * @description CameraServiceTest
 * @date 2017/11/24 9:01
 */
public class CameraServiceTest extends AppTests {

    @Autowired
    CameraService cameraService;

    @Test
    public void testCanConnnect() {
        try {
            cameraService.canConnnect("rtsp://admin:admin1234@192.168.1.44:554");
            System.out.println(1);
        } catch (IOException | InterruptedException | TimeoutException e) {
            e.printStackTrace();
        }
    }
}
