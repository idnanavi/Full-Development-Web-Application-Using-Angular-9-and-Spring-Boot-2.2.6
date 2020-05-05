package com.application.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter @NoArgsConstructor
@Table(name="products")
public class Products {
	@Id
	@GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name="system-uuid",strategy="uuid")
	@Column(name="id_products")
	private String id;
	@Column(name="type_products")
	private String type;
	@Column(name="name_products")
	private String name;
	@Column(name="desc_products")
	private String desc;
	@Column(name="price_products")
	private int price;
}