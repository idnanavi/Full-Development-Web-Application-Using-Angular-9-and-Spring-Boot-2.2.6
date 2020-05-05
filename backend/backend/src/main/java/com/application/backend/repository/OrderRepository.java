package com.application.backend.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.application.backend.entity.Order;

@Repository
public interface OrderRepository extends PagingAndSortingRepository<Order,String> {

}
