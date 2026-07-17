package com.cognizant.authenticationservice.controller;

import com.cognizant.authenticationservice.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(@RequestHeader(value = "Authorization", required = false) String authHeader) {

        // 1. Check if the Authorization header is present and starts with "Basic "
        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Missing or Invalid Authorization Header");
        }

        try {
            // 2. Extract and decode Base64 credentials
            String base64Credentials = authHeader.substring("Basic ".length()).trim();
            byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(credDecoded, StandardCharsets.UTF_8);

            // Credentials format is "username:password"
            String[] values = credentials.split(":", 2);
            String username = values[0];
            String password = values[1];

            // 3. Validate credentials (matching 'user' and 'pwd' from your requirement)
            if ("user".equals(username) && "pwd".equals(password)) {
                // Generate the JWT token
                String token = jwtUtil.generateToken(username);

                // Return response as JSON format: {"token": "your_token_here"}
                Map<String, String> response = new HashMap<>();
                response.put("token", token);

                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Username or Password");
            }

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error processing authentication");
        }
    }
}