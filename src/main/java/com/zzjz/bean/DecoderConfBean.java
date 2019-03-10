package com.zzjz.bean;

/**
 * 配置文件实体类.
 * @author :  xuedong.cao
 * @version :1.0
 */
public class DecoderConfBean {

    private String decoderNumber; //解码通道号

    private String decodeMethod ; //厂商类型

    private String hostIp; //远程主机IP

    private String  hostPort; //远程主机端口号

    private String passagewayType; //通道类型

    private String PassagewayNumber; //通道号码

    private String userName; //用户名

    private String password; //密码

    private String protocol; //协议类型

    private String streamingType; //码流类型

    private String url ;   //url方式解码

    private String decoderType ; //解码方式 IP方式、url方式

    private boolean streamingStatus; //启用流媒体的状态

    private String streamingMediaIp ;  //流媒体IP

    private String streamingMediaPort;  //流媒体端口号

    private String streamingMediaProtocol; //流媒体协议 tcp udp


    /**
     * 获取.decoderNumber
     * @return java.lang.String
     */
    public String getDecoderNumber() {
        return decoderNumber;
    }

    /**
     * 设置decoderNumber.
     * @param decoderNumber :java.lang.String
     */
    public void setDecoderNumber(String decoderNumber) {
        this.decoderNumber = decoderNumber;
    }

    /**
     * 获取.decodeMethod
     * @return java.lang.String
     */
    public String getDecodeMethod() {
        return decodeMethod;
    }

    /**
     * 设置decodeMethod.
     * @param decodeMethod :java.lang.String
     */
    public void setDecodeMethod(String decodeMethod) {
        this.decodeMethod = decodeMethod;
    }

    /**
     * 获取.hostIp
     * @return java.lang.String
     */
    public String getHostIp() {
        return hostIp;
    }

    /**
     * 设置hostIp.
     * @param hostIp :java.lang.String
     */
    public void setHostIp(String hostIp) {
        this.hostIp = hostIp;
    }

    /**
     * 获取.hostPort
     * @return java.lang.String
     */
    public String getHostPort() {
        return hostPort;
    }

    /**
     * 设置hostPort.
     * @param hostPort :java.lang.String
     */
    public void setHostPort(String hostPort) {
        this.hostPort = hostPort;
    }

    /**
     * 获取.passagewayType
     * @return java.lang.String
     */
    public String getPassagewayType() {
        return passagewayType;
    }

    /**
     * 设置passagewayType.
     * @param passagewayType :java.lang.String
     */
    public void setPassagewayType(String passagewayType) {
        this.passagewayType = passagewayType;
    }

    /**
     * 获取.PassagewayNumber
     * @return java.lang.String
     */
    public String getPassagewayNumber() {
        return PassagewayNumber;
    }

    /**
     * 设置PassagewayNumber.
     * @param passagewayNumber :java.lang.String
     */
    public void setPassagewayNumber(String passagewayNumber) {
        PassagewayNumber = passagewayNumber;
    }

    /**
     * 获取.userName
     * @return java.lang.String
     */
    public String getUserName() {
        return userName;
    }

    /**
     * 设置userName.
     * @param userName :java.lang.String
     */
    public void setUserName(String userName) {
        this.userName = userName;
    }

    /**
     * 获取.password
     * @return java.lang.String
     */
    public String getPassword() {
        return password;
    }

    /**
     * 设置password.
     * @param password :java.lang.String
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * 获取.protocol
     * @return java.lang.String
     */
    public String getProtocol() {
        return protocol;
    }

    /**
     * 设置protocol.
     * @param protocol :java.lang.String
     */
    public void setProtocol(String protocol) {
        this.protocol = protocol;
    }

    /**
     * 获取.streamingType
     * @return java.lang.String
     */
    public String getStreamingType() {
        return streamingType;
    }

    /**
     * 设置streamingType.
     * @param streamingType :java.lang.String
     */
    public void setStreamingType(String streamingType) {
        this.streamingType = streamingType;
    }

    /**
     * 获取.url
     * @return java.lang.String
     */
    public String getUrl() {
        return url;
    }

    /**
     * 设置url.
     * @param url :java.lang.String
     */
    public void setUrl(String url) {
        this.url = url;
    }

    /**
     * 获取.decoderType.
     * @return java.lang.String
     */
    public String getDecoderType() {
        return decoderType;
    }

    /**
     * 设置decoderType.
     * @param decoderType :java.lang.String
     */
    public void setDecoderType(String decoderType) {
        this.decoderType = decoderType;
    }

    /**
     * 获取.streamingMediaIp.
     * @return java.lang.String
     */
    public String getStreamingMediaIp() {
        return streamingMediaIp;
    }

    /**
     * 设置streamingMediaIp.
     * @param streamingMediaIp :java.lang.String
     */
    public void setStreamingMediaIp(String streamingMediaIp) {
        this.streamingMediaIp = streamingMediaIp;
    }

    /**
     * 获取.streamingMediaPort.
     * @return java.lang.String
     */
    public String getStreamingMediaPort() {
        return streamingMediaPort;
    }

    /**
     * 设置streamingMediaPort.
     * @param streamingMediaPort :java.lang.String
     */
    public void setStreamingMediaPort(String streamingMediaPort) {
        this.streamingMediaPort = streamingMediaPort;
    }

    /**
     * 获取.streamingMediaProtocol.
     * @return java.lang.String
     */
    public String getStreamingMediaProtocol() {
        return streamingMediaProtocol;
    }

    /**
     * 设置streamingMediaProtocol..
     * @param streamingMediaProtocol :java.lang.String
     */
    public void setStreamingMediaProtocol(String streamingMediaProtocol) {
        this.streamingMediaProtocol = streamingMediaProtocol;
    }

    /**
     * 返回状态.
     * @return
     */
    public boolean isStreamingStatus() {
        return streamingStatus;
    }

    /**
     * 设置状态.
     * @param streamingStatus
     */
    public void setStreamingStatus(boolean streamingStatus) {
        this.streamingStatus = streamingStatus;
    }
}
