package com.zzjz.controller;

import com.zzjz.bean.BaseResponse;
import com.zzjz.bean.Camera;
import com.zzjz.bean.Decoder;
import com.zzjz.bean.DecoderConfBean;
import com.zzjz.bean.ResultCode;
import com.zzjz.service.CameraService;
import com.zzjz.service.DecoderService;
import com.zzjz.utils.HttpUtils;
import com.zzjz.utils.JsonRespWrapper;
import org.apache.commons.lang.StringUtils;
import org.dom4j.DocumentException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.security.sasl.AuthenticationException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * 解码器controller.
 *
 * @author :  xuedong.cao
 * @version :1.0
 */
@Controller
@RequestMapping("/decoderManager")
public class DecoderManagerController {

    private static final Logger LOGGER = LoggerFactory.getLogger(DecoderManagerController.class);

    @Autowired
    DecoderService decoderService;

    @Autowired
    CameraService cameraService;

    /**
     * @return
     */
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index() {
        return "/decoder/videoHome";
    }

    @RequestMapping(value = "/getDecoderList", method = RequestMethod.POST)
    @ResponseBody
    public BaseResponse<Decoder> getDecoderInfo(@RequestBody Decoder decoder, ModelMap model){
        BaseResponse<Decoder> response = new BaseResponse<>();
        List<Decoder> list = decoderService.getDecoderList(decoder);
        List<Decoder> resDecoderList = new ArrayList<>();
        for (Decoder decoderTemp : list) {
            //需要先判断能否连接
            boolean connect = false;
            String errorMsg = "";
            try {
                connect = decoderService.canHkConnect(decoderTemp.getIp(), decoderTemp.getUserName(), decoderTemp.getPassword());
            } catch (DocumentException | AuthenticationException e) {
                connect = false;
                e.printStackTrace();
                errorMsg = e.getMessage();
            } catch (IOException e) {
                connect = false;
                e.printStackTrace();
                errorMsg = e.getMessage();
            }
            if (connect) {
                decoderTemp = decoderService.getHkDecoderInfoByIp(decoderTemp.getIp());
                decoderTemp.setStatus("1");
                //需要判断摄像头是否存在
                String cameraIp = decoderTemp.getDefaultChannel().getCameraIp();
                Camera camera = cameraService.getCameraByIp(cameraIp);
                if (camera == null) {
                    decoderTemp.getDefaultChannel().setStatus("fail");
                    decoderTemp.setErrorMsg("解码失败,没有找到ip为 " + cameraIp + " 的摄像头");
                } else {
                    if ("0".equals(camera.getStatus())) {
                        //摄像头没有正确配置
                        decoderTemp.getDefaultChannel().setStatus("fail");
                        decoderTemp.setErrorMsg("解码失败,请先将ip为 " + cameraIp + " 的摄像头配置正确");
                    } else if ("1".equals(camera.getStatus())) {
                        //如果该解码器是解码中的状态 就获取该解码器的最新截图
                        if ("decoding".equals(decoderTemp.getDefaultChannel().getStatus())) {
                            try {
                                decoderService.refreshSnap(decoderTemp.getIp(), decoderTemp.getDefaultChannel().getCameraIp());
                            } catch (IOException e) {
                                e.printStackTrace();
                            }
                        }
                    }

                }
            } else {
                LOGGER.error("解码器连接失败!");
                decoderTemp.setStatus("0");
                decoderTemp.setErrorMsg("解码器连接失败 " + errorMsg);
            }
            resDecoderList.add(decoderTemp);
        }
        response.setMessage("解码器信息获取成功!");
        response.setResultCode(ResultCode.RESULT_SUCCESS);
        response.setData(resDecoderList);
        return response;
    }

    @RequestMapping(value = "/getDecoderInfo", method = RequestMethod.GET)
    @ResponseBody
    public Decoder getUserInfo(Integer id, ModelMap model){
        Decoder decoder = decoderService.getDecoderInfoById(id);
        return decoder;
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    @ResponseBody
    public Object add(@RequestBody Decoder decoder, ModelMap model){
        boolean rs = decoderService.addDecoder(decoder);
        if(rs){
            return JsonRespWrapper.successData("success","添加成功");
        } else {
            return JsonRespWrapper.successData("error","添加失败");
        }
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    @ResponseBody
    public Object update(@RequestBody Decoder decoder, ModelMap model){
        boolean rs = decoderService.updateDecoder(decoder);
        if(rs){
            return JsonRespWrapper.successData("success","修改成功");
        } else {
            return JsonRespWrapper.successData("error","修改失败");
        }
    }

    @RequestMapping(value = "/delete", method = RequestMethod.DELETE)
    @ResponseBody
    public Object delete(Integer id, ModelMap model){
        boolean rs = decoderService.deleteDecoder(id);
        if(rs){
            return JsonRespWrapper.successData("success","删除成功");
        } else {
            return JsonRespWrapper.successData("error","删除失败");
        }
    }

    /**
     * 海康摄像头设置解码参数.
     *
     * @param cameraIp 目标摄像头ip
     * @param decoderIp 解码器ip
     * @return 结果
     */
    @RequestMapping(value = "/startDecoderConfig", method = RequestMethod.POST)
    @ResponseBody
    public BaseResponse<String> setDecoderConf(String cameraIp, String decoderIp, ModelMap model) {
        BaseResponse<String> response = new BaseResponse<>();
        Decoder decoder = decoderService.getDecoderInfoByIp(decoderIp);
        Camera camera = cameraService.getCameraByIp(cameraIp);
        if (decoder == null || camera == null) {
            response.setMessage("启动解码失败,解码器或摄像头不存在!");
            response.setResultCode(ResultCode.RESULT_ERROR);
            return response;
        }
        //todo 默认通道1
        String url = "http://" + decoderIp + "/PSIA/Custom/SelfExt/Decode/decodeChannels/1/dynamicDecode/start";
        String configXml = "<?xml version='1.0' encoding='utf-8'?><DynamicDecodeCfg><DecodeCfgType>VIA_IP</DecodeCfgType><EncodeChanCfg><EncodeIPAddress>" +
                cameraIp + "</EncodeIPAddress><EncodePort>8000</EncodePort><EncodeChanMode>normal</EncodeChanMode><EncodeChanID>1</EncodeChanID>" +
                "<EncodeTransmitProtocol>tcp</EncodeTransmitProtocol><EncodeChanType>main</EncodeChanType><Username>" + camera.getUserName() +
                "</Username><Password>" + camera.getPassword() + "</Password><FactoryDefine>0</FactoryDefine></EncodeChanCfg></DynamicDecodeCfg>";
        String result = null;
        try {
            result = HttpUtils.put(url, configXml, "Basic " + HttpUtils.getAuthorization("admin", "admin12345"));
        } catch (IOException e) {
            e.printStackTrace();
            response.setMessage("设置解码参数失败:" + e.getMessage());
            response.setResultCode(ResultCode.RESULT_ERROR);
            return response;
        }
        if (result != null) {
            response.setMessage("设置解码参数成功");
            response.setResultCode(ResultCode.RESULT_SUCCESS);
        } else {
            response.setMessage("设置解码参数失败");
            response.setResultCode(ResultCode.RESULT_ERROR);
        }
        return response;
    }

    /**
     * 获取通道连接状态(demo.js中用的).
     *
     * @param url
     * @return
     */
    @RequestMapping(value = "/getDecoderStatus", method = RequestMethod.GET)
    @ResponseBody
    public Object getDecoderStatus(String url) {

        String defult = "<?xml version=\"1.0\" encoding=\"UTF-8\"?><StreamInfo><GetStreamMode>active</GetStreamMode><PassiveModeInfo><TransmitProtocol>tcp</TransmitProtocol><Port>0</Port></PassiveModeInfo><ActiveModeInfo><DecodeMode>dynamic</DecodeMode><DynamicDecodeCfg><DecodeCfgType>VIA_IP</DecodeCfgType><MediaCenterCfg><Enable>true</Enable><MediaIPAddress>192.168.1.121</MediaIPAddress><MediaPort>8080</MediaPort><MediaTransmitProtocol>tcp</MediaTransmitProtocol></MediaCenterCfg><EncodeChanCfg><EncodeIPAddress>192.168.1.111</EncodeIPAddress><EncodePort>8000</EncodePort><EncodeTransmitProtocol>tcp</EncodeTransmitProtocol><EncodeChanMode>normal</EncodeChanMode><EncodeChanID>1</EncodeChanID><EncodeChanType>main</EncodeChanType><FactoryDefine>0</FactoryDefine><EncodeStreamID></EncodeStreamID><Username>admin</Username><Password>admin12345</Password></EncodeChanCfg></DynamicDecodeCfg><FileName></FileName><TimeRange><BeginTime>0-0-0 0:0:0</BeginTime><EndTime>0-0-0 0:0:0</EndTime></TimeRange></ActiveModeInfo></StreamInfo>\n";
        String status = null;
        try {
            status = HttpUtils.get("http://192.168.1.65/PSIA/Custom/SelfExt/Decode/decodeChannels/1/linkStatus", "Basic " + HttpUtils.getAuthorization("admin", "admin12345"));
        } catch (IOException e) {
            e.printStackTrace();
        }
     /*   Document document = XmlUtils.stringToxml(status);
        Element element= document.getRootElement();
        ((Element)document.getRootElement().content().get(0)).getText();
       // document.getRootElement().attributes()
        String sourceIp = element.attribute("EncodeIPAddress").getValue();;*/

        if (status != null) {
            return JsonRespWrapper.successData("获取成功", status);

        } else {
            return JsonRespWrapper.successData("获取成功", defult);
        }

    }

    private static DecoderConfBean getVideoObject(String hostIp) {
        DecoderConfBean decoderConfBean = new DecoderConfBean();
        decoderConfBean.setDecodeMethod("1");
        decoderConfBean.setDecoderNumber("1");
        decoderConfBean.setDecoderType("");
        decoderConfBean.setHostIp(hostIp);
        decoderConfBean.setHostPort("8080");
        decoderConfBean.setPassagewayNumber("1");
        decoderConfBean.setPassagewayType("normal");
        decoderConfBean.setPassword("admin1234");
        decoderConfBean.setProtocol("TCP");
        decoderConfBean.setStreamingMediaIp("192.168.1.111");
        decoderConfBean.setStreamingMediaPort("80");
        decoderConfBean.setStreamingMediaProtocol("TCP");
        decoderConfBean.setStreamingStatus(true);
        decoderConfBean.setStreamingType("main");
        decoderConfBean.setUserName("admin");

        return decoderConfBean;
    }

    /**
     * 开始解码.
     * @param camera 摄像头信息
     * @return 结果
     */
    @RequestMapping(value = "/transcode", method = RequestMethod.POST)
    @ResponseBody
    public BaseResponse<String> transcode(@RequestBody Camera camera) {
        BaseResponse<String> response = new BaseResponse<>();
        camera = cameraService.getCameraByIp(camera.getIp());
        if (camera == null) {
            response.setResultCode(ResultCode.RESULT_ERROR);
            response.setMessage("没有查询到ip为 " + camera.getIp() + " 的信息");
            return response;
        }
        String id = decoderService.startTranscoding(camera);
        if (StringUtils.isNotBlank(id)) {
            response.setObj(id);
            response.setResultCode(ResultCode.RESULT_SUCCESS);
            response.setMessage("解码成功");
        } else {
            response.setResultCode(ResultCode.RESULT_ERROR);
            response.setMessage("解码失败");
        }
        return response;
    }

    /**
     * 停止解码.
     * @return 结果
     */
    @RequestMapping(value = "/stopTranscode", method = RequestMethod.GET)
    @ResponseBody
    public BaseResponse<String> stopTranscode() {
        BaseResponse<String> response = new BaseResponse<>();
        boolean res = decoderService.stopTranscoding();
        if (res) {
            response.setResultCode(ResultCode.RESULT_SUCCESS);
            response.setMessage("停止解码成功");
        } else {
            response.setResultCode(ResultCode.RESULT_ERROR);
            response.setMessage("停止解码失败");
        }
        return response;
    }

    /**
     * 获取所有解码器的最新截图.
     */
    @RequestMapping(value = "/refreshSnap", method = RequestMethod.POST)
    @ResponseBody
    public BaseResponse<String> refreshSnap() {
        BaseResponse<String> response = new BaseResponse<>();
        boolean res = decoderService.stopTranscoding();
        if (res) {
            response.setResultCode(ResultCode.RESULT_SUCCESS);
            response.setMessage("获取截图成功");
        } else {
            response.setResultCode(ResultCode.RESULT_ERROR);
            response.setMessage("获取截图失败");
        }
        return response;
    }

    /**
     * 测试海康解码器可否连接.
     * @param decoder 解码器
     * @return 结果
     */
    @RequestMapping(value = "/canHKLink", method = RequestMethod.POST)
    @ResponseBody
    public BaseResponse<String> canHKLink(@RequestBody Decoder decoder) {
        BaseResponse<String> response = new BaseResponse<>();
        if (StringUtils.isBlank(decoder.getIp()) || StringUtils.isBlank(decoder.getUserName()) || StringUtils.isBlank(decoder.getPassword())) {
            response.setMessage("参数错误");
            response.setResultCode(ResultCode.RESULT_BAD_REQUEST);
            return response;
        }
        boolean res;
        try {
            res = decoderService.canHkConnect(decoder.getIp(), decoder.getUserName(), decoder.getPassword());
        } catch (DocumentException | AuthenticationException e) {
            e.printStackTrace();
            response.setMessage("连接失败:" + e.getMessage());
            response.setResultCode(ResultCode.RESULT_ERROR);
            return response;
        } catch (IOException e) {
            response.setMessage("连接失败:" + e.getMessage());
            response.setResultCode(ResultCode.RESULT_ERROR);
            e.printStackTrace();
            return response;
        }
        if (res) {
            response.setMessage("解码器连接成功!");
            response.setResultCode(ResultCode.RESULT_SUCCESS);
        } else {
            response.setMessage("解码器连接失败!");
            response.setResultCode(ResultCode.RESULT_ERROR);
        }
        return response;
    }

}
