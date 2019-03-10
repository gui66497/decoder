/**
 * 封装请求的参数，实现结果统一处理
 * @param opt
 * @returns {{url: *, async: *, data: *, success: Function, error: Function}}
 */
var ajaxSettings=function(opt){
    var url=opt.url;
    var async=(opt.async ===undefined?true:opt.async);
    return{
        url:url,
        async:async,
        traditional:true,
        data:opt.data,
        dateType: 'json',
        cache:false,
        type:opt.type||'get',
        success:function(data,textStatus,xhr){
            if(data.success){
                if(data.code == 200) {
                    if(opt.success)
                    {
                        opt.success(data);
                    }
                }
            }else{
                if(data.code == 1000){
                    $.messager.alert('后台错误',data.message,'error')
                }else if(data.code == 2000){
                    $.messager.alert('系统错误',data.message,'error')
                }else if(opt.error)
                {
                    opt.error(data);
                }
            }
        },
        error:function(xhr,status,handler){
            if(opt.error)
            {
                opt.error();
            }
        },
    };
};

/**
 * form提交的例子
 * @param formId
 * @param url
 */
$.fn.cmsFormSubmit=function(opt)
{
    $(this).form({
        url:$(this).action,
        onSubmit:function(){
            return $(this).form("validate");

        },
        success:function(data){
            if(data.success){
                 if(data.code == 200)
                 {
                    if(opt.success)
                    {
                        opt.success(data);
                    }
                 }
            }else{
                if(data.code == 1000){
                    $.messager.alert('后台错误',data.message,'error')
                }else if(data.code == 2000){
                    $.messager.alert('系统错误',data.message,'error')
                }else if(opt.error)
                {
                    opt.error(data);
                }
            }
        },
        error:function(xhr,status,handler){
            if(opt.error)
            {
                opt.error();
            }
        }
    });
}
/**
 * 封装默认的datagrid配置
 * @param setting
 */
$.fn.cmsDatagrid=function(setting){
    var defaults={
        height:'auto',
        width:800,
        fit:true,
        border:true,
        selectOnCheck:true,
        checkOnSelect:false,
        singleSelect:false,
        pagination:true,
        idField:'id',
        frozenColumns:[[
            {field:'ck',checkbox:true}
        ]],
        toolbar:[{
            text:'添加',
            iconCls:'icon-add',
            handler:function (){
                //openDialog("add_dialog","add");
            }
        },'-',{
            text:'删除',
            iconCls:'icon-remove',
            handler:function (){
               // delAppInfo();
            }
        }
        ],
        onLoadSuccess:function(){
            $('.cms_edit').linkbutton({text:'编辑',plain:true,iconCls:'icon-edit'});
            $('.cms_add').linkbutton({text:'添加',plain:true,iconCls:'icon-add'});
            $('.cms_remove').linkbutton({text:'删除',plain:true,iconCls:'icon-remove'});
            $('.cms_more').linkbutton({text:'详细信息',plain:true,iconCls:'icon-more'});
            $('.cms_lock').linkbutton({text:'重置密码',plain:true,iconCls:'icon-lock'});
            $(this).datagrid('fixRowHeight');
        }
    };
    var useSetting= $.extend(defaults,setting);
    this.datagrid(useSetting);
    this.datagrid('getPager').cmsPagination();
};
/**
 * 树形布局的封装
 * @param setting
 */
$.fn.cmsTreePanel=function(setting){
    var defaults={
        height:'auto',
        width:'100%'
    };
    var useSetting= $.extend(defaults,setting);
    this.panel(useSetting);

}
/**
 * 树形结构的封装
 * @param setting
 */
$.fn.cmsTree=function(setting){
    var defaults={

    };
    var useSetting= $.extend(defaults,setting);
    this.tree(useSetting);

}
/**
 * 封装的datalist使用
 * @param setting
 */
$.fn.cmsDataList=function(setting){
    var defaults={
        height:'auto',
        width:800,
        fit:true,
        border:true,
        selectOnCheck:true,
        checkOnSelect:false,
        singleSelect:true,
    };
    var useSetting= $.extend(defaults,setting);
    this.datalist(useSetting);
};
/**
 * 默认分页控件的设置
 * @param setting
 */
$.fn.cmsPagination=function(setting)
{
    var defaults={
        pageSize:10,
        //showPageList:false,
        showRefresh:false,
        total:0,
        pageNumber:1,
        layout:['list','sep','first','prev','links','next','last','sep','refresh'],
        displayMsg:'总共{total}条记录'
    };
    var useSetting= $.extend(defaults,setting);
    this.pagination(useSetting);
}
/**
 * 封装查询框
 * @param setting
 */
$.fn.cmsSearchbox=function(setting)
{
    var defaults={
        prompt:'输入默认值',
        searcher:function(value,name)
        {
            alert('value:'+value);
        },
    };
    var useSetting= $.extend(defaults,setting);
    this.searchbox(useSetting);
}

/**
 * 封装默认窗口显示
 */
$.fn.cmsDialog=function(setting)
{
    var defaults={
        title:'标题',
        width:400,
        height:'80%',
        modal:true,
        autoOpen:false,
        buttons:[{
         text:'关闭',
         iconCls:'icon-cancel',
         handler:function(){
             $(this).parent().parent().find(".panel-body").dialog("close");
         }}
        ]
    };
    var useSetting= $.extend(defaults,setting);
    this.dialog(useSetting);
}


/**
 * 请求完成后过滤403 404错误
 */
$(document).ajaxComplete(function(evt,req,settings){
    if(req && req.responseJSON)
    {
        var json=req.responseJSON;
        if(json.code===403 && responseText.search("用户名或密码错误") > - 1 && !json.success)
        {
            window.location.reload();
            return;
        }
        if(json.code===404 && !json.success)
        {
            window.location.href=location.protocol+'//'+location.hostname+'/error.html'
        }
    }
});
/**
 * 请求错误提示，主要针对系统错误
 */
$(document).ajaxError(function(evt,req,setting){
    if(req && (req.status == 200 ||req.status ==0 ))
    {
        return false;
    }
    var msg='错误:';
    if(req && req.responseJSON)
    {
        var json=req.responseJSON;
        msg +=json.code||'';
        msg +=json.info||'系统异常,请重试';
    }else{
        msg ='系统异常,请重试';
    }
    $.messager.alert('系统错误',msg,'error')
});

