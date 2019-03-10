package com.zzjz.bean;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * @author 梅宏振
 * @version 2015年2月27日-上午9:54:10
 * @ClassName: ResultCode
 * @Description: REST结果实体类
 */
@XmlRootElement
public enum ResultCode {

    /**
     * 操作成功.
     */
    RESULT_SUCCESS(1000),

    /**
     * 错误的请求.
     */
    RESULT_BAD_REQUEST(1001),

    /**
     * 已存在.
     */
    RESULT_EXIST(1002),

    /**
     * 操作失败.
     */
    RESULT_ERROR(1003),

    /**
     * 过期.
     */
    RESULT_OUTOFDATE(1004),

    /**
     * 不存在.
     */
    RESULT_NOT_EXIST(1005),

    /**
     * 操作告知.
     */
    RESULT_NOTICE(1006),

    /**
     * 未授权.
     */
    RESULT_NOT_AUTHORIZED(401);

    private final int code;

    /**
     * getCode.
     *
     * @return CODE
     */
    public int getCode() {
        return code;
    }

    /**
     * @param code1
     */
    ResultCode(int code1) {
        this.code = code1;
    }

}
