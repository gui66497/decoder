'use strict';

indexModule.controller("userController",['$scope',"$timeout","$http", 'NgTableParams',function ($scope, $timeout, $http, NgTableParams) {
    $scope.req = {};
    $scope.req.paging = {};
    $scope.req.paging.pageNo = 1;
    $scope.req.paging.pageSize = 10;

    var self = this;

    //form表单
    $scope.formData = {};

    function initialRequest() {
        $scope.req.paging = {};
        $scope.req.paging.pageNo = 1;
        $scope.req.paging.pageSize = 10;
    }

    self.tableParams = new NgTableParams({'count': 10}, {
        getData: function (params) {
            //清空请求
            initialRequest();
            console.log("params的url内容", params.url());
            var allParams = params.url();

            $scope.req.paging.pageNo = allParams.page;
            $scope.req.paging.pageSize = allParams.count;

            console.log("req的值为：", $scope.req);
            var promise = $http.post("/decoder/user/getUserList", $scope.req);
            return promise.then(function (data) {
                var response = data.data;
                var total = response.otherData[0];
                params.total(total);
                $scope.tableData = response.data;
                return response.data;

            });
        }
    });

    $scope.addUser = function (){
        $scope.formData = {};
        $("#addAndUpdateUserModal").modal({show: true, keyboard: false, backdrop: 'static'});
    }

    $scope.updateUser = function (index){
        var id = $scope.tableData[index].id;
        $http.get("/decoder/user/getUserInfo?id="+id).success(function(response){
            $scope.formData = response;
            $("#addAndUpdateUserModal").modal({show: true, keyboard: false, backdrop: 'static'});
        }).error(function (data) {
            $("#serverErrorModal").modal({show: true});
        });
    }

    $scope.submitUser = function (){
        $http.post("/decoder/user/submit",$scope.formData).success(function(response) {
            if (response.message == "success") {
                alert("保存成功！");
                $("#addAndUpdateUserModal").modal('hide');
                self.tableParams.reload();
            } else {
                alert("保存失败！");
            }
        }).error(function (data) {
            $("#serverErrorModal").modal({show: true});
        });
    }

    $scope.showDeleteUser = function(index){
        var id = $scope.tableData[index].id;
        showConfirmModal("是否删除？", function () {
            $http.delete("/decoder/user/delete?id="+id).success(function (response) {
                    if (response.message == "success") {
                        self.tableParams.reload();
                        $("#confirmModal").modal('hide');
                    }
                }
            ).error(function (data) {
                $("#serverErrorModal").modal({show: true});
            });
        });
    }


}]);
