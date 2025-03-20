package com.example.Ecommerce.Repositories;

import com.example.Ecommerce.Enities.UserDB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<UserDB, Long> {
    @Query("SELECT s FROM UserDB s WHERE s.role = ?1")
    List<UserDB> findByRole(String role);
}
