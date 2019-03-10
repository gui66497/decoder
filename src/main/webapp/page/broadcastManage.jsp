<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<style>
    .modal-body{
        padding: 0;
    }
    .modal-dialog{
        width: 642px;
    }
</style>
<div id="rolling">
    <%--摄像头区域--%>
    <div class="cameraList">
        <div class="cameraTitle">
            <span>摄像头列表</span>
            <a href="javascript:void(0)" class="renovate" ng-click="renovate()">刷新</a>
        </div>
        <div class="cameraContent" ng-class="{'closeArea':closeModule}">
            <div class="cameraModule" ng-repeat="row in cameraNews">
                <div style="width: 100%;height: 100%;overflow: hidden;" ng-right-click="rightClick($index)">
                    <div class="{{row.status=='1'?'connect':'noConnect'}}" ng-click="changeState($index)" ng-class="{'waitSvg':row.wait}"></div>
                    <input type="text" class="allInput" title="{{row.cameraName}}" ng-disabled="prohibit"  ng-blur ="renameOver()" value="{{row.cameraName}}" id="rename{{row.id}}" ng-cloak/>
                </div>
            </div><!--
            <%--添加摄像头--%>
            --><div class="cameraModule" ng-click="addCameraBefore()">
                <div class="addCamera"></div>
                <p>添加摄像头</p>
            </div>
            <%--右击菜单--%>
            <div class="menu-zdy" id="menu" ng-show="rightDiv" ng-style="where">
                <div class="menu-style" ng-click="editCameraBefore()">
                    <a href="javascript:void(0);">修改</a>
                </div>
                <div class="menu-style" ng-click="remove()">
                    <a href="javascript:void(0);">删除</a>
                </div>
                <div class="menu-style" ng-click="refreshCameras()">
                    <a href="javascript:void(0);">刷新</a>
                </div>
                <%--<div class="menu-style" ng-click="rename()">
                    <a href="javascript:void(0);">重命名</a>
                </div>--%>
            </div>

        </div>
        <div class="spread" ng-click="openOrClose()" ng-cloak>{{openStop}}<span ng-class="{'open':openTrue,'allClose':closeTrue}"></span></div>

    </div>
        <%--解码器区域--%>
    <div class="decompilerList">
        <div class="cameraTitle">
            <span>解码器列表</span>
            <a href="javascript:void(0)" class="addWord" ng-click="addDecoder()">添加</a>
        </div>
        <div class="decompilerContent" ng-class="{'decoderArea':decoderModule}">
            <div class="decompilerModule" ng-repeat="x in decoderNews">
                <div class="decoderNames" ng-cloak style="position: relative;">
                    <span class="{{x.style==1?'connected':'notConnected'}}"></span>
                    {{x.decoderName}}
                    <a href="javascript:void(0);" style="text-decoration: none;float: right;" ng-click="editDecoder($index)">···</a>
                    <div class="outDecoder" ng-show="x.editorMenu">
                        <em></em>
                        <div class="menu-style" ng-click="editorDecoder()">
                            <a href="javascript:void(0);">修改</a>
                        </div>
                        <div class="menu-style" ng-click="removeDecoder()">
                            <a href="javascript:void(0);">删除</a>
                        </div>
                        <div class="menu-style" ng-click="refreshDecoders()">
                            <a href="javascript:void(0);">重连</a>
                        </div>
                    </div>
                </div>
                <div class="monitorContent" ng-click="rtmpReview(x)">
                    <img ng-if="x.videoWatch" src="{{x.cover}}" class="stopBtn">
                    <div class="load" ng-if="x.loading">
                        <img style="width: 43px;height: 43px;" src="images/loading.svg">
                        <div>连接中...</div>
                    </div>
                    <%--<video autoplay="true" style="width: 100%;height: 100%;" ng-if="x.videoWatch" >--%>
                        <%--<source src="images/video.mp4" type="video/mp4">--%>
                    <%--</video>--%>
                </div>
                <div class="wordStyle">
                    <span class="{{x.style==0?'noStyle':x.style==1?'success':'fail'}}"><span style="display: inline-block;font-weight: 700;">·</span>{{x.style==0?'未连接':x.style==1?'已连接':'连接失败'}}</span>
                    <%--<span style="color: #333;margin-left: 16px;">{{x.headName}}</span>--%>
                    <a href="javascript:void(0);" class="refreshCamera" ng-if="x.hide" ng-click="connectBtn($index)">刷新</a>
                    <div class="{{x.style==0?'notState':'haveState'}}">
                        <span style="color: #718dff;"><span style="display: inline-block;font-weight: 700;">·</span>状态说明</span>
                        <span style="color: #666;margin-left: 8px;">{{x.errorMsg}}</span>
                    </div>
                </div>
                <select ng-model="x.head" class="{{x.style==0?'changeCamera':'shortChange'}}" ie-select-fix="cameraNews" ng-clock>
                    <option value="">请选择要连接的摄像头</option>
                    <option ng-repeat="name in cameraNews" value="{{name.ip}}">{{name.cameraName}}</option>
                </select>
                <button class="{{x.style==0?'aboutStyle':'shortStyle'}}" ng-click="connectBtn($index)">{{x.style==0?'连接':'修改摄像头'}}</button>
            </div>
        </div>
        <div class="decompilerSpread" ng-click="decompilerOpen()" ng-cloak>{{decompilerStyle}}<span ng-class="{'open':openStyle,'allClose':closeStyle}"></span></div>
    </div>

        <%--未识别设备区域--%>
        <div class="unrecognized" ng-show="unrecognizedArea">
            <div class="cameraTitle">
                <span>未识别设备列表 (拖动添加)</span>
            </div>

            <div class="unrecognizedContent" ng-class="{'unrecognizedArea':unModule}">
                <div class="unrecognizedModule" ng-repeat="row in unknownDevices" ng-drag="true" ng-mouseup="upAndDown($index)">
                    <div class="pressOnContent" ng-mouseover="follow($index)" ng-mouseleave="shiftOut($index)">
                        <div class="unrecognizedConnect"></div>
                        <a href="javascript:void(0);" style="text-decoration: none;color: #333;" ng-clock>{{row.ipv4Address}}</a>
                    </div>
                </div>
                <div class="bubble">
                    <em></em>
                    <div><span>型号：</span>{{reveal.deviceDescription}}</div>
                    <div><span>MAC：</span>{{reveal.mac}}</div>
                    <div><span>地址：</span>{{reveal.ipv4Address}}</div>
                    <div><span>命令端口：</span>{{reveal.commandPort}}</div>
                </div>
            </div>

            <div class="unrecognizedSpread" ng-click="unOpenOrClose()" ng-cloak>{{unStop}}<span ng-class="{'open':unOpenTrue,'allClose':unCloseTrue}"></span></div>
        </div>

        <div class="modal fade" id="videoWatchModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">监控界面</h4>
                    </div>
                    <div id="videoBody" class="modal-body" style="max-height: 450px;overflow-y: auto">
                        <%--<video id="my-video1" class="video-js vjs-big-play-centered" controls preload="auto" width="560" height="360"
                               poster="https://img.alicdn.com/imgextra/i2/754328530/TB2FpxhkXXXXXa5XXXXXXXXXXXX_!!754328530.jpg" data-setup="{}">
                            <source type="rtmp/flv">
                            <p class="vjs-no-js">
                                To view this video please enable JavaScript, and consider upgrading to a web browser that
                                <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                            </p>
                        </video>--%>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" ng-click="stopWatch()">关闭</button>
                    </div>
                </div>
            </div>
        </div>

        <!--摄像头模态框-->
        <div class="modal fade" id="addAndUpdateCameraModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="closeTable" data-dismiss="modal" aria-label="Close"></button>
                        <h4 class="modal-title">{{cameraAction}}摄像头</h4>
                    </div>
                    <div class="modal-body">
                        <form class="form-horizontal" name="cameraForm">
                            <table width="90%" style="font-size: 14px">
                                <tr>
                                    <td width="30%" style="text-align: right;padding-right: 30px;font-weight: 700" class="start">名称：</td>
                                    <td width="70%">
                                        <input type="text" id="cameraName" name="cameraName" placeholder="请输入摄像头名称" class="form-control" ng-model="formData.cameraName" required>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="30%" style="text-align: right;padding-right: 30px;font-weight: 700" class="start">IP：</td>
                                    <td width="70%">
                                        <input type="text" id="ip" name="ip" placeholder="请输入ip" class="form-control" ng-model="formData.ip" required>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="30%" style="text-align: right;padding-right: 30px;font-weight: 700" class="start">型号：</td>
                                    <td width="70%">
                                        <input type="text" id="model" name="model" placeholder="请输入型号" class="form-control" ng-model="formData.model">
                                    </td>
                                </tr>
                                <tr>
                                    <td width="30%" style="text-align: right;padding-right: 30px;font-weight: 700" class="start">Mac地址：</td>
                                    <td width="70%">
                                        <input type="text" id="mac" name="mac" placeholder="请输入Mac地址" class="form-control" ng-model="formData.mac">
                                    </td>
                                </tr>
                                <tr>
                                    <td width="30%" style="text-align: right;padding-right: 30px;font-weight: 700" class="start">用户名：</td>
                                    <td width="70%">
                                        <input type="text" id="userName" name="userName" placeholder="请输入连接用户名" class="form-control" ng-model="formData.userName" required>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="30%" style="text-align: right;padding-right: 30px;font-weight: 700" class="start">密码：</td>
                                    <td width="70%" style="position: relative;" class="passwordEye">
                                        <input type="password" id="password" name="password" placeholder="请输入连接密码" class="form-control" ng-show="!graphic" ng-model="formData.password" required style="padding: 5px 50px 5px 5px;">
                                        <input type="text" name="password" placeholder="请输入连接密码" class="form-control" ng-show="graphic" ng-model="formData.password" required style="padding: 5px 50px 5px 5px;">
                                        <button type="button" class="btn btn-default" aria-label="Left Align" ng-click="eyeClose()" style="outline: none;background: none;">
                                            <span class="glyphicon glyphicon-eye-open" ng-show="!graphic"></span>
                                            <span class="glyphicon glyphicon-eye-close" ng-show="graphic"></span>
                                        </button>
                                    </td>
                                </tr>
                            </table>
                        </form>

                        <div class="noneDiv"></div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                            <button type="button" class="btn btn-primary" ng-disabled="cameraForm.ip.$invalid||cameraForm.userName.$invalid||cameraForm.password.$invalid"
                                    ng-click="testCameraLink()">测试连接</button>
                            <button type="button" class="btn btn-primary" ng-disabled="cameraForm.cameraName.$invalid||cameraForm.ip.$invalid||cameraForm.userName.$invalid||cameraForm.password.$invalid"
                                    ng-click="submitCamera()">提交</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!--解码器模态框-->
        <div class="modal fade" id="DecoderModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content" style="width: 500px;">
                    <div class="modal-header">
                        <button type="button" class="closeTable" data-dismiss="modal" aria-label="Close"></button>
                        <h4 class="modal-title">{{decoderAction=='add'?'新增':'修改'}}解码器</h4>
                    </div>
                    <div class="modal-body" style="max-height: 450px;overflow-y: auto">
                        <form class="form-horizontal" name="decoderForm">
                            <div class="editorBody"><span>名称：</span><input type="text" name="decoderName" ng-model="formData.decoderName" required/></div>
                            <div class="editorBody"><span>IP：</span><input type="text" name="ip" ng-model="formData.ip" required/></div>
                            <div class="editorBody"><span>型号：</span><input type="text" name="model" ng-model="formData.model" /></div>
                            <div class="editorBody"><span>Mac地址：</span><input type="text" name="macAddress" ng-model="formData.macAddress" /></div>
                            <div class="editorBody"><span>用户名：</span><input type="text" name="userName" ng-model="formData.userName" required/></div>
                            <div class="editorBody"><span>密码：</span><input type="password" ng-show="!openShow" name="password" ng-model="formData.password" required/><input type="text" ng-show="openShow" name="text" ng-model="formData.password" required/>
                                <button type="button" class="btn btn-default" aria-label="Left Align" ng-click="eyeOpen()" style="outline: none;background: none;">
                                    <span class="glyphicon glyphicon-eye-open" ng-show="!openShow"></span>
                                    <span class="glyphicon glyphicon-eye-close" ng-show="openShow"></span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" ng-click="testDecoderLink()" ng-disabled="decoderForm.ip.$invalid||decoderForm.userName.$invalid||decoderForm.password.$invalid">测试连接</button>
                        <button type="button" class="btn btn-primary" ng-click="submitDecoder()" ng-disabled="decoderForm.decoderName.$invalid||decoderForm.ip.$invalid||decoderForm.userName.$invalid||decoderForm.password.$invalid">确认</button>
                    </div>
                </div>
            </div>
        </div>
</div>
























