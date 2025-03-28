package com.example.Ecommerce.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Ecommerce.Models.UserDB;

import java.util.Optional;

public interface AuthenticationRepository extends JpaRepository<UserDB, Long> {
    Optional<UserDB> findByUsername(String username);
}
