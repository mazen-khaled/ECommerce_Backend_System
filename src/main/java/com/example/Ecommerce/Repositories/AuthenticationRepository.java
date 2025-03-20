package com.example.Ecommerce.Repositories;

import com.example.Ecommerce.Enities.UserDB;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface AuthenticationRepository extends JpaRepository<UserDB, Long> {
    Optional<UserDB> findByUsername(String username);
}
