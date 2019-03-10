<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html ng-app="indexModule">
<head>
    <link rel="icon" href="images/connect.png" type="image/x-icon"/>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=9">
    <%--js--%>
    <script src="extJs/angular.js"></script>
    <script src="extJs/angular-animate.js"></script>
    <script src="extJs/angular-cookies.js"></script>
    <script src="extJs/angular-route.js"></script>
    <script src="extJs/angular-sanitize.js"></script>
    <script src="extJs/jquery-1.11.0.js"></script>
    <script src="extJs/bootstrap.js"></script>
    <script src="extJs/ng-table/ng-table.js"></script>
    <script src="extJs/placeholder.js"></script>
    <script src="extJs/ngSweetAlert/SweetAlert.min.js"></script>
    <script src="extJs/ngSweetAlert/sweet-alert.min.js"></script>
    <script src="extJs/ngDraggable.js"></script>

    <%--controller--%>
    <script src="js/controllers/videoHome.controller.js"></script>
    <script src="js/controllers/broadcastManage.controller.js"></script>
    <script src="js/controllers/userManage.controller.js"></script>
    <script src="js/controllers/logWatch.controller.js"></script>
    <script src="js/controllers/systemInstall.controller.js"></script>
    <script src="js/controllers/login.controller.js"></script>

    <%--css--%>
    <link href="css/login.css" rel="stylesheet">
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen" />
    <link href="css/page.css" rel="stylesheet" type="text/css" />
    <link href="extJs/ng-table/ng-table.css" rel="stylesheet"/>
    <link href="extJs/ngSweetAlert/sweet-alert.css" rel="stylesheet">

    <!-- Utils -->
    <script type="text/javascript" src="extJs/utils/modal.utils.js"></script>
    <script type="text/javascript" src="extJs/utils/common.utils.js"></script>
    <script type="text/javascript" src="extJs/utils/date.utils.js"></script>
    <title>登录</title>
</head>
<body>
    <div ng-controller="loginController" data-ng-init="init()" style="width: 100%;height: 100%;">
        <div class="interfaceContent">
            <div class="loginTitle"><span>视频管理平台</span></div>
            <div class="loginFrame" ng-keyup="mykeyup($event)">
                <span style="font-size: 18px;color: #666;">用户登录</span>
                <div class="sphere" style="margin: 24px 0 14px 0;"><img src="images/userName.png" class="loginPicture"><input ng-model="userName" type="text" class="userName" placeholder="请输入用户名"/></div>
                <div class="sphere" style="margin-bottom: 14px;"><img src="images/password.png" class="loginPicture"><input ng-model="password" type="password" class="password" placeholder="请输入密码"/></div>
                <div class="remember"><input type="checkbox" ng-model="remember" class="check" style="margin: 0 8px 0 0;"/>记住我</div>
                <button type="button" class="loginBtn" ng-click="login()">登录</button>
            </div>
        </div>
    </div>
</body>
</html>
