package com.application.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.backend.entity.Products;
import com.application.backend.service.ListProductsService;

@RestController @CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("products")
public class ListProductsController {
	@Autowired
	ListProductsService lps;
	@GetMapping("all-products")
	 public ResponseEntity<Object> viewAllProduct(){
		return new ResponseEntity<>(lps.getAllProduct(),HttpStatus.OK);
	}
	@GetMapping("all-products/{type}")
	public ResponseEntity<Object> viewProductByType(@PathVariable String type){
		return new ResponseEntity<>(lps.getProductByType(type),HttpStatus.OK);
	}
	@DeleteMapping("delete-products/{id}")
	public void deleteProducts(@PathVariable String id) {
		lps.deleteProducts(id);
	}
	@PostMapping("create-product")
	public Products createProduct(@RequestBody Products product){
		return lps.createProduct(product);
	}
	@PutMapping("edit-product/{id}")
	public Products editProduct(@PathVariable String id,@RequestBody Products product) {
		return lps.editProduct(id, product);
	}
}