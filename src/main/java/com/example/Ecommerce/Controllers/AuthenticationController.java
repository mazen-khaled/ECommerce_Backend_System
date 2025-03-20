package com.example.Ecommerce.Controllers;

import com.example.Ecommerce.Enities.UserDB;
import com.example.Ecommerce.JWT.JWTUtils;
import com.example.Ecommerce.Services.AuthenticationServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/Authentication")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private AuthenticationServices authenticationServices;

    @Autowired
    private JWTUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserDB user) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
        final UserDB userDetails = authenticationServices.loadUserByUsername(user.getUsername());
        final String token = jwtUtils.generateToken(userDetails);
        return ResponseEntity.ok(token);
    }
}
