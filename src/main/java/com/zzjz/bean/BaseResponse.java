package com.zzjz.bean;

import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

/**
 * @param <T> T
 * @author 梅宏振
 * @version 2015年2月27日 下午6:16:18
 * @ClassName: ResponseEntity
 * @Description: REST接口通用响应类
 */
@XmlRootElement
public class BaseResponse<T> {

    private ResultCode resultCode;    //结果状态码

    private List<T> data;            //数据集

    private List<Object> otherData;    //其它数据

    private String message;            //提示消息

    private T obj;                    //单个数据

    /**
     * getResultCode.
     *
     * @return RESULT_CODE
     */
    public ResultCode getResultCode() {
        return resultCode;
    }

    /**
     * setResultCode.
     *
     * @param resultCode RESULT_CODE
     */
    public void setResultCode(ResultCode resultCode) {
        this.resultCode = resultCode;
    }

    /**
     * getData.
     *
     * @return DATA
     */
    public List<T> getData() {
        return data;
    }

    /**
     * setData.
     *
     * @param data DATA
     */
    public void setData(List<T> data) {
        this.data = data;
    }

    /**
     * getOtherData.
     *
     * @return OTHER_DATA
     */
    public List<Object> getOtherData() {
        return otherData;
    }

    /**
     * setOtherData.
     *
     * @param otherData OTHER_DATA
     */
    public void setOtherData(List<Object> otherData) {
        this.otherData = otherData;
    }

    /**
     * getMessage.
     *
     * @return MESSAGE
     */
    public String getMessage() {
        return message;
    }

    /**
     * setMessage.
     *
     * @param message MESSAGE
     */
    public void setMessage(String message) {
        this.message = message;
    }

    /**
     * getObj.
     *
     * @return OBJ
     */
    public T getObj() {
        return obj;
    }

    /**
     * setObj.
     *
     * @param obj OBJ
     */
    public void setObj(T obj) {
        this.obj = obj;
    }
}
