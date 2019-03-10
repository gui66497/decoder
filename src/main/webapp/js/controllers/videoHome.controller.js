'use strict';

var indexModule=angular.module("indexModule",['ngRoute', 'ngTable', 'ngCookies', 'ngDraggable', 'oitozero.ngSweetAlert']);

indexModule.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'page/broadcastManage.jsp',
            controller: 'broadcastController'
        }).
        when('/userManage', {
            templateUrl: 'page/userManage.jsp',
            controller: 'userController'
        }).
        when('/logWatch', {
            templateUrl: 'page/logWatch.jsp',
            controller: 'logWatchController'
        }).
        when('/systemInstall', {
            templateUrl: 'page/systemInstall.jsp',
            controller: 'systemController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);

indexModule.controller("videoController",["$scope","$location","$http",function ($scope,$location, $http) {

    $scope.loginName = {};

    // 刷新后判断当前在哪个页面
    $scope.isOn = function (val) {
        var type;
        var url = $location.url();
        if (url === '/') {
            type = 'broadcast';
        } else if (url==='/userManage') {
            type = 'userManage';
        } else if (url==='/logWatch') {
            type = 'logWatch';
        } else if (url==='/systemInstall') {
            type = 'systemInstall';
        }
        return val === type ? 'onlyStyle' : '';
    };

    $scope.hasLogin = function (){
        $http.post("/decoder/user/hasLogin", {}).success(function (data) {
            $scope.loginName = data.userName;
        }).error(function (data) {
            var absUrl = $location.absUrl();
            var url = absUrl.substr(0, absUrl.indexOf("/decoder"));
            window.location.href = url + "/decoder";
        });
    };

    $scope.hasLogin();

    $scope.logout = function (){
        var absUrl = $location.absUrl();
        var url = absUrl.substr(0, absUrl.indexOf("/decoder"));
        window.location.href = url + "/decoder";
    };

}]);
