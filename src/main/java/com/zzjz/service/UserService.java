package com.zzjz.service;

import com.github.pagehelper.Page;
import com.zzjz.bean.User;
import com.zzjz.bean.UserRequest;

public interface UserService {

    Page<User> getUserPageList(UserRequest request);

    User getUserById(int userId);

    boolean insertAuto(User user);

    boolean updateAuto(User user);

    boolean deleteById(int userId);

    User login(String userId, String password);

    User getUserByUserId(String userId);
}
