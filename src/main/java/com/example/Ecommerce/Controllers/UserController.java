package com.example.Ecommerce.Controllers;

import com.example.Ecommerce.DataStructures.Role;
import com.example.Ecommerce.Enities.UserDB;
import com.example.Ecommerce.JWT.JWTUtils;
import com.example.Ecommerce.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
    public UserDB createCustomer(@RequestBody UserDB customer) {
        customer.setRole(Role.ROLE_CUSTOMER);
        return userServices.createUser(customer);
    }

    @PostMapping("/register-new-admin")
    @PreAuthorize("hasRole('MANAGER')")
    public UserDB createAdmin(@RequestBody UserDB admin) {
        admin.setRole(Role.ROLE_ADMIN);
        return userServices.createUser(admin);
    }

    @PreAuthorize("hasRole('MANAGER')")
    @GetMapping("/get-all-users")
    public List<UserDB> getAllUsers() {
        return userServices.getAllUsers();
    }

    @PreAuthorize("hasAnyRole('MANAGER','ADMIN')")
    @GetMapping("/get-all-customers")
    public List<UserDB> getAllCustomers() {
        return userServices.getAllCustomers();
    }

    @GetMapping("/get-all-admins")
    @PreAuthorize("hasRole('MANAGER')")
    public List<UserDB> getAllAdmins() {
        return userServices.getAllAdmins();
    }

    @GetMapping("/get-user-by-id/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id, @RequestHeader("Authorization") String token) {
        if(!idOrMAAreCorrect(id, token)){
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

    @PutMapping("/update-user-data-by-id/{id}")
    public ResponseEntity<?> updateUserData(@RequestBody UserDB updatedUser, @RequestHeader("Authorization") String token, @PathVariable Long id){
        if(!idOrMangerAreCorrect(id, token)){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You are not authorized to access this resource");
        }
        if (updatedUser == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User data cannot be null");
        }
        return userServices.updateUserById(updatedUser);
    }

    @DeleteMapping("/delete-user-data-by-id/{id}")
    public ResponseEntity<?> deleteUserById(@RequestHeader("Authorization") String token, @PathVariable Long id){
        String currentUserRole = jwtUtils.extractUserRole(token.replace("Bearer ", ""));
        if(currentUserRole.matches("ROLE_ADMIN") && (userServices.getUserById(id).get().getRole().name().matches("ROLE_ADMIN") || userServices.getUserById(id).get().getRole().name().matches("ROLE_MANAGER"))){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You are not authorized delete Admins or Mangers");
        }
        if(!idOrMAAreCorrect(id, token)){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You are not authorized to access this resource");
        }
        if (id == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User data cannot be null");
        }
        return userServices.deleteUserById(id);
    }

    private Boolean idOrMangerAreCorrect(Long id, String token){
        Long currentUserId = jwtUtils.extractUserId(token.replace("Bearer ", ""));
        String currentUserRole = jwtUtils.extractUserRole(token.replace("Bearer ", ""));

        if (!currentUserId.equals(id) && !currentUserRole.equals("ROLE_MANAGER")) {
            return Boolean.FALSE;
        }
        return Boolean.TRUE;
    }
    private Boolean idOrMAAreCorrect(Long id, String token){
        Long currentUserId = jwtUtils.extractUserId(token.replace("Bearer ", ""));
        String currentUserRole = jwtUtils.extractUserRole(token.replace("Bearer ", ""));

        if (!currentUserId.equals(id) && !currentUserRole.equals("ROLE_MANAGER") && !currentUserRole.equals("ROLE_ADMIN")) {
            return Boolean.FALSE;
        }
        return Boolean.TRUE;
    }

}
