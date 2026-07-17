package com.cognizant.authenticationservice.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                // Disable CSRF protection since we are using stateless JWT tokens
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        // Explicitly allow anyone to access the /authenticate endpoint
                        .requestMatchers("/authenticate").permitAll()
                        // Any other request to the application must be authenticated
                        .anyRequest().authenticated()
                );

        return http.build();
    }
}