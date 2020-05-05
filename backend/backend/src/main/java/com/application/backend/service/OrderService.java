package com.application.backend.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.backend.entity.Order;
import com.application.backend.repository.OrderRepository;

@Service
public class OrderService {
@Autowired
OrderRepository orderRepository;
public List<Order> saveAllOrder(List<Order> order){
	List<Order> response = (List<Order>) orderRepository.saveAll(order);
	return response;
}
}
