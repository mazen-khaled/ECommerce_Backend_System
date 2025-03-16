package com.example.Ecommerce.Controllers;

import com.example.Ecommerce.DataStructures.Role;
import com.example.Ecommerce.Enities.AuthenticationDB;
import com.example.Ecommerce.JWT.JWTUtils;
import com.example.Ecommerce.Services.AuthenticationServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Authentication")
public class AuthenticationController {
    @Autowired
    private final AuthenticationManager authenticationManager;

    @Autowired
    private final AuthenticationServices authenticationServices;

    private final JWTUtils jwtUtils;

    public AuthenticationController(AuthenticationManager authenticationManager, AuthenticationServices authenticationServices, JWTUtils jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.authenticationServices = authenticationServices;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/register-new-user")
    public AuthenticationDB createUser(@RequestBody AuthenticationDB user) {
        user.setRole(Role.USER);
        return authenticationServices.createUser(user);
    }

    @PostMapping("/register-new-admin")
    @PreAuthorize("hasRole('MANAGER')")
    public AuthenticationDB createAdmin(@RequestBody AuthenticationDB user) {
        user.setRole(Role.ADMIN);
        return authenticationServices.createUser(user);
    }

    @GetMapping("/get-all-users")
    @PreAuthorize("hasAnyRole('ADMIN', 'MANAGER')")
    public List<AuthenticationDB> getAllUsers() {
        return authenticationServices.getAllUsers();
    }

    @GetMapping("/admins")
    @PreAuthorize("hasRole('MANAGER')")
    public List<AuthenticationDB> getAllAdmins() {
        return authenticationServices.getAllAdmins();
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody AuthenticationDB user) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
        final AuthenticationDB userDetails = authenticationServices.loadUserByUsername(user.getUsername());
        final String token = jwtUtils.generateToken(userDetails);
        return ResponseEntity.ok(token);
    }
}
