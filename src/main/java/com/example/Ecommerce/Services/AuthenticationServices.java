package com.example.Ecommerce.Services;
import com.example.Ecommerce.Enities.UserDB;
import com.example.Ecommerce.Repositories.AuthenticationRepository;
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
    public UserDB loadUserByUsername(String username) throws UsernameNotFoundException {
        return authenticationRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
    }
}
