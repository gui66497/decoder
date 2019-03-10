package com.zzjz.controller;

import com.zzjz.bean.BaseResponse;
import com.zzjz.bean.Camera;
import com.zzjz.bean.ResultCode;
import com.zzjz.service.CameraService;
import com.zzjz.utils.JsonRespWrapper;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeoutException;

@Controller
@RequestMapping("/camera")
@SessionAttributes("userId")
public class CameraController {

    @Autowired
    CameraService cameraService;

    @RequestMapping(value = "/getCameraList", method = RequestMethod.POST)
    @ResponseBody
    public List<Camera> getCameraList(@RequestBody Camera camera, ModelMap model){
        List<Camera> list = cameraService.getCameraList(camera);
        return list;
    }

    @RequestMapping(value = "/getCameraInfo", method = RequestMethod.GET)
    @ResponseBody
    public Camera getCameraInfo(Integer id, ModelMap model){
        Camera camera = cameraService.getCameraById(id);
        return camera;
    }

    @RequestMapping(value = "/submit", method = RequestMethod.POST)
    @ResponseBody
    public Object insert(@RequestBody Camera camera, ModelMap model){
        boolean rs;
        if(camera.getId()!=null){
            rs = cameraService.updateAuto(camera);
        } else {
            rs = cameraService.insertAuto(camera);
        }
        if(rs){
            return JsonRespWrapper.successData("success","保存成功");
        } else {
            return JsonRespWrapper.successData("error","保存失败");
        }
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    @ResponseBody
    public Object delete(Integer id, ModelMap model){
        boolean rs = cameraService.deleteById(id);
        if(rs){
            return JsonRespWrapper.successData("success","删除成功");
        } else {
            return JsonRespWrapper.successData("error","删除失败");
        }
    }

    /**
     * 测试摄像头是否连通.
     * @param camera 摄像头
     * @return 结果
     */
    @RequestMapping(value = "/link", method = RequestMethod.POST)
    @ResponseBody
    public BaseResponse<String> link(@RequestBody Camera camera) {
        BaseResponse<String> response = new BaseResponse<>();
        if (StringUtils.isBlank(camera.getUserName()) || StringUtils.isBlank(camera.getIp()) || StringUtils.isBlank(camera.getPassword())) {
            response.setMessage("参数错误");
            response.setResultCode(ResultCode.RESULT_BAD_REQUEST);
            return response;
        }
        Camera cameraTemp = cameraService.getCameraByIp(camera.getIp());
        String rtspStr= "rtsp://" + camera.getUserName() + ":" + camera.getPassword() + "@" + camera.getIp() + ":554";
        boolean rs;
        try {
            rs = cameraService.canConnnect(rtspStr);
        } catch (IOException | TimeoutException | InterruptedException e) {
            if (cameraTemp != null) {
                cameraTemp.setStatus("0");
                cameraService.updateAuto(cameraTemp);
            }
            e.printStackTrace();
            response.setMessage("连接失败:" + e.getMessage());
            response.setResultCode(ResultCode.RESULT_ERROR);
            return response;
        }
        if (rs) {
            if (cameraTemp != null) {
                cameraTemp.setStatus("1");
                cameraService.updateAuto(cameraTemp);
            }
            response.setMessage("摄像头连接成功!");
            response.setResultCode(ResultCode.RESULT_SUCCESS);
        } else {
            if (cameraTemp != null) {
                cameraTemp.setStatus("0");
                cameraService.updateAuto(cameraTemp);
            }
            response.setMessage("摄像头连接失败!");
            response.setResultCode(ResultCode.RESULT_ERROR);
        }
        return response;
    }
}