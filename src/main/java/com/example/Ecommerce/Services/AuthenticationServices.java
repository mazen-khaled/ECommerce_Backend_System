package com.example.Ecommerce.Services;

import com.example.Ecommerce.DataStructures.Role;
import com.example.Ecommerce.Enities.AuthenticationDB;
import com.example.Ecommerce.Repositories.AuthenticationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthenticationServices implements UserDetailsService {
    @Autowired
    private AuthenticationRepository authenticationRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Business logic methods
    public AuthenticationDB createUser(AuthenticationDB user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return authenticationRepository.save(user);
    }

    public List<AuthenticationDB> getAllUsers() {
        return authenticationRepository.findAll();
    }

    public List<AuthenticationDB> getAllAdmins() {
        return authenticationRepository.findByRole(Role.ADMIN.name());
    }

    // Security logic method
    @Override
    public AuthenticationDB loadUserByUsername(String username) throws UsernameNotFoundException {
        return authenticationRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
    }
}
