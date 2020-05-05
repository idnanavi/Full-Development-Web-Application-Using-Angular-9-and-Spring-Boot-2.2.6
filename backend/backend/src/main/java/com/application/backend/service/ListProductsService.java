package com.application.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.backend.dto.ProductsDto;
import com.application.backend.entity.Products;
import com.application.backend.repository.ProductsRepository;

@Service
public class ListProductsService {
	@Autowired
	ProductsRepository pr;
	
	public List<ProductsDto> getAllProduct(){
		List<ProductsDto> pd = new ArrayList();
		List<Products> p = pr.findAll();
		for (int i = 0; i < p.size(); i++) {
			
				ProductsDto dto = new ProductsDto();
				dto.setId(p.get(i).getId());
				dto.setName(p.get(i).getName());
				dto.setDesc(p.get(i).getDesc());
				dto.setPrice(p.get(i).getPrice());
				pd.add(dto);
			
		}
		return pd;
	}
	public List<ProductsDto> getProductByType(String type){
		List<ProductsDto> pd = new ArrayList();
		List<Products> p = pr.findAll();
		for (int i = 0; i < p.size(); i++) {
			if(p.get(i).getType().contains(type)) {
				ProductsDto dto = new ProductsDto();
				dto.setId(p.get(i).getId());
				dto.setName(p.get(i).getName());
				dto.setDesc(p.get(i).getDesc());
				dto.setPrice(p.get(i).getPrice());
				pd.add(dto);
			}
		}
		return pd;
	}
	public void deleteProducts(String id) {
		pr.deleteById(id);
	}
	public Products createProduct(Products product) {
		return pr.save(product);
	}
	public Products editProduct(String id,Products product) {
		Optional<Products> p = pr.findById(id);
		p.get().setName(product.getName());
		p.get().setType(product.getType());
		p.get().setPrice(product.getPrice());
		p.get().setDesc(product.getDesc());
		return pr.save(p.get());
	}
}
