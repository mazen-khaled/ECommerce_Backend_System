package com.example.Ecommerce.Services;

import com.example.Ecommerce.DataStructures.Role;
import com.example.Ecommerce.Enities.UserDB;
import com.example.Ecommerce.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServices {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Business logic methods
    public UserDB createUser(UserDB user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public List<UserDB> getAllUsers() {
        return userRepository.findAll();
    }

    public List<UserDB> getAllAdmins() {
        return userRepository.findByRole(Role.ROLE_ADMIN.name());
    }
}
