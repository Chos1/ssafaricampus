package com.blockchain.cap.api.service;

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

}
