package com.cognizant.authenticationservice.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // Generate a secure 256-bit key for HMAC-SHA signing
    private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    // Set token expiration time to 20 minutes (in milliseconds)
    private final long jwtExpirationMs = 1200000;

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .signWith(key)
                .compact();
    }
}