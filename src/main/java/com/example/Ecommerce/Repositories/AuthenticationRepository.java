package com.example.Ecommerce.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.Ecommerce.Models.UserDB;

import java.util.Optional;

public interface AuthenticationRepository extends JpaRepository<UserDB, Long> {
    @Query("SELECT s FROM UserDB s WHERE s.email = ?1")
    Optional<UserDB> findByEmail(String email);
}
