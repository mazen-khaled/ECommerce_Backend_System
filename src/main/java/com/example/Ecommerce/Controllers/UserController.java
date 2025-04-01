package com.example.Ecommerce.Controllers;

import com.example.Ecommerce.DataStructures.Role;
import com.example.Ecommerce.Models.UserDB;
import com.example.Ecommerce.Security.JWT.JWTUtils;
import com.example.Ecommerce.Services.UserServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserServices userServices;

    @Autowired
    private JWTUtils jwtUtils;

    @PostMapping("/register-new-customer")
    public ResponseEntity<UserDB> createCustomer(@RequestBody UserDB customer) {
        customer.setRole(Role.ROLE_CUSTOMER);
        return ResponseEntity.ok(userServices.createUser(customer));
    }

    @PostMapping("/register-new-admin")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<UserDB> createAdmin(@RequestBody UserDB admin) {
        admin.setRole(Role.ROLE_ADMIN);
        return ResponseEntity.ok(userServices.createUser(admin));
    }

    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/get-all-users")
    public ResponseEntity<List<UserDB>> getAllUsers() {
        return ResponseEntity.ok(userServices.getAllUsers());
    }

    @PreAuthorize("hasAnyRole('MANAGER','ADMIN')")
    @GetMapping("/get-all-customers")
    public ResponseEntity<List<UserDB>> getAllCustomers() {
        return  ResponseEntity.ok(userServices.getAllCustomers());
    }

    @GetMapping("/get-all-admins")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<List<UserDB>> getAllAdmins() {
        return ResponseEntity.ok(userServices.getAllAdmins());
    }

    @GetMapping("/get-user-by-id/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id, @RequestHeader("Authorization") String token) {
        if(!isAuthorizedUserOrManagerOrAdmin(id, token)){
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
        String currentUserEmail = jwtUtils.extractEmail(token.replace("Bearer ", ""));
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

    @PutMapping("/update-user-data-by-id/{id}")
    public ResponseEntity<?> updateUserData(@RequestBody UserDB updatedUser, @RequestHeader("Authorization") String token, @PathVariable Long id){
        if(!isAuthorizedUserOrManager(id, token)){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You are not authorized to access this resource");
        }
        if (updatedUser == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User data cannot be null");
        }
        return userServices.updateUserById(updatedUser);
    }

    @DeleteMapping("/delete-user-data-by-id/{id}")
    public ResponseEntity<?> deleteUserById(@RequestHeader("Authorization") String token, @PathVariable Long id){
        if(!isAuthorizedUserOrManagerOrAdmin(id, token)){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You are not authorized to access this resource");
        }
        if (id == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User id cannot be null");
        }
        return userServices.deleteUserById(id);
    }

    private boolean isAuthorizedUserOrManager(Long id, String token){
        if (token == null || id == null) {
            return false;
        }

        // Get Current user from the token
        String cleanToken = token.replace("Bearer ", "");
        Long currentUserId = jwtUtils.extractUserId(cleanToken);
        String currentUserRole = jwtUtils.extractUserRole(cleanToken);

        // Admin can't access this function
        if (currentUserRole.equals("ROLE_ADMIN")) {
            return false;
        }

        return (currentUserId.equals(id)) || (currentUserRole.equals("ROLE_MANAGER"));
    }
    private boolean isAuthorizedUserOrManagerOrAdmin(Long id, String token) {
        if (token == null || id == null) {
            return false;
        }

        String cleanToken = token.replace("Bearer ", "");

        // Get Current user from the token
        Long currentUserId = jwtUtils.extractUserId(cleanToken);
        String currentUserRole = jwtUtils.extractUserRole(cleanToken);
        
        if (currentUserId.equals(id)) {
            return true;
        }

        // Get target user from the requested id
        Optional<UserDB> targetUser = userServices.getUserById(id);

        if (targetUser.isEmpty()) {
            return false;
        }
        
        String targetRole = targetUser.get().getRole().name();
        
        // Admin can't access other admins or managers
        if (currentUserRole.equals("ROLE_ADMIN")) {
            return !(targetRole.equals("ROLE_ADMIN") || targetRole.equals("ROLE_MANAGER"));
        }
        
        // Customers can access only their own data
        if (currentUserRole.equals("ROLE_CUSTOMER")) {
            return currentUserId.equals(id);
        }
        
        return true;
    }
}
