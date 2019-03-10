'use strict';

indexModule.controller("loginController",["$scope", "$timeout", "$http", "$cookies", "SweetAlert",  function ($scope, $timeout, $http, $cookies, SweetAlert) {

    $scope.mykeyup = function (e) {
        if (e.keyCode == 13 && $scope.userName != "" && $scope.password != "") {
            $scope.login();
        }
    };

    $scope.init = function () {
        if($cookies.get('rememberUserName') !== undefined){
            $scope.userName = $cookies.get('rememberUserName');
            $scope.password = $cookies.get('rememberPassword');
            $scope.remember = true;
        }
    };

    //登录
    $scope.login = function () {
        $http.post("/decoder/user/login?userId=" + $scope.userName + "&&password=" + $scope.password, {}).success(function (data) {
            if(data != null && data != ""){
                window.location.href = "videoHome.jsp";
                $cookies.put('userId', data.userId);
                $cookies.put('userName', data.userName);
                if($scope.remember) {
                    $cookies.put('rememberUserName', data.userName);
                    $cookies.put('rememberPassword', data.password);
                } else {
                    $cookies.remove('rememberUserName', data.userName);
                    $cookies.remove('rememberPassword', data.password);
                }
            } else {
                SweetAlert.swal("用户名或密码错误!", "", "error");
            }
        }).error(function (data) {
            alert(data);
            $("#serverErrorModal").modal({show: true});
        });
    };

}]);