package com.example.Ecommerce.JWT;

import com.example.Ecommerce.Enities.UserDB;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JWTUtils {
    @Value("${jwt.SECRET}")
    private String SECRET;

    @Value("${jwt.EXPIRATION_TIME}")
    private Long EXPIRATION_TIME;

    private Key key(){
        return Keys.hmacShaKeyFor(SECRET.getBytes());
    }

    public String generateToken(UserDB userDB) {
        Map<String, Object> claims = new HashMap<>();

        claims.put("id", userDB.getId());
        claims.put("phone_number", userDB.getPhone_number());
        claims.put("email", userDB.getEmail());
        claims.put("role",userDB.getRole());

        return createToken(claims, userDB.getUsername());
    }

    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .subject(subject)
                .claims(claims)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME * 1000))
                .signWith(key())
                .compact();
    }

    public Boolean validateToken(String token, UserDB userDB) {
        final String username = extractUsername(token);
        return (username.equals(userDB.getUsername()) && !isTokenExpired(token));
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public Long extractUserId(String token) {
        Claims claims = extractAllClaims(token);
        return claims.get("id", Long.class);
    }

    public String extractUserPhoneNumber(String token) {
        Claims claims = extractAllClaims(token);
        return claims.get("phone_number", String.class);
    }

    public String extractUserEmail(String token) {
        Claims claims = extractAllClaims(token);
        return claims.get("email", String.class);
    }

    public String extractUserRole(String token) {
        Claims claims = extractAllClaims(token);
        return claims.get("role", String.class);
    }

    private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parser()
                .verifyWith((SecretKey) key()).build()
                .parseSignedClaims(token)
                .getPayload();
    }

    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }
}
