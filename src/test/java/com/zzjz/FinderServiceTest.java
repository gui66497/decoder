package com.zzjz;

import com.zzjz.service.FinderService;
import org.dom4j.DocumentException;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

/**
 * FinderServiceTest
 *
 * @author Administrator
 * @version 2017/11/14 11:01
 */
public class FinderServiceTest extends AppTests {

    @Autowired
    FinderService finderService;

    @Test
    public void testFindOnvifDevices() {
        try {
            List<String> res = finderService.findOnvifDevices();
            System.out.println(res);
        } catch (DocumentException e) {
            e.printStackTrace();
        }
    }
}
