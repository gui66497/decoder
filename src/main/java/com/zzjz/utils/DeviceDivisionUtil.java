package com.zzjz.utils;

import java.util.Arrays;

/**
 * 设备区分工具类.
 *
 * @author fangguitang
 * @version 2017/11/21 14:30
 */
public class DeviceDivisionUtil {

    /**
     * 摄像机型号
     */
    private static final String[] CAMERA_DEVICES = new String[]{"DS-6401HD-T"};

    /**
     * 解码器型号
     */
    private static final String[] DECODE_DEVICES = new String[]{"CS-C6H-31WFR"};

    /**
     * 根据设备描述获取设备类型.
     * @param deviceDes 设备描述
     * @return 类型
     */
    public static String getDivision(String deviceDes) {
        if (Arrays.asList(CAMERA_DEVICES).contains(deviceDes)) {
            return "camera";
        }
        if (Arrays.asList(DECODE_DEVICES).contains(deviceDes)) {
            return "decoder";
        }
        return null;
    }

}
