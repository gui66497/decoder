package com.zzjz.bean;

/**
 * @author 梅宏振
 * @version 2015年2月27日 下午1:46:13
 * @ClassName: PagingEntity
 * @Description: 分页实体类
 */
public class PagingEntity {

    private static final Integer PAGE_SIZE = 10;

    private int pageSize = PAGE_SIZE;        //每页记录条数(默认每页十条)

    private int pageNo = 1;            //页码(从1开始)(默认显示第一页数据)

    /**
     * getPageSize.
     *
     * @return PAGE_SIZE
     */
    public int getPageSize() {
        return pageSize;
    }

    /**
     * setPageSize.
     *
     * @param pageSize PAGE_SIZE
     */
    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    /**
     * getPageNo.
     *
     * @return PAGE_NO
     */
    public int getPageNo() {
        return pageNo;
    }

    /**
     * setPageNo.
     *
     * @param pageNo PAGE_NO
     */
    public void setPageNo(int pageNo) {
        this.pageNo = pageNo;
    }

}
