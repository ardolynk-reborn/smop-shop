package com.ardolynk.smopshop.dao;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity(name = "products")
@NoArgsConstructor
public class ProductEntity {
  
  @Id
  @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
  private int id;

  private String name;
  private String description;
  private int amount;
  private double price;
  private String currency;
}
