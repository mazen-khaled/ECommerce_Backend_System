package com.example.Ecommerce.Configurations;

import com.example.Ecommerce.DataStructures.Role;
import com.example.Ecommerce.Enities.UserDB;
import com.example.Ecommerce.Repositories.AuthenticationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class UserDBConfiguration implements CommandLineRunner {

    private final AuthenticationRepository authenticationRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserDBConfiguration(AuthenticationRepository authenticationRepository, PasswordEncoder passwordEncoder) {
        this.authenticationRepository = authenticationRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        // Check if the default user already exists
        if (authenticationRepository.findByUsername("mazen").isEmpty()) {
            // Create the default user
            UserDB MangerConfig = new UserDB();
            MangerConfig.setUsername("MazenIsYourBoss");
            MangerConfig.setPassword(passwordEncoder.encode("1234")); // Encode the password
            MangerConfig.setRole(Role.ROLE_MANAGER);
            MangerConfig.setName("Mazen Khaled");
            MangerConfig.setEmail("kmazen275@gmail.com");
            MangerConfig.setPhone_number("01205843080");

            // Save the default user to the database
            authenticationRepository.save(MangerConfig);
            System.out.println("Your CEO 'Mazen Khaled' Account has been created");
        } else {
            System.out.println("Your CEO 'Mazen Khaled' Account has been created before");
        }
    }
}
