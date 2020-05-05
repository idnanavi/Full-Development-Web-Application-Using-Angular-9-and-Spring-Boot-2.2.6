package com.application.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.annotations.GenericGenerator;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter @NoArgsConstructor
@Table(name="item")
public class Order {
	@Id
	@Column(name = "order_id")
	@Size(max=32)
	@GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name="system-uuid",strategy="uuid")
	private String order_id;
	
	@Column(name ="id")
	private String id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name="description")
	private String desc;
	
	@Column(name = "price")
	private int price;

}
