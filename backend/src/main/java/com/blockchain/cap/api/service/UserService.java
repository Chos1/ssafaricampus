package com.blockchain.cap.api.service;

import com.blockchain.cap.api.request.UserRegisterPostReq;
import com.blockchain.cap.domain.Auth.RefreshRepository;
import com.blockchain.cap.domain.User.RoleType;
import com.blockchain.cap.domain.User.User;
import com.blockchain.cap.domain.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public User getUserByUserId(String phone) {
        return userRepository.findByUserId(phone);
    }

    public boolean createUser(UserRegisterPostReq registerInfo) {
        if(userRepository.findByUserId(registerInfo.getUserId())!=null) {
            return false;
        }

        userRepository.save(User.builder()
                        .role(RoleType.USER)
                        .userId(registerInfo.getUserId())
                        .password(passwordEncoder.encode(registerInfo.getPassword()))
                        .phone(registerInfo.getPhone())
                        .name(registerInfo.getName())
                        .email(registerInfo.getEmail())
                        .build());

        return true;
    }
}