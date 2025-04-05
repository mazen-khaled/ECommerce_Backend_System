package com.example.Ecommerce.Services;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Ecommerce.Models.OtpDB;
import com.example.Ecommerce.Repositories.OtpRepository;
import com.example.Ecommerce.Utility.EmailUtility;

@Service
public class OtpServices {
    @Autowired
    private OtpRepository otpRepository;

    @Autowired
    private EmailUtility emailUtility;

    private static final int OTP_VALID_MINUTES = 5;
    
    public void generateAndSendOtp(String email) throws MessagingException {
        String otp = String.format("%06d", new Random().nextInt(999999));
        
        OtpDB otpRecord = new OtpDB();
        otpRecord.setEmail(email);
        otpRecord.setOtp(otp);
        otpRecord.setCreatedAt(LocalDateTime.now());
        otpRecord.setExpiresAt(LocalDateTime.now().plusMinutes(OTP_VALID_MINUTES));
        otpRecord.setUsed(false);
        otpRepository.save(otpRecord);
        
        emailUtility.sendOtpEmail(email, otp);
    }
    
    public boolean validateOtp(String email, String otp) {
        Optional<OtpDB> otpRecord = otpRepository
            .findByEmailAndOtpAndExpiresAtAfterAndUsedFalse(
                email, 
                otp, 
                LocalDateTime.now()
            );
        
        if (otpRecord.isPresent()) {
            OtpDB record = otpRecord.get();
            record.setUsed(true);
            otpRepository.save(record);
            return true;
        }
        return false;
    }
}