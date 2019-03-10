package com.zzjz;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.util.Log4jConfigurer;
import java.io.File;
import java.io.FileNotFoundException;

/**
 * Junit4 测试基类 集成本工程Spring环境.
 *
 * @author fgt
 * @version 2017/6/23 14:00
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath*:spring-mybatis.xml"})
@TransactionConfiguration(defaultRollback = false) //关闭回滚
public class JunitBaseTest extends AbstractTransactionalJUnit4SpringContextTests {

    /**
     * 测试类实例化前必须要做的一些事情在这里(这个方法在测试类运行的时候只执行一次).
     */
    /*@BeforeClass
    public static void setUpBeforeClass() {
        try {
            Log4jConfigurer.initLogging("classpath:log4j.properties");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        File file = new File("");
        String filePath = file.getAbsolutePath() + "/";
        String webappRootPath = filePath + "src/main/webapp/";
        System.setProperty("webapp.root", webappRootPath);
    }*/
}
