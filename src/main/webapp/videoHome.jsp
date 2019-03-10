<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html ng-app="indexModule">
<head>
    <link rel="icon" href="images/connect.png" type="image/x-icon"/>
    <meta charset="UTF-8" http-equiv="X-UA-Compatible" content="IE=9">
    <%--js--%>
    <script src="extJs/angular.js"></script>
    <script src="extJs/angular-animate.js"></script>
    <script src="extJs/angular-cookies.js"></script>
    <script src="extJs/angular-route.js"></script>
    <script src="extJs/angular-sanitize.js"></script>
    <script src="extJs/jquery-1.11.0.js"></script>
    <script src="extJs/common.js"></script>
    <script src="extJs/bootstrap/js/bootstrap.js"></script>
    <script src="extJs/videoJS_5.19.2/js/video.js"></script>
    <script src="extJs/videoJS_5.19.2/js/videojs-contrib-hls4.js"></script>
   <%-- <script src="extJs/videoJS_5.18.4/js/video.min.js"></script>
    <script src="extJs/videoJS_5.18.4/js/videojs-ie8.min.js"></script>--%>
    <script src="extJs/ng-table/ng-table.js"></script>
    <script src="extJs/placeholder.js"></script>
    <script src="extJs/ngDraggable.js"></script>
    <script src="extJs/ngSweetAlert/SweetAlert.min.js"></script>
    <script src="extJs/ngSweetAlert/sweet-alert.min.js"></script>


    <%--controller--%>
    <script src="js/controllers/videoHome.controller.js"></script>
    <script src="js/controllers/broadcastManage.controller.js"></script>
    <script src="js/controllers/userManage.controller.js"></script>
    <script src="js/controllers/logWatch.controller.js"></script>
    <script src="js/controllers/systemInstall.controller.js"></script>
    <script src="js/controllers/login.controller.js"></script>


    <%--css--%>
    <link href="css/videoHome.css" rel="stylesheet">
    <link href="css/broadcastManage.css" rel="stylesheet">
    <link href="extJs/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen" />
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen" />
    <link href="css/page.css" rel="stylesheet" type="text/css" />
    <link href="extJs/videoJS_5.19.2/css/video-js.css" rel="stylesheet">
    <%--<link href="extJs/videoJS_5.18.4/css/video-js.css" rel="stylesheet">--%>
    <link href="extJs/ngSweetAlert/sweet-alert.css" rel="stylesheet">

    <!-- Utils -->
    <script type="text/javascript" src="extJs/utils/modal.utils.js"></script>
    <script type="text/javascript" src="extJs/utils/common.utils.js"></script>
    <script type="text/javascript" src="extJs/utils/date.utils.js"></script>
    <title>网络视频管理系统</title>
</head>
<body style="background: rgb(234,238,241);">
<div ng-controller="videoController" style="height: 100%;">
    <div id="videoHead">
        <div class="logoContent">
            <img src="images/logo.png" style="width: 27px;height: 27px;margin: 10.5px 6px;float:left;">
            <span class="title">网络视频管理系统</span>
        </div>
        <div class="logoRight">
            <div class="searchSphere">
                <span class="searchSpan"></span>
                <input type="text" class="search" placeholder="请输入查找内容"/>
            </div>

            <div class="loginNews">
                Hi,
                <a href="javascript:void(0)" ng-cloak>{{loginName}}</a>
                <span class="news" title="消息"></span>
                <span class="quit" ng-click="logout()" title="退出"></span>
            </div>
        </div>
    </div>
    <div id="videoContent">
        <div class="videoChange">
            <ul>
                <li ng-class="isOn('broadcast')"><a style="color: #fff;text-decoration: none;" href="#/"><img src="images/leftBtn1.png" class="leftBtn">播放管理</a></li>
                <li ng-class="isOn('userManage')"><a  style="color: #fff;text-decoration: none;" href="#/userManage"><img src="images/leftBtn2.png" class="leftBtn">用户管理</a></li>
                <li ng-class="isOn('logWatch')"><a style="color: #fff;text-decoration: none;" href="#/logWatch"><img src="images/leftBtn3.png" class="leftBtn">日志查看</a></li>
                <li ng-class="isOn('systemInstall')"><a style="color: #fff;text-decoration: none;"  href="#/systemInstall"><img src="images/leftBtn4.png" class="leftBtn">系统设置</a></li>
            </ul>
        </div>

        <div id="contentDiv" ng-view>

        </div>

    </div>

    <!-- 确认操作模态框（Modal） -->
    <div class="modal fade" id="confirmModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="top: 100px;">
        <div class="modal-dialog" style="width: 360px">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" style="float:left;">
                        提示信息
                    </h4>
                    <button type="button" class="closeTable" data-dismiss="modal" aria-hidden="true"/>
                </div>
                <div class="modal-body" id="confirmModalMessage" style="height:75px;font-size: 16px;">
                    在这里添加1一些文本
                </div>
                <div class="modal-footer" id="confirmModalFooter">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary" id="btnExecute">确 认</button>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
<script>

</script>