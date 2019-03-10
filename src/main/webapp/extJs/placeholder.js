/**
 * Created by Administrator on 2017/11/21.
 */
(function($) {
    var placeholderfriend = {
        focus: function(s) {
            s = $(s).hide().prev().show().focus();
            var idValue = s.attr("id");
            if (idValue) {
                s.attr("id", idValue.replace("placeholderfriend", ""));
            }
            var clsValue = s.attr("class");
            if (clsValue) {
                s.attr("class", clsValue.replace("placeholderfriend", ""));
            }
        }
    };
    //判断是否支持placeholder
    function isPlaceholer() {
        var input = document.createElement('input');
        return "placeholder" in input;
    }
    //不支持的代码
    if (!isPlaceholer()) {
        $(function() {
            var form = $(this);
            //遍历所有文本框，添加placeholder模拟事件
            var elements = form.find("input[type='text'][placeholder]");
            elements.each(function() {
                var s = $(this);
                var pValue = s.attr("placeholder");
                var sValue = s.val();
                if (pValue) {
                    if (sValue == '') {
                        s.val(pValue);
                    }
                }
            });
            elements.focus(function() {
                var s = $(this);
                var pValue = s.attr("placeholder");
                var sValue = s.val();
                if (sValue && pValue) {
                    if (sValue == pValue) {
                        s.val('');
                    }
                }
            });
            elements.blur(function() {
                var s = $(this);
                var pValue = s.attr("placeholder");
                var sValue = s.val();
                if (!sValue) {
                    s.val(pValue);
                }
            });
            //遍历所有密码框，添加placeholder模拟事件
            var elementsPass = form.find("input[type='password'][placeholder]");
            elementsPass.each(function(i) {
                var s = $(this);
                var pValue = s.attr("placeholder");
                var sValue = s.val();
                if (pValue) {
                    if (sValue == '') {
                        //DOM不支持type的修改，需要复制密码框属性，生成新的DOM
                        var html = this.outerHTML || "";
                        html = html.replace(/\s*type=(['"])?password\1/gi, " type=text placeholderfriend")
                            .replace(/\s*(?:value|on[a-z]+|name)(=(['"])?\S*\1)?/gi, " ")
                            .replace(/\s*placeholderfriend/, " placeholderfriend value='" + pValue
                                + "' " + "onfocus='placeholderfriendfocus(this);' ");
                        var idValue = s.attr("id");
                        if (idValue) {
                            s.attr("id", idValue + "placeholderfriend");
                        }
                        var clsValue = s.attr("class");
                        if (clsValue) {
                            s.attr("class", clsValue + "placeholderfriend");
                        }
                        s.hide();
                        s.after(html);
                    }
                }
            });
            elementsPass.blur(function() {
                var s = $(this);
                var sValue = s.val();
                if (sValue == '') {
                    var idValue = s.attr("id");
                    if (idValue) {
                        s.attr("id", idValue + "placeholderfriend");
                    }
                    var clsValue = s.attr("class");
                    if (clsValue) {
                        s.attr("class", clsValue + "placeholderfriend");
                    }
                    s.hide().next().show();
                }
            });
        });
    }
    window.placeholderfriendfocus = placeholderfriend.focus;
})(jQuery);