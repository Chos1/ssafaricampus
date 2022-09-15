package com.blockchain.cap.api.service;

import com.blockchain.cap.api.request.CompanyRegisterPostReq;
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

    public User getUserByLoginId(String phone) {
        return userRepository.findByLoginId(phone);
    }

    public boolean createUser(UserRegisterPostReq registerInfo) {
        if(userRepository.findByLoginId(registerInfo.getLoginId())!=null) {
            return false;
        }

        userRepository.save(User.builder()
                        .role(RoleType.USER)
                        .loginId(registerInfo.getLoginId())
                        .password(passwordEncoder.encode(registerInfo.getPassword()))
                        .phone(registerInfo.getPhone())
                        .name(registerInfo.getName())
                        .email(registerInfo.getEmail())
                        .build());

        return true;
    }

    public boolean createCompany(CompanyRegisterPostReq registerInfo) {
        if(userRepository.findByLoginId(registerInfo.getLoginId())!=null) {
            return false;
        }

        userRepository.save(User.builder()
                .role(RoleType.COMPANY)
                .loginId(registerInfo.getLoginId())
                .password(passwordEncoder.encode(registerInfo.getPassword()))
                .phone(registerInfo.getPhone())
                .name(registerInfo.getName())
                .companyNumber(registerInfo.getCompanyNumber())
                .build());

        return true;
    }
}
