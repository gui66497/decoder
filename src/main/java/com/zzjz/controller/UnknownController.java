package com.zzjz.controller;

import com.zzjz.bean.BaseResponse;
import com.zzjz.bean.Camera;
import com.zzjz.bean.Decoder;
import com.zzjz.bean.ProbeEntity;
import com.zzjz.bean.ResultCode;
import com.zzjz.service.CameraService;
import com.zzjz.service.DecoderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author 房桂堂
 * @description 未知设备Controller
 * @date 2017/11/22 16:11
 */
@Controller
@RequestMapping("/unknown")
public class UnknownController {

    private static final Logger LOGGER = LoggerFactory.getLogger(UnknownController.class);

    @Autowired
    DecoderService decoderService;

    @Autowired
    CameraService cameraService;

    /**
     * 获取所有未知设备
     * @return 设备信息
     */
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    @ResponseBody
    public BaseResponse<ProbeEntity> getAllUnknownDevices() {
        BaseResponse<ProbeEntity> response = new BaseResponse<>();
        List<ProbeEntity> probeEntityList = new ArrayList<>();
        //todo 1目前的设备发现只有海康一种 后续可能会有多种 2要与分配过的设备做对比 根据具备唯一性mac地址来
        List<ProbeEntity> allProbeEntities = null;
        try {
            allProbeEntities = decoderService.scanHKDevices();
        } catch (IOException | InterruptedException e) {
            LOGGER.error("搜索海康设备失败:" + e.getMessage());
            e.printStackTrace();
            response.setMessage("搜索海康设备失败");
            response.setResultCode(ResultCode.RESULT_ERROR);
            return response;
        }

        //过滤
        for (ProbeEntity probeEntity : allProbeEntities) {
            String mac = probeEntity.getMac();
            String ip = probeEntity.getIpv4Address();
            Camera camera = cameraService.getCameraByMac(mac);
            Decoder decoder = decoderService.getDecoderByMac(mac);
            if (camera == null && decoder == null) {
                probeEntityList.add(probeEntity);
            } else if (camera != null && !ip.equals(camera.getIp())) {
                //设备ip变掉了 导致未知设备没有出来  所以过滤的时候还要考虑ip的因素
                probeEntityList.add(probeEntity);
            } else if (decoder != null && !ip.equals(decoder.getIp())) {
                probeEntityList.add(probeEntity);
            }
        }
        response.setData(probeEntityList);
        response.setMessage("获取未知设备成功");
        response.setResultCode(ResultCode.RESULT_SUCCESS);
        return response;
    }
}
