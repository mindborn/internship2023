/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package in.mindborn.demo.controllers;

import java.util.Date;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Manoj
 */
//@Controller
@RestController
public class HelloController
{
//    @ResponseBody
    @GetMapping("/hello")
    public String sayHello()
    {
        return "Hello everyone";
    }
    
//    @ResponseBody
    @GetMapping("/time")
    public Date getTime()
    {
        return new Date();
    }
}
