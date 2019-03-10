<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<style type="text/css">
    td {
        border: 0px solid #c0c0c0;
        border-collapse: collapse;
        font-size: 14px;
        text-align: center;
    }

    tr {
        border-bottom: none !important;
        border-left: 0px;
        border-right: 0px;
        border-top: 0px;
        border-collapse: collapse;
        height: 40px;
    }

    thead td {
        font-size: 14px;
        font-weight: bold;
    }

    .editBtn {
        width: 20px;
        height: 20px;
        border: 0;
        background: url("images/edit.png");
        margin-right: 5px;
    }

    .editBtn:hover {
        background: url("images/edit_hover.png");
    }

    .deleteBtn {
        width: 20px;
        height: 20px;
        border: 0;
        background: url("images/delete.png");
    }

    .deleteBtn:hover {
        background: url("images/delete_hover.png");
    }
    .information{
        margin-right: 10px;
        width: 100px;
        height: 32px;
        background-color: #4dbd73;
        font-family: 微软雅黑;
        font-size: 14px;
        color: #fff;
        border: 0px;
        border-radius: 4px;
        margin-bottom: 15px;
    }
</style>
<body ng-app="indexModule">
<div ng-controller="userController as controller">
    <div style="margin-top: 10px;">
        <button class="add information" ng-click="addUser()" type="button">
            <span class="glyphicon glyphicon-plus" style="font-size: 18px;font-weight: 700;"></span> 新增用户
        </button>
        <table ng-table="controller.tableParams" id="userListTable" align="center"
               class="table table-bordered table-striped table-condensed">
            <thead style="display: table;width: calc( 100% - 17px );table-layout:fixed;">
            <tr style="display: table;width:100%;table-layout:fixed;">
                <td width="15%">编号</td>
                <td width="25%">用户号</td>
                <td width="25%">用户名</td>
                <td width="25%">密码</td>
                <td width="10%">操作</td>
            </tr>
            </thead>
            <tbody style="display: block;height: 400px;overflow-y:scroll;width: 100%;">
                <tr ng-repeat="row in $data" class="contentTr" style="display: table;width:100%;table-layout:fixed;">
                    <td width="15%">{{row.id}}</td>
                    <td width="25%">{{row.userId}}</td>
                    <td width="25%">{{row.userName}}</td>
                    <td width="25%">{{row.password}}</td>
                    <td width="10%">
                        <button type="button" title="修改" class="editBtn" ng-click="updateUser($index)" type="button"/>
                        <button type="button" title="删除" class="deleteBtn" ng-click="showDeleteUser($index)" type="button"></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!--用户模态框-->
    <div class="modal fade" id="addAndUpdateUserModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="closeTable" data-dismiss="modal" aria-label="Close"></button>
                    <h4 class="modal-title">用户信息</h4>
                </div>
                <div class="modal-body" style="height: 200px;">
                    <form class="form-horizontal" name="userForm">
                        <table width="90%">
                            <tr>
                                <td width="30%" style="text-align: right;padding-right: 40px;font-weight: 700;" class="start">用户号：</td>
                                <td width="70%">
                                    <input type="text" id="userId" name="userId" placeholder="请输入用户号" class="form-control" ng-model="formData.userId" required>
                                </td>
                            </tr>
                            <tr>
                                <td width="30%" style="text-align: right;padding-right: 40px;font-weight: 700;" class="start">用户名：</td>
                                <td width="70%">
                                    <input type="text" id="userName" name="userName" placeholder="请输入用户名" class="form-control" ng-model="formData.userName" required>
                                </td>
                            </tr>
                            <tr>
                                <td width="30%" style="text-align: right;padding-right: 40px;font-weight: 700;" class="start">密码：</td>
                                <td width="70%">
                                    <input type="text" id="password" name="password" placeholder="请输入密码" class="form-control" ng-model="formData.password" required>
                                </td>
                            </tr>
                        </table>
                    </form>

                    <div class="noneDiv"></div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" ng-disabled="userForm.id.$invalid ||userForm.userName.$invalid||userForm.password.$invalid||userForm.age.$invalid"
                                ng-click="submitUser()">保存提交</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
