package com.zzjz;

import com.zzjz.bean.Channel;
import com.zzjz.bean.Decoder;
import com.zzjz.bean.ProbeEntity;
import com.zzjz.service.DecoderService;
import org.dom4j.DocumentException;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import javax.security.sasl.AuthenticationException;
import java.io.IOException;
import java.util.List;

/**
 * DecoderServiceTest
 *
 * @author fangguitang
 * @version 2017/11/15 14:35
 */
public class DecoderServiceTest extends AppTests {

    @Autowired
    DecoderService decoderService;

    /**
     * 测试获取海康解码器的解码状态.
     */
    @Test
    public void testGetHkDecoderStatus() {
        Decoder decoder = new Decoder();
        decoder.setIp("192.168.1.65");
        Channel channel = new Channel();
        channel.setNum(1);
        decoder.setDefaultChannel(channel);
        decoder.setUserName("admin");
        decoder.setPassword("admin12345");
        try {
            String status = decoderService.getHkDecoderLinkStatus(decoder);
            System.out.println(status);
        } catch (DocumentException | IOException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testGetHkDecoderDetail() {
        try {
            Decoder decoder = decoderService.getHkDecoderDetail("192.168.1.65", "admin1", "admin12345");
            System.out.println(1);
        } catch (DocumentException | IOException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testScanHKDevices() {
        try {
            List<ProbeEntity> probeEntityList = decoderService.scanHKDevices();
            System.out.println("probeEntityList个数:" + probeEntityList.size());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(1);
    }

    @Test
    public void testCanHkConnect() {
        try {
            boolean res = decoderService.canHkConnect("192.168.1.65", "admin", "admin1234");
        } catch (DocumentException | IOException e) {
            e.printStackTrace();
        }
    }

}
