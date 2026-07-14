package com.cognizant.spring_learn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Country {
    private static final Logger LOGGER = LoggerFactory.getLogger(Country.class);

    private String code;
    private String name;

    // Empty parameter constructor with debug log
    public Country() {
        LOGGER.debug("Inside Country Constructor.");
    }

    // Getters and Setters with debug logs
    public String getCode() {
        LOGGER.debug("Inside getCode method. Code: {}", this.code);
        return code;
    }

    public void setCode(String code) {
        LOGGER.debug("Inside setCode method. Setting code to: {}", code);
        this.code = code;
    }

    public String getName() {
        LOGGER.debug("Inside getName method. Name: {}", this.name);
        return name;
    }

    public void setName(String name) {
        LOGGER.debug("Inside setName method. Setting name to: {}", name);
        this.name = name;
    }

    // Generated toString method
    @Override
    public String toString() {
        return "Country [code=" + code + ", name=" + name + "]";
    }
}