package com.ardolynk.smopshop.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;

@Value
@AllArgsConstructor
@Builder
public class ProductModel {
  private int id;
  private String name;
  private String description;
  private int amount;
  private double price;
  private String currency;
  private String imageUrl;
  private String thumbnailUrl;
}
