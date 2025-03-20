package com.example.Ecommerce.Controllers;

import com.example.Ecommerce.DataStructures.Role;
import com.example.Ecommerce.Enities.UserDB;
import com.example.Ecommerce.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserServices userServices;

    @PostMapping("/register-new-user")
    public UserDB createUser(@RequestBody UserDB user) {
        user.setRole(Role.ROLE_USER);
        return userServices.createUser(user);
    }

    @PostMapping("/register-new-admin")
    @PreAuthorize("hasRole('MANAGER')")
    public UserDB createAdmin(@RequestBody UserDB user) {
        user.setRole(Role.ROLE_ADMIN);
        return userServices.createUser(user);
    }

    @GetMapping("/get-all-users")
    @PreAuthorize("hasAnyRole('ADMIN', 'MANAGER')")
    public List<UserDB> getAllUsers() {
        return userServices.getAllUsers();
    }

    @GetMapping("/admins")
    @PreAuthorize("hasRole('MANAGER')")
    public List<UserDB> getAllAdmins() {
        return userServices.getAllAdmins();
    }
}
