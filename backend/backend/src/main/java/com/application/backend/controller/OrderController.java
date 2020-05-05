package com.application.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.backend.entity.Order;
import com.application.backend.service.OrderService;

@RestController @CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("order")
public class OrderController {
	@Autowired
	OrderService os;
	@PostMapping("create-order")
	public List<Order> createProduct(@RequestBody List<Order> order){
		List<Order> orderResponse = (List<Order>) os.saveAllOrder(order);
		return orderResponse;
	}
}
