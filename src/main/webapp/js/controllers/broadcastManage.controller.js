'use strict';

indexModule.directive('ngRightClick', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });

    };
});

indexModule.directive('ieSelectFix', [
    '$document',

    function ($document) {

        return {
            restrict: 'A',
            require : 'ngModel',
            link    : function (scope, element, attributes) {
                var isIE = $document[0] && $document[0].attachEvent;
                if (!isIE) return;

                var $ele = element[0];
                //to fix IE8 issue with parent and detail controller, we need to depend on the parent controller
                scope.$watch(attributes.ieSelectFix, function () {
                    // setTimeout is needed starting from angular 1.3+
                    setTimeout(function () {
                        //this will add and remove the options to trigger the rendering in IE8
                        var oOption = new Option();
                        $ele.add(oOption);
                        $ele.remove($ele.options.children.length - 1);
                    }, 0);
                });
            }
        }
    }
]);

indexModule.controller("broadcastController",["$scope","$timeout","$http", "$interval", "SweetAlert", function ($scope, $timeout, $http, $interval, SweetAlert) {

    videojs.options.flash.swf = "extJs/videoJS_5.18.4/video-js-fixed.swf";
    videojs.options.techOrder = ['html5','flash'];
    /*$scope.cameraNews=[{
        cameraName:"摄像头-44",
        status:1,          //id中0是未连接状态，1是连接状态
        only:1,
        ip:"192.168.1.44"
    },{
        cameraName:"摄像头-191",
        status:0,
        only:2,
        ip:"192.168.1.191"
    }];

    /*$scope.decoderNews=[{
        decoderName:"解码器_65",
        onlyId:1,
        style:0,     //style中0是未连接，1是已连接，2是连接失败
        headName:"",
        ip:"192.168.1.65"
    },{
        decoderName:"解码器二",
        onlyId:2,
        style:0,
        headName:""
    }];*/

    $scope.formData = {};

    //刷新解码器 摄像头 未知设备
    $scope.refreshAll = function () {
        $scope.refreshUnknownDevices();
        $scope.refreshDecoders();
        $scope.refreshCameras();
    };

    //刷新摄像头
    $scope.refreshCameras = function() {
        $http.post("/decoder/camera/getCameraList",{}).success(function (data) {
            $scope.cameraNews = data;
        }).error(function (data) {
            $("#serverErrorModal").modal({show: true});
        });
    };
    $scope.refreshCameras();

    //刷新解码器
    $scope.refreshDecoders = function () {
        //获取所有解码器
        $http.post("/decoder/decoderManager/getDecoderList", {}).success(function (response) {
            console.log("getDecoderList：", response);
            if (response && response.resultCode === "RESULT_SUCCESS") {
                $scope.decoderNews = [];
                var decodingCamera = [];
                //todo 假的解码器
                response.data.push({ip:"192.168.1.138", id : 111, status: "1", defaultChannel:{status:"fail"}});
                //response.data.push({ip:"192.168.1.124", id : 222, status: "1", defaultChannel:{status:"unConnected"}});
                angular.forEach(response.data, function (decoder) {
                    var showDecoder = decoder;
                    if (decoder.status == "1") {
                        var defaultChannel = decoder.defaultChannel;
                        showDecoder.editorMenu = false;
                        showDecoder.decoderName = decoder.decoderName ? decoder.decoderName : "解码器_" +  decoder.ip;
                        showDecoder.head = defaultChannel.cameraIp;
                        if (defaultChannel.status === "decoding") {
                            decodingCamera.push(defaultChannel.cameraIp);
                            showDecoder.style = 1;
                            showDecoder.hide=false;
                            showDecoder.videoWatch = true;
                            showDecoder.loading=false;
                            showDecoder.cover = "images/cover/" +decoder.ip + ".jpg?t=" + Math.random();
                        } else if (defaultChannel.status === "fail") {
                            showDecoder.style = 2;
                            showDecoder.hide=true;
                            showDecoder.videoWatch = false;
                        } else if (defaultChannel.status === "unConnected") {
                            showDecoder.style = 0;
                            showDecoder.hide=false;
                            showDecoder.videoWatch = false;
                        }
                        $scope.decoderNews.push(showDecoder);

                    } else if(decoder.status == "0") {
                        showDecoder.style = 2;
                        showDecoder.decoderName = decoder.decoderName ? decoder.decoderName : "解码器_" +  decoder.ip;
                        $scope.decoderNews.push(showDecoder);
                    }
                });
                console.log("$scope.decoderNews:", $scope.decoderNews);
            }
        }).error(function (data) {
            $("#serverErrorModal").modal({show: true});
        });
    };

    //提交新增或修改解码器的表单
    $scope.submitDecoder = function (){
        console.log($scope.formData);
        if ($scope.decoderAction === "edit") {
            $http.post("/decoder/decoderManager/update", $scope.formData).success(function(response) {
                if (response.message === "success") {
                    SweetAlert.swal("修改成功", "", "success");
                    $("#DecoderModal").modal('hide');
                    $scope.refreshAll();
                } else {
                    SweetAlert.swal("修改失败", "", "error");
                }
            }).error(function (data) {
                alert("Error occured3 " + data)
            });
        } else if ($scope.decoderAction === "add") {
            $http.post("/decoder/decoderManager/add", $scope.formData).success(function(response) {
                if (response.message === "success") {
                    SweetAlert.swal("新增成功", "", "success");
                    $("#DecoderModal").modal('hide');
                    $scope.refreshAll();
                } else {
                    SweetAlert.swal("新增失败", "", "error");
                }
            }).error(function (data) {
                alert("Error occured4 " + data)
            });
        }
    };

    $scope.refreshDecoders();
    //每三十秒刷新一次
    $interval(function () {
        $scope.refreshDecoders();
    }, 30000);


    //刷新未知设备
    $scope.refreshUnknownDevices = function () {
        //获取所有解码器
        $http.get("/decoder/unknown/list").success(function (data) {
            console.log("unknown/list：", data);
            if (data) {
                $scope.unknownDevices = data.data;
                if($scope.unknownDevices.length=='0'){
                    $scope.unrecognizedArea=false;
                }else{
                    $scope.unrecognizedArea=true;
                }
            }
        }).error(function (data) {
            console.log("获取未知设备接口报错" + data);
        });
    };
    $scope.refreshUnknownDevices();

    $scope.addDecoder=function () {
        $scope.formData={};
        $scope.openShow='';
        $("#DecoderModal").modal({show: true, keyboard: false, backdrop: 'static'});
    };

    $scope.eyeOpen=function () {
        $scope.openShow=!$scope.openShow;
    };
    $scope.eyeClose=function () {
        $scope.graphic=!$scope.graphic;
    };

    //拖动方式添加解码器
    $scope.addDecoderDrag = function (index) {
        var device = $scope.unknownDevices[index];
        //需要判断解码器中是否已经存在mac相同的设备 有的话先要删除
        var haveSame = false;
        angular.forEach($scope.decoderNews, function (decoder) {
            if (decoder.macAddress === device.mac) {
                SweetAlert.swal("解码器列表中已经存在mac为" + device.mac + "的设备(" + decoder.decoderName + "),请先将其移除!", "", "error");
                haveSame = true;
            }
        });
        if (haveSame) {return;}
        $scope.decoderAction = "add";
        $scope.formData = {};
        console.log("待添加的未知设备:", device);
        $scope.formData.ip = device.ipv4Address;
        $scope.formData.model = device.deviceDescription;
        $scope.formData.macAddress = device.mac;
        $scope.formData.decoderName = "解码器_" + device.ipv4Address;
        $("#DecoderModal").modal({show: true, keyboard: false, backdrop: 'static'});
    };

    // 打开添加摄像头模态框
    $scope.addCameraBefore = function () {
        $scope.formData = {};
        $scope.graphic='';
        $("#addAndUpdateCameraModal").modal({show: true, keyboard: false, backdrop: 'static'});
    };
    //拖动方式打开新增摄像头模态框
    $scope.addCameraDragBefore = function (index) {
        var device = $scope.unknownDevices[index];
        //需要判断摄像头中是否已经存在mac相同的设备 有的话先要删除
        console.log("$scope.cameraNews", $scope.cameraNews);
        var haveSame = false;
        angular.forEach($scope.cameraNews, function (camera) {
            if (camera.mac === device.mac) {
                SweetAlert.swal("摄像头列表中已经存在mac为" + device.mac + "的设备(" + camera.cameraName + "),请先将其移除!", "", "error");
                haveSame = true;
            }
        });
        if (haveSame) {return;}
        $scope.formData = {};
        $scope.cameraAction = "新增";
        console.log("待添加的未知设备:", device);
        $scope.formData.ip = device.ipv4Address;
        $scope.formData.model = device.deviceDescription;
        $scope.formData.mac = device.mac;
        $scope.formData.cameraName = "摄像头_" + device.ipv4Address.substring(device.ipv4Address.lastIndexOf(".") + 1);
        $("#addAndUpdateCameraModal").modal({show: true, keyboard: false, backdrop: 'static'});

    };

    //添加摄像头
    $scope.submitCamera = function (){
        $http.post("/decoder/camera/submit",$scope.formData).success(function(response) {
            if (response.message === "success") {
                $("#addAndUpdateCameraModal").modal('hide');
                $scope.refreshAll();
            } else {
                alert("保存失败！");
            }
        }).error(function (data) {
            $("#serverErrorModal").modal({show: true});
        });
    };

    // // 摄像头input失去焦点
    // $scope.overInput=function () {
    //     if(document.getElementById("newName").value==''){
    //         document.getElementById("newName").value="摄像头名称";
    //     }
    //     $scope.newCameraName= document.getElementById("newName").value;
    //     $scope.addModule=false;
    // };

    // 禁止backspace键具有后退功能
    /*document.onkeydown = check;
    function check(e) {
        var code;
        if (!e) var e = window.event;
        if (e.keyCode) code = e.keyCode;
        else if (e.which) code = e.which;
        if (((event.keyCode == 8) &&
            ((event.srcElement.type != "text" &&
            event.srcElement.type != "textarea" &&
            event.srcElement.type != "password") ||
            event.srcElement.readOnly == true)) ||
            ((event.ctrlKey) && ((event.keyCode == 78) || (event.keyCode == 82)) )) {
            event.keyCode = 0;
            event.returnValue = false;
        }
        return true;
    }*/

    // input禁用
    $scope.prohibit=true;
    // 右击
    $scope.rightClick=function (index) {
        var e = event || window.event;
        var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        var x = e.pageX || e.clientX + scrollX;
        var y = e.pageY || e.clientY + scrollY;
        $scope.rightDiv=true;
        $scope.where={
            "left":x+'px',
            "top":y+'px',
        };
        // 重命名
        /*$scope.rename=function () {
            $scope.prohibit=false;
            $timeout(function () {
                var input=document.getElementById("rename"+$scope.cameraNews[index].id);
                if(input){
                    input.focus();
                }
            })
        };*/

        //打开修改摄像头模态框
        $scope.editCameraBefore = function (){
            var id = $scope.cameraNews[index].id;
            $scope.cameraAction = "修改";
            $http.get("/decoder/camera/getCameraInfo?id=" + id).success(function(response) {
                $scope.formData = response;
                $("#addAndUpdateCameraModal").modal({show: true, keyboard: false, backdrop: 'static'});
            }).error(function (data) {
                $("#serverErrorModal").modal({show: true});
            });
        };

        //删除
        $scope.remove = function () {
            var id = $scope.cameraNews[index].id;
            SweetAlert.swal({
                    title: "确认删除?",
                    text: "",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "确认",
                    closeOnConfirm: true},
                function(isConfirm){
                    if(isConfirm) {
                        $http.delete("/decoder/camera/delete?id="+id).success(function (response) {
                            if(response.message === "success"){
                                $scope.refreshAll();
                            } else {
                                alert("删除异常！");
                            }
                        }).error(function (data) {
                            alert("删除异常！");
                        });
                    }
                }
            );
        }
    };

    // 未识别区域展开未展开
    $scope.unModule=false;
    $scope.unCloseTrue=true;
    $scope.unStop='收起';
    $scope.unOpenOrClose=function () {
        if($scope.unOpenTrue==true) {
            $scope.unModule = false;
            $scope.unStop='收起';
            $scope.unOpenTrue=false;
            $scope.unCloseTrue = true;
        }else{
            $scope.unCloseTrue = false;
            $scope.unModule = true;
            $scope.unStop='展开';
            $scope.unOpenTrue = true;
        }
    };

    // 重命名失去焦点
    /*$scope.renameOver=function () {
        $scope.prohibit=true;
    };*/

    // 点击任何一处让右击菜单消失
    document.body.onclick=function () {
        $timeout(function () {
            $scope.rightDiv=false;
            return;
        },100);
    };

    // 摄像头展开未展开
    $scope.closeModule=false;
    $scope.closeTrue=true;
    $scope.openStop='收起';
    $scope.openOrClose=function () {
        if($scope.openTrue==true) {
            $scope.closeModule = false;
            $scope.openStop='收起';
            $scope.openTrue=false;
            $scope.closeTrue = true;
        }else{
            $scope.closeTrue = false;
            $scope.closeModule = true;
            $scope.openStop='展开';
            $scope.openTrue = true;
        }
    };

    //测试摄像头连接
    $scope.changeState = function (index) {
        var camera = $scope.cameraNews[index];
        $scope.cameraNews[index].wait=true;
        $http.post("/decoder/camera/link", camera).success(function(response) {
            console.log("link:", response);
            if (response.resultCode === "RESULT_SUCCESS") {
                $scope.cameraNews[index].wait=false;
                $scope.cameraNews[index].status = '1';
            } else {
                $scope.cameraNews[index].wait=false;
                $scope.cameraNews[index].status = '0';
                SweetAlert.swal(response.message, "", "error");
            }
        }).error(function (data) {
            alert("Error occured6 " + data)
        });
    };


    //未知设备拖动释放后出发
    $scope.upAndDown=function (index) {
        var aCameraList=document.getElementsByClassName("cameraList")[0];
        var aDecompilerList=document.getElementsByClassName("decompilerList")[0];
        var aRolling=document.getElementById("rolling");
        var e=event||window.event;
        var nowLeft=e.clientX;
        var nowTop=e.clientY;
        var bodyTop=aRolling.scrollTop;
        if(nowLeft>aCameraList.offsetLeft && nowLeft<aCameraList.offsetWidth+aCameraList.offsetLeft && nowTop>aCameraList.offsetTop-bodyTop && nowTop<aCameraList.offsetTop+aCameraList.offsetHeight-bodyTop){
            console.log("拖动方式添加摄像头");
            console.log("设备信息",$scope.unknownDevices[index]);
            $scope.addCameraDragBefore(index);

        }else if(nowLeft>aDecompilerList.offsetLeft && nowLeft<aDecompilerList.offsetWidth+aDecompilerList.offsetLeft && nowTop>aDecompilerList.offsetTop-bodyTop && nowTop<aDecompilerList.offsetTop+aDecompilerList.offsetHeight-bodyTop){
            console.log("拖动方式添加解码器");
            console.log("设备信息",$scope.unknownDevices[index]);
            $scope.addDecoderDrag(index);
        }
    };

        $scope.follow=function (index) {
            var aPressOnContent=document.getElementsByClassName("pressOnContent")[index];
            var aBubble=document.getElementsByClassName("bubble")[0];
            $scope.reveal=$scope.unknownDevices[index];
            aPressOnContent.onmousemove=function (event) {
                var e = event || window.event;
                var x = e.clientX;
                var y = e.clientY;
                var bodyTop=document.body.scrollTop;
                aBubble.style.display='block';
                aBubble.style.left=x+25+'px';
                aBubble.style.top=y+40+bodyTop+'px';
            };
            $scope.shiftOut=function () {
                aBubble.style.display='none';
            };
        };

        //解码器右上角按钮点击
        $scope.editDecoder=function (index) {
            if($scope.decoderNews[index].editorMenu==false){
                for(var i=0; i<$scope.decoderNews.length;i++){
                    $scope.decoderNews[i].editorMenu=false;
                }
                $scope.decoderNews[index].editorMenu=true;
            }else{
                $scope.decoderNews[index].editorMenu=false
            }
            //点击修改
            $scope.editorDecoder=function () {
                $scope.decoderAction = "edit";
                $scope.decoderNews[index].editorMenu=false;
                var id = $scope.decoderNews[index].id;
                $http.get("/decoder/decoderManager/getDecoderInfo?id="+id).success(function(response){
                    $scope.formData = response;
                    if($scope.formData.decoderName==null||$scope.formData.decoderName==""){
                        $scope.formData.decoderName = "解码器_" +  response.ip;
                    }
                    $("#DecoderModal").modal({show: true});
                }).error(function (data) {
                    $("#serverErrorModal").modal({show: true});
                });
            };
            $scope.removeDecoder = function (){
                var id = $scope.decoderNews[index].id;
                SweetAlert.swal({
                        title: "确认删除?",
                        text: "",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "确认",
                        closeOnConfirm: true},
                    function(isConfirm){
                        if(isConfirm) {
                            $http.delete("/decoder/decoderManager/delete?id="+id).success(function (response) {
                                    if (response.message === "success") {
                                        $scope.refreshAll();
                                    } else {
                                        SweetAlert.swal("删除失败", "", "error");
                                    }
                                }
                            ).error(function (data) {
                                $("#serverErrorModal").modal({show: true});
                            });
                        }

                    }
                );

            }
        };


    // 解码器展开未展开
    $scope.closeStyle=true;
    $scope.decompilerStyle='收起';
    $scope.decompilerOpen=function () {
        if($scope.openStyle==true) {
            $scope.decompilerStyle='收起';
            $scope.decoderModule = false;
            $scope.openStyle=false;
            $scope.closeStyle = true;
        }else{
            $scope.closeStyle = false;
            $scope.decoderModule = true;
            $scope.decompilerStyle='展开';
            $scope.openStyle = true;
        }
    };

    // 解码器连接按钮
    $scope.connectBtn=function (index) {
        $scope.decoderNews[index].loading = true;
        var decoder = $scope.decoderNews[index];
        var cameraIp = $scope.decoderNews[index].head;

        var url = "/decoder/decoderManager/startDecoderConfig?cameraIp=" + cameraIp + "&&decoderIp=" + decoder.ip;
        $http.post(url, {}).success(function (data) {
            console.log("startDecoderConfig：", data);
            if (data.resultCode === "RESULT_SUCCESS") {
                //这里设置延时是因为解码参数设置成功之后 解码器需要一定的响应时间
                $timeout(function () {
                    $scope.decoderNews[index].loading = false;
                    //刷新解码器
                    $scope.refreshAll();
                }, 4000);
            } else {
                SweetAlert.swal(data.message, "", "error");
            }

        }).error(function (data) {
            $("#serverErrorModal").modal({show: true});
        });
    };

    //测试摄像头连接
    $scope.testCameraLink = function () {
        console.log($scope.formData);
        $http.post("/decoder/camera/link", $scope.formData).success(function(response) {
            console.log("link:", response);
            if (response.resultCode === "RESULT_SUCCESS") {
                $scope.formData.status = '1';
                SweetAlert.swal(response.message, "", "success");
            } else {
                $scope.formData.status = '0';
                SweetAlert.swal(response.message, "", "error");
            }
        }).error(function (data) {
            alert("Error occured1 " + data);
        });
    };

    //测试解码器连接
    $scope.testDecoderLink = function () {
        console.log($scope.formData);
        $http.post("/decoder/decoderManager/canHKLink", $scope.formData).success(function(response) {
            console.log("canHKLink:", response);
            if (response.resultCode === "RESULT_SUCCESS") {
                $scope.formData.status = '1';
                SweetAlert.swal(response.message, "", "success");
            } else {
                $scope.formData.status = '0';
                SweetAlert.swal(response.message, "", "error");
            }
        }).error(function (data) {
            alert("Error occured2 " + data);
        });

    };

    //使用vlc浏览器插件进行rtsp预览
    $scope.vlcReview = function (decoder) {
        console.log("decoder:", decoder);
        var ip = decoder.head;
        if (ip === "192.168.1.44") {
            window.open('vlc.html', '', 'width=800,height=600,top=100,left=200')
        } else {
            window.open('vlc191.html', '', 'width=800,height=600')
        }

    };

    //videoJS播放器实例
    var player = null;

    //通过videoJs进行rtmp播放
    $scope.rtmpReview = function (decoder) {
        console.log("点解的decoder", decoder);
        if (decoder.style === 1) {
            var cameraIp = decoder.head;
            $http.post("/decoder/decoderManager/transcode", {ip:cameraIp}).success(function (data) {
                console.log("transcode：", data);

            }).error(function (data) {
                console.log(data);
                alert(2)
                /*$("#serverErrorModal").modal({show: true});*/
            });
            //window.open('page/videoWatch.html')

            $("#videoBody").append(
                "<video id=\"my-video1\" class=\"video-js vjs-big-play-centered\" controls preload=\"auto\" width=\"640\" height=\"360\" poster=\"\" data-setup=\"{}\">" +
                "<source type=\"rtmp/flv\">" +
                "<p class=\"vjs-no-js\">To view this video please enable JavaScript, and consider upgrading to a web browser that" +
                "<a href=\"http://videojs.com/html5-video-support/\" target=\"_blank\">supports HTML5 video</a>" +
                "</p></video>");

            var videoUrl = "rtmp://localhost/live/" + cameraIp;

            $("#my-video1").find("source").attr("src",videoUrl).attr("type","rtmp/mp4");
            player = videojs("my-video1",{
                notSupportedMessage : '您的浏览器没有安装或开启Flash,戳我开启！',
                techOrder : ["flash"],
                autoplay : true,
                controls : false
            });
            player.on("error",function(e){
                var $e = $(".vjs-error .vjs-error-display .vjs-modal-dialog-content");
                var $a = $("<a href='http://www.adobe.com/go/getflashplayer' target='_blank'></a>").text($e.text());
                $e.empty().append($a);
            });

            //player = videojs('my-video1');
            /*videojs('my-video1', {
                controls: true,
                autoplay: true,
                preload: 'auto'
            }, function () {
                player.src(videoUrl);
                player.load(videoUrl);
                player.play();
                this.on('ended', function() {
                    videojs.log('Awww...over so soon?!');
                });
            });*/

            $("#videoWatchModal").modal({show: true, keyboard: false, backdrop: 'static'});
        }

    };

    //关闭监控界面
    $scope.stopWatch = function () {
        //停止所有解码操作
        $http.get("/decoder/decoderManager/stopTranscode").success(function (data) {
            console.log("stopTranscode：", data);
        }).error(function (data) {
            alert(3)
            /*$("#serverErrorModal").modal({show: true});*/
        });
        //销毁播放器
        if (player !== null) {
            player.dispose();
        }
        $("#videoWatchModal").modal('hide');
    };
    $scope.stopWatch();

    //整体刷新按钮
    $scope.renovate = function () {
        $scope.refreshAll();
    }

}]);