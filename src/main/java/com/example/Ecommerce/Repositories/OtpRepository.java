package com.example.Ecommerce.Repositories;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Ecommerce.Models.OtpDB;

public interface OtpRepository extends JpaRepository<OtpDB, Long>{
    Optional<OtpDB> findByEmailAndOtpAndExpiresAtAfterAndUsedFalse(String email, String otp, LocalDateTime now);
} 
