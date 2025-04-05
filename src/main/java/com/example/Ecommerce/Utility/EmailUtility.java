package com.example.Ecommerce.Utility;

import java.util.Date;
import java.util.Properties;
import java.util.UUID;

import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import javax.mail.*;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class EmailUtility {
    @Value("${spring.mail.username}")
    private String fromEmail;
    
    @Value("${spring.mail.host}")
    private String host;
    
    @Value("${spring.mail.port}")
    private int port;
    
    @Value("${spring.mail.username}")
    private String username;
    
    @Value("${spring.mail.password}")
    private String password;

    public void sendOtpEmail(String toEmail, String otp) throws MessagingException {
        try {
            Properties props = new Properties();
            props.put("mail.smtp.auth", "true");
            props.put("mail.smtp.starttls.enable", "true");
            props.put("mail.smtp.starttls.required", "true");
            props.put("mail.smtp.ssl.trust", "smtp.gmail.com");
            props.put("mail.smtp.host", host);
            props.put("mail.smtp.port", port);
            
            Session session = Session.getInstance(props, new Authenticator() {
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(username, password);
                }
            });
            
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(fromEmail, "Regalith"));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toEmail));
            message.setSubject("Your Security Code: " + otp);
            
            // HTML content
            String htmlContent = """
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .code { font-size: 24px; font-weight: bold; color: #2563eb; }
                        .footer { margin-top: 20px; font-size: 12px; color: #666; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h2>Your Security Code</h2>
                        <p>Here's your verification code:</p>
                        <p class="code">%s</p>
                        <p>This code expires in 5 minutes.</p>
                        <div class="footer">
                            <p>© 2025 Regalith. All rights reserved.</p>
                            <p>If you didn't request this code, please ignore this email.</p>
                        </div>
                    </div>
                </body>
                </html>
                """.formatted(otp);
            
            message.setContent(htmlContent, "text/html; charset=utf-8");
            
            // Important headers
            message.addHeader("List-Unsubscribe", "<mailto:support@yourdomain.com>");
            message.addHeader("X-Entity-Ref-ID", UUID.randomUUID().toString());
            message.addHeader("X-Priority", "1"); // High priority
            message.addHeader("X-Mailer", "MyLocalApp");
            message.setSentDate(new Date()); // Current timestamp
            
            Transport.send(message);
        } catch (Exception e) {
            throw new MessagingException("Failed to send email: " + e.getMessage());
        }
    }
}