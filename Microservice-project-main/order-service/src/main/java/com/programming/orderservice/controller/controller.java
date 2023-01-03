package com.programming.orderservice.controller;

import com.programming.orderservice.model.Order;
import com.programming.orderservice.repository.OrderRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/order")
public class controller {
    public OrderRepo orderRepo;

    @Autowired
    public controller(OrderRepo orderRepo) {
        this.orderRepo = orderRepo;
    }

    @RequestMapping("/test")
    public String test() {
        return "test";
    }

    @GetMapping
    public List<Order> findAllOrders() {
        return orderRepo.findAll();
    }
}
