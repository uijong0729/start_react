package com.example.its.web.user;

import java.util.Collection;
import java.util.Collections;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/users")
public class UserController {
    
    @GetMapping
    public String showList(Model model) {
        model.addAttribute("userList", Collections.emptyList());
        
        // templates 기준으로 상대경로
        return "users/list";
    }
}