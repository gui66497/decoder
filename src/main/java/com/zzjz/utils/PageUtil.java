package com.zzjz.utils;

import com.zzjz.bean.PagingEntity;
import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

/**
 * @author 李飞
 * @version 2015年3月20日 上午11:04:01
 * @ClassName: PageUtil
 * @Description: 在分页查询中的工具类
 */
public class PageUtil {

    private static final int INT10 = 10;

    private static Logger log = Logger.getLogger(PageUtil.class);

    /**
     * @param pagingEntity pagingEntity
     * @param totalCount totalCount
     * @return List
     * @throws
     * @Title: dealPaging
     * @Description: 根据分页信息和总记录数处理分页信息，并返回总条数和总页数，处理后的分页信息分装置原分页对象中
     */
    public static List<Object> dealPaging(PagingEntity pagingEntity, int totalCount) {
        int pageNo = pagingEntity.getPageNo();
        int pageSize = pagingEntity.getPageSize();
        log.debug("传入的页数：" + pageNo + " 每页的大小：" + pageSize);
        //总页数
        int pageCount = totalCount / pageSize + (totalCount % pageSize == 0 ? 0 : 1);
        if (pageSize <= 0) {
            pageSize = INT10;
        }
        log.debug("总页数：" + pageCount);
        if (pageNo > pageCount) {
            pageNo = pageCount;
        }
        if (pageNo <= 0) {
            pageNo = 1;
        }
        //封装处理后的分页信息
        pagingEntity.setPageNo(pageNo);
        pagingEntity.setPageSize(pageSize);
        //封装总记录条数和总页数
        List<Object> otherData = new ArrayList<Object>();
        otherData.add(totalCount);
        otherData.add(pageCount);
        return otherData;
    }
}
