package com.application.backend.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class ProductsDto {
	private String id;
	private String name;
	private String desc;
	private int price;
}

