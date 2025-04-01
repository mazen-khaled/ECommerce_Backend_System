package com.example.Ecommerce.Services;
import com.example.Ecommerce.Models.UserDB;
import com.example.Ecommerce.Repositories.AuthenticationRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class AuthenticationServices implements UserDetailsService {
    @Autowired
    private AuthenticationRepository authenticationRepository;

    // Security logic method
    @Override
    public UserDB loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<UserDB> userOpt = authenticationRepository.findByEmail(email);
        return userOpt.orElseThrow(() -> {
            return new UsernameNotFoundException("User Email not found with email: " + email);
        });
    }
}
