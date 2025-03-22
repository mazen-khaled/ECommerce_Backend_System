package com.example.Ecommerce.Controllers;

import com.example.Ecommerce.DataStructures.Role;
import com.example.Ecommerce.Enities.UserDB;
import com.example.Ecommerce.JWT.JWTUtils;
import com.example.Ecommerce.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserServices userServices;

    @Autowired
    private JWTUtils jwtUtils;

    @PostMapping("/register-new-customer")
    public UserDB createUser(@RequestBody UserDB user) {
        user.setRole(Role.ROLE_CUSTOMER);
        return userServices.createUser(user);
    }

    @PostMapping("/register-new-admin")
    public UserDB createAdmin(@RequestBody UserDB user) {
        user.setRole(Role.ROLE_ADMIN);
        return userServices.createUser(user);
    }

    @GetMapping("/get-all-users")
    public List<UserDB> getAllUsers() {
        return userServices.getAllUsers();
    }

    @GetMapping("/admins")
    public List<UserDB> getAllAdmins() {
        return userServices.getAllAdmins();
    }

    @GetMapping("/get-user-by-id/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id, @RequestHeader("Authorization") String token) {
        Long currentUserId = jwtUtils.extractUserId(token.replace("Bearer ", ""));
        String currentUserRole = jwtUtils.extractUserRole(token.replace("Bearer ", ""));

        if (!currentUserId.equals(id) && !currentUserRole.equals("ROLE_MANAGER")) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You are not authorized to access this resource");
        }
        if (userServices.getUserById(id).isPresent()) {
            return ResponseEntity.ok(userServices.getUserById(id).get()); // Return 200 OK with the user data
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); // Return 404 Not Found
        }
    }

    @GetMapping("/get-user-by-phone-number/{number}")
    public ResponseEntity<?> getUserByPhoneNumber(@PathVariable String number, @RequestHeader("Authorization") String token) {
        String currentUserNumber = jwtUtils.extractUserPhoneNumber(token.replace("Bearer ", ""));
        String currentUserRole = jwtUtils.extractUserRole(token.replace("Bearer ", ""));

        if (!currentUserNumber.equals(number) && !currentUserRole.equals("ROLE_MANAGER")) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You are not authorized to access this resource");
        }

        if (userServices.getUserByPhoneNumber(number).isPresent()) {
            return ResponseEntity.ok(userServices.getUserByPhoneNumber(number).get()); // Return 200 OK with the user data
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); // Return 404 Not Found
        }
    }

    @GetMapping("/get-user-by-email/{email}")
    public ResponseEntity<?> getUserByEmail(@PathVariable String email, @RequestHeader("Authorization") String token) {
        String currentUserEmail = jwtUtils.extractUserEmail(token.replace("Bearer ", ""));
        String currentUserRole = jwtUtils.extractUserRole(token.replace("Bearer ", ""));

        if (!currentUserEmail.equals(email) && !currentUserRole.equals("ROLE_MANAGER")) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You are not authorized to access this resource");
        }
        if (userServices.getUserByEmail(email).isPresent()) {
            return ResponseEntity.ok(userServices.getUserByEmail(email).get()); // Return 200 OK with the user data
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); // Return 404 Not Found
        }
    }
}
