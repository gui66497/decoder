package com.zzjz.service;

import org.dom4j.DocumentException;
import java.util.List;

/**
 * FinderService
 *
 * @author Administrator
 * @version 2017/11/14 10:49
 */
public interface FinderService {

    /**
     * 所有所有onvif设备
     * @return onvif设备
     */
    List<String> findOnvifDevices() throws DocumentException;
}
