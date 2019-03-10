package com.zzjz.bean;

import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

/**
 * 解码器
 *
 * @author fangguitang
 * @version 2017/11/15 14:19
 */
@XmlRootElement
public class Decoder {

    private Integer id;

    /**
     * 解码器ip
     */
    private String ip;

    /**
     * 解码器名称
     */
    private String decoderName;

    /**
     * 用户名
     */
    private String userName;

    /**
     * 密码
     */
    private String password;

    /**
     * 所有通道
     */
    private List<Channel> channels;

    /**
     * 默认通道(一般为通道1)
     */
    private Channel defaultChannel;

    /**
     * 设备名称
     */
    private String deviceName;

    /**
     * 设备ID
     */
    private String deviceId;

    /**
     * 型号
     */
    private String model;

    /**
     * 序列号
     */
    private String serialNumber;

    /**
     * mac地址
     */
    private String macAddress;

    /**
     * 防火墙版本
     */
    private String firmwareVersion;

    /**
     * 防火墙发布日期
     */
    private String firmwareReleasedDate;

    /**
     * 物理版本
     */
    private String logicVersion;

    /**
     * 物理发布版本
     */
    private String logicReleasedDate;

    /**
     * 状态(0失败 1成功).
     */
    private String status;

    /**
     * 错误信息.
     */
    private String errorMsg;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getDecoderName() {
        return decoderName;
    }

    public void setDecoderName(String decoderName) {
        this.decoderName = decoderName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Channel> getChannels() {
        return channels;
    }

    public void setChannels(List<Channel> channels) {
        this.channels = channels;
    }

    public Channel getDefaultChannel() {
        return defaultChannel;
    }

    public void setDefaultChannel(Channel defaultChannel) {
        this.defaultChannel = defaultChannel;
    }

    public String getDeviceName() {
        return deviceName;
    }

    public void setDeviceName(String deviceName) {
        this.deviceName = deviceName;
    }

    public String getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(String deviceId) {
        this.deviceId = deviceId;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getMacAddress() {
        return macAddress;
    }

    public void setMacAddress(String macAddress) {
        this.macAddress = macAddress;
    }

    public String getFirmwareVersion() {
        return firmwareVersion;
    }

    public void setFirmwareVersion(String firmwareVersion) {
        this.firmwareVersion = firmwareVersion;
    }

    public String getFirmwareReleasedDate() {
        return firmwareReleasedDate;
    }

    public void setFirmwareReleasedDate(String firmwareReleasedDate) {
        this.firmwareReleasedDate = firmwareReleasedDate;
    }

    public String getLogicVersion() {
        return logicVersion;
    }

    public void setLogicVersion(String logicVersion) {
        this.logicVersion = logicVersion;
    }

    public String getLogicReleasedDate() {
        return logicReleasedDate;
    }

    public void setLogicReleasedDate(String logicReleasedDate) {
        this.logicReleasedDate = logicReleasedDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }
}
