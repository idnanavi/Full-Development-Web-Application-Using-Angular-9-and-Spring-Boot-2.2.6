package com.application.backend.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.application.backend.entity.Products;

@Repository
public interface ProductsRepository extends PagingAndSortingRepository<Products,String> {
	public List<Products> findAll();
	void deleteById(String id);
}
