package com.zzjz.bean;

/**
 * 海康设备响应消息实体.
 *
 * @author fangguitang
 * @version 2017/11/22 8:45
 */
public class ProbeEntity {

    /**
     * 设备类型
     */
    private String deviceType;

    /**
     * 设备描述
     */
    private String deviceDescription;

    /**
     * 设备SN号
     */
    private String deviceSN;

    /**
     * 命令端口
     */
    private String commandPort;

    /**
     * http端口
     */
    private String httpPort;

    /**
     * mac地址
     */
    private String mac;

    /**
     * IPv4地址
     */
    private String ipv4Address;

    /**
     * IPv4子网掩码
     */
    private String ipv4SubnetMask;

    /**
     * IPv4网关
     */
    private String ipv4Gateway;

    /**
     * 是否开启DHCP
     */
    private boolean dhcp;

    /**
     * 模拟信号通道
     */
    private int analogChannelNum;

    /**
     * 数字信号通道
     */
    private int digitalChannelNum;

    /**
     * 软件版本
     */
    private String softwareVersion;

    /**
     * dsp版本
     */
    private String dspVersion;

    /**
     * 开机时间
     */
    private String bootTime;

    /**
     * 是否加密
     */
    private boolean encrypt;

    /**
     * 是否可以重置
     */
    private boolean resetAbility;


    private int diskNumber;

    /**
     * 是否激活
     */
    private String activated;

    /**
     * 是否可重置密码
     */
    private boolean passwordResetAbility;

    private boolean passwordResetModeSecond;

    /**
     * 是否锁定
     */
    private boolean deviceLock;

    public String getDeviceType() {
        return deviceType;
    }

    public void setDeviceType(String deviceType) {
        this.deviceType = deviceType;
    }

    public String getDeviceDescription() {
        return deviceDescription;
    }

    public void setDeviceDescription(String deviceDescription) {
        this.deviceDescription = deviceDescription;
    }

    public String getDeviceSN() {
        return deviceSN;
    }

    public void setDeviceSN(String deviceSN) {
        this.deviceSN = deviceSN;
    }

    public String getCommandPort() {
        return commandPort;
    }

    public void setCommandPort(String commandPort) {
        this.commandPort = commandPort;
    }

    public String getHttpPort() {
        return httpPort;
    }

    public void setHttpPort(String httpPort) {
        this.httpPort = httpPort;
    }

    public String getMac() {
        return mac;
    }

    public void setMac(String mac) {
        this.mac = mac;
    }

    public String getIpv4Address() {
        return ipv4Address;
    }

    public void setIpv4Address(String ipv4Address) {
        this.ipv4Address = ipv4Address;
    }

    public String getIpv4SubnetMask() {
        return ipv4SubnetMask;
    }

    public void setIpv4SubnetMask(String ipv4SubnetMask) {
        this.ipv4SubnetMask = ipv4SubnetMask;
    }

    public String getIpv4Gateway() {
        return ipv4Gateway;
    }

    public void setIpv4Gateway(String ipv4Gateway) {
        this.ipv4Gateway = ipv4Gateway;
    }

    public boolean isDhcp() {
        return dhcp;
    }

    public void setDhcp(boolean dhcp) {
        this.dhcp = dhcp;
    }

    public int getAnalogChannelNum() {
        return analogChannelNum;
    }

    public void setAnalogChannelNum(int analogChannelNum) {
        this.analogChannelNum = analogChannelNum;
    }

    public int getDigitalChannelNum() {
        return digitalChannelNum;
    }

    public void setDigitalChannelNum(int digitalChannelNum) {
        this.digitalChannelNum = digitalChannelNum;
    }

    public String getSoftwareVersion() {
        return softwareVersion;
    }

    public void setSoftwareVersion(String softwareVersion) {
        this.softwareVersion = softwareVersion;
    }

    public String getDspVersion() {
        return dspVersion;
    }

    public void setDspVersion(String dspVersion) {
        this.dspVersion = dspVersion;
    }

    public String getBootTime() {
        return bootTime;
    }

    public void setBootTime(String bootTime) {
        this.bootTime = bootTime;
    }

    public boolean isEncrypt() {
        return encrypt;
    }

    public void setEncrypt(boolean encrypt) {
        this.encrypt = encrypt;
    }

    public boolean isResetAbility() {
        return resetAbility;
    }

    public void setResetAbility(boolean resetAbility) {
        this.resetAbility = resetAbility;
    }

    public int getDiskNumber() {
        return diskNumber;
    }

    public void setDiskNumber(int diskNumber) {
        this.diskNumber = diskNumber;
    }

    public String getActivated() {
        return activated;
    }

    public void setActivated(String activated) {
        this.activated = activated;
    }

    public boolean isPasswordResetAbility() {
        return passwordResetAbility;
    }

    public void setPasswordResetAbility(boolean passwordResetAbility) {
        this.passwordResetAbility = passwordResetAbility;
    }

    public boolean isPasswordResetModeSecond() {
        return passwordResetModeSecond;
    }

    public void setPasswordResetModeSecond(boolean passwordResetModeSecond) {
        this.passwordResetModeSecond = passwordResetModeSecond;
    }

    public boolean isDeviceLock() {
        return deviceLock;
    }

    public void setDeviceLock(boolean deviceLock) {
        this.deviceLock = deviceLock;
    }
}
