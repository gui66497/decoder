package com.zzjz.bean;

/**
 * 通道
 *
 * @author fangguitang
 * @version 2017/11/15 15:27
 */
public class Channel {

    /**
     * 通道数.
     */
    private int num;

    /**
     * 该通道对应的摄像头ip.
     */
    private String cameraIp;

    /**
     * 状态.
     */
    private String status;

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCameraIp() {
        return cameraIp;
    }

    public void setCameraIp(String cameraIp) {
        this.cameraIp = cameraIp;
    }
}
