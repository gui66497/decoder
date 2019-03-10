//获取字符长度(数字和字母长度为1，汉字长度为2)
function getStrLength(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        //单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            len++;
        }
        else {
            len += 2;
        }
    }
    return len;
}
//获取URL参数
function getQueryString(URL, name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    //var r = window.location.search.substr(1).match(reg);
    var r = URL.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

// 读取cookies
function getCookie(name) {
    var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if(arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return "";
    }
}

//替换全部字符
function replaceAll(str, fromStr, toStr) {
    return str.replace(new RegExp(fromStr, "gm"), toStr);
}