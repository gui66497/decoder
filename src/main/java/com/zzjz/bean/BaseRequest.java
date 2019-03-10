package com.zzjz.bean;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * @author 梅宏振
 * @version 2015年3月4日 下午1:32:29
 * @ClassName: BaseRequest
 * @Description: 这里用一句话描述这个类的作用
 */
@XmlRootElement
public class BaseRequest {

    private Long recordId;            //记录ID

    private PagingEntity paging;    //分页实体

    /**
     * getRecordId.
     *
     * @return RECORD_ID
     */
    public Long getRecordId() {
        return recordId;
    }

    /**
     * setRecordId.
     *
     * @param recordId RECORD_ID
     */
    public void setRecordId(Long recordId) {
        this.recordId = recordId;
    }

    /**
     * getPaging.
     *
     * @return PAGING
     */
    public PagingEntity getPaging() {
        return paging;
    }

    /**
     * setPaging.
     *
     * @param paging PAGING
     */
    public void setPaging(PagingEntity paging) {
        this.paging = paging;
    }

}
 