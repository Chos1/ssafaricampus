package com.blockchain.cap.api.service;

import com.blockchain.cap.api.request.UserRegisterPostReq;
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

    public User getUserByPhone(String phone) {
        return userRepository.findByPhone(phone);
    }

    public boolean createUser(UserRegisterPostReq registerInfo) {
        if(userRepository.findByPhone(registerInfo.getPhone())!=null) {
            return false;
        }

        userRepository.save(User.builder()
                        .phone(registerInfo.getPhone())
                        .password(registerInfo.getPassword())
                        .wallet(registerInfo.getWallet())
                        .build());

        if(userRepository.findByPhone(registerInfo.getPhone())==null) {
            return false;
        }
        return true;
    }
}