package com.example.Ecommerce.Controllers;

import com.example.Ecommerce.DTOs.Request.LoginRequest;
import com.example.Ecommerce.DTOs.Response.LoginResponse;
import com.example.Ecommerce.Models.UserDB;
import com.example.Ecommerce.Security.JWT.JWTUtils;
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
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        final UserDB userDB = authenticationServices.loadUserByUsername(loginRequest.getUsername());
        
        String token = jwtUtils.generateToken(userDB);

        final LoginResponse loginResponse = LoginResponse.builder()
                            .token(token)
                            .id(userDB.getId())
                            .role(userDB.getRole().name())
                            .build();

        return ResponseEntity.ok(loginResponse);
    }
}
