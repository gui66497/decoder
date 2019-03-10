package com.zzjz.service.imp;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.zzjz.bean.PagingEntity;
import com.zzjz.bean.User;
import com.zzjz.bean.UserRequest;
import com.zzjz.mapper.UserMapper;
import com.zzjz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserMapper userMapper;

    @Override
    public Page<User> getUserPageList(UserRequest request) {
        PagingEntity pagingEntity = request.getPaging();
        PageHelper.startPage(pagingEntity.getPageNo(), pagingEntity.getPageSize());
        return (Page<User>) userMapper.getUserPageList(request);
    }

    @Override
    public User getUserById(int userId) {
        return userMapper.selectByPrimaryKey(userId);
    }

    @Override
    public boolean insertAuto(User user) {
        return userMapper.insertSelective(user)>0;
    }

    @Override
    public boolean updateAuto(User user) {
        return userMapper.updateByPrimaryKeySelective(user)>0;
    }

    @Override
    public boolean deleteById(int userId) {
        return userMapper.deleteByPrimaryKey(userId)>0;
    }

    @Override
    public User login(String userId, String password) {
        return userMapper.login(userId,password);
    }

    @Override
    public User getUserByUserId(String userId) {
        return userMapper.getUserByUserId(userId);
    }
}