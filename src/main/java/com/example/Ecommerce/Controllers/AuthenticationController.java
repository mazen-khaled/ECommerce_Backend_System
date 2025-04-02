package com.example.Ecommerce.Controllers;

import com.example.Ecommerce.DTOs.Request.LoginRequest;
import com.example.Ecommerce.Models.UserDB;
import com.example.Ecommerce.Security.JWT.JWTUtils;
import com.example.Ecommerce.Services.AuthenticationServices;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
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
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest, HttpServletResponse response) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        final UserDB userDB = authenticationServices.loadUserByUsername(loginRequest.getEmail());
        
        String token = jwtUtils.generateToken(userDB);

        // Set cookies
        response.addCookie(createCookie("token", token, true, 1)); // HttpOnly
        response.addCookie(createCookie("role", userDB.getRole().name(), false, 1)); // Accessible
    
        return ResponseEntity.ok("Login successful");
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logoutUser(HttpServletResponse response) {
        // Clear cookies
        response.addCookie(createCookie("token", null, true, 0));
        response.addCookie(createCookie("role", null, false, 0));
        
        // Clear security context
        SecurityContextHolder.clearContext();
    
        return ResponseEntity.ok("Logout successful");
    }

    private Cookie createCookie(String name, String value, boolean httpOnly, int maxAgeDays) {
        Cookie cookie = new Cookie(name, value);
        cookie.setSecure(true);
        cookie.setPath("/");
        cookie.setHttpOnly(httpOnly);
        cookie.setMaxAge((int) TimeUnit.DAYS.toSeconds(maxAgeDays));
        // Critical for cross-origin cookies
        cookie.setAttribute("SameSite", "None"); 
        return cookie;
    }
}