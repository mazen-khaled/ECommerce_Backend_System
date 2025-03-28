package com.example.Ecommerce.Repositories;

import com.example.Ecommerce.DataStructures.Role;
import com.example.Ecommerce.Models.UserDB;

import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserDB, Long> {
    @Query("SELECT s FROM UserDB s WHERE s.role = ?1")
    List<UserDB> findByRole(@NotNull Role role);

    @Query("SELECT s FROM UserDB s WHERE s.phone_number = ?1")
    Optional<UserDB> findByPhoneNumber(@NotNull String number);

    @Query("SELECT s FROM UserDB s WHERE s.email = ?1")
    Optional<UserDB> findByEmail(@NotNull String email);
}
