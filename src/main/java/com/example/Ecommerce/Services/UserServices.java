package com.example.Ecommerce.Services;

import com.example.Ecommerce.DataStructures.Role;
import com.example.Ecommerce.Models.UserDB;
import com.example.Ecommerce.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServices {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserDB createUser(UserDB user) {
        if (user.getUsername() == null || user.getUsername().trim().isEmpty()) {
            throw new IllegalArgumentException("Username can't be empty");
        }
        if (user.getPassword() == null || user.getPassword().trim().isEmpty()) {
            throw new IllegalArgumentException("Password can't be empty");
        }
        if (user.getName() == null || user.getName().trim().isEmpty()) {
            throw new IllegalArgumentException("Name can't be empty");
        }
        if (user.getPhone_number() == null || user.getPhone_number().trim().isEmpty()) {
            throw new IllegalArgumentException("Phone Number can't be empty");
        }
        if (user.getEmail() == null || user.getEmail().trim().isEmpty()) {
            throw new IllegalArgumentException("Email can't be empty");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return userRepository.save(user);
    }

    public List<UserDB> getAllUsers() {
        return userRepository.findAll();
    }

    public List<UserDB> getAllAdmins() {
        return userRepository.findByRole(Role.ROLE_ADMIN);
    }

    public List<UserDB> getAllCustomers() {
        return userRepository.findByRole(Role.ROLE_CUSTOMER);
    }

    public Optional<UserDB> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public Optional<UserDB> getUserByPhoneNumber(String number) {
        return userRepository.findByPhoneNumber(number);
    }

    public Optional<UserDB> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public ResponseEntity<?> updateUserById(UserDB updatedUser) {
        Optional<UserDB> existingUser = this.getUserById(updatedUser.getId());

        if (existingUser.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found with id: " + updatedUser.getId());
        }

        UserDB userToUpdate = existingUser.get();

        if (updatedUser.getUsername() != null) {
            userToUpdate.setUsername(updatedUser.getUsername());
        }
        if (updatedUser.getPassword() != null) {
            userToUpdate.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        }
        if (updatedUser.getName() != null) {
            userToUpdate.setName(updatedUser.getName());
        }
        if (updatedUser.getEmail() != null) {
            userToUpdate.setEmail(updatedUser.getEmail());
        }
        if (updatedUser.getPhone_number() != null) {
            userToUpdate.setPhone_number(updatedUser.getPhone_number());
        }
        if (updatedUser.getAddress() != null) {
            userToUpdate.setAddress(updatedUser.getAddress());
        }
        if (updatedUser.getUser_image_url() != null) {
            userToUpdate.setUser_image_url(updatedUser.getUser_image_url());
        }

        // Save the updated user
        UserDB savedUser = userRepository.save(userToUpdate);

        // Return the updated user
        return ResponseEntity.ok(savedUser);
    }

    public ResponseEntity<?> deleteUserById(Long id){
        userRepository.deleteById(id);
        return ResponseEntity.ok("User Deleted Successfully");
    }
}