package com.zzjz.controller;

import javax.servlet.http.HttpServletRequest;

import com.github.pagehelper.Page;
import com.zzjz.bean.User;
import com.zzjz.bean.UserRequest;
import com.zzjz.service.UserService;
import com.zzjz.utils.JsonRespWrapper;
import com.zzjz.utils.PageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/user")
@SessionAttributes("userId")
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/getUserList", method = RequestMethod.POST)
    @ResponseBody
    public Map<String,Object> getUserInfo(@RequestBody UserRequest request, ModelMap model){
        Page<User> list = userService.getUserPageList(request);
        List<Object> otherData = PageUtil.dealPaging(request.getPaging(), (int) list.getTotal());
        Map<String,Object> map = new HashMap();
        map.put("data",list);
        map.put("otherData",otherData);
        return map;
    }

    @RequestMapping(value = "/getUserInfo", method = RequestMethod.GET)
    @ResponseBody
    public User getUserInfo(Integer id, ModelMap model){
        User user = userService.getUserById(id);
        return user;
    }

    @RequestMapping(value = "/submit", method = RequestMethod.POST)
    @ResponseBody
    public Object insert(@RequestBody User user, ModelMap model){
        boolean rs;
        if(userService.getUserById(user.getId())!=null){
            rs = userService.updateAuto(user);
        } else {
            rs = userService.insertAuto(user);
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
        boolean rs = userService.deleteById(id);
        if(rs){
            return JsonRespWrapper.successData("success","删除成功");
        } else {
            return JsonRespWrapper.successData("error","删除失败");
        }
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public User login(String userId,String password, ModelMap model){
        User user = userService.login(userId,password);
        if(user!=null){
            model.addAttribute("userId",user.getUserId());
            model.addAttribute("userName",user.getUserName());
        }
        return user;
    }

    @RequestMapping(value = "/hasLogin", method = RequestMethod.POST)
    @ResponseBody
    public User hasLogin(@ModelAttribute("userId") String userId, ModelMap model){
        User user = userService.getUserByUserId(userId);
        return user;
    }
}