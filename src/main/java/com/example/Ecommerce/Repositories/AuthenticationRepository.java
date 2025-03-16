package com.example.Ecommerce.Repositories;

import com.example.Ecommerce.DataStructures.Role;
import com.example.Ecommerce.Enities.AuthenticationDB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface AuthenticationRepository extends JpaRepository<AuthenticationDB, Long> {
    Optional<AuthenticationDB> findByUsername(String username);

    @Query("SELECT s FROM AuthenticationDB s WHERE s.role = ?1")
    List<AuthenticationDB> findByRole(String role);
}
