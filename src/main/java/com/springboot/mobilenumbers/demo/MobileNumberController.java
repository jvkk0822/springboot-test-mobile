package com.springboot.mobilenumbers.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MobileNumberController {

    @RequestMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
}