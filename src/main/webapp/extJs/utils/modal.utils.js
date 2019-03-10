'use strict';

//给指定元素绑定事件（允许带参数)
function bindEventWithArgs(target, eventName, handler, args) {
    var eventHandler = handler;
    if(args) {
        eventHandler = function(e) {
            handler.call(args, e);
        }
    }
    if(window.attachEvent) {    //IE
        target.attachEvent("on" + eventName, eventHandler);
    } else {    //FF
        target.addEventListener(eventName, eventHandler, false);
    }
}

//弹出消息提醒框
function showOkModal(label, contennt) {
    $("#okModalLabel")[0].innerHTML = label;
    $("#okModalMessage")[0].innerHTML = contennt;
    $("#okModal").modal({
        show : true
    });
}

//弹出确认框并对确认按钮绑定事件
function showConfirmModal(content, fn, param) {
    //$("#confirmModalLabel")[0].innerHTML = label;
    $("#confirmModalMessage")[0].innerHTML = content;
    $("#confirmModal").modal({
        show: true,
        keyboard: false,
        backdrop: 'static'
    });
    $("#btnExecute").remove();
    $("#confirmModalFooter").append('<button type="button" id="btnExecute" class="sure">确定</button>');
    var btn = document.getElementById("btnExecute");
    if(param==null) {
        $("#btnExecute").bind("click", eval(fn));
    } else {
        bindEventWithArgs(btn, "click", fn, param);
    }
    $("#btnExecute").bind("click", eval(hideConfirmModal));
}

//隐藏确认模态框
function hideConfirmModal() {
    $("#confirmModal").modal('hide');
}