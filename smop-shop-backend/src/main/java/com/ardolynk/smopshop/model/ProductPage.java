package com.ardolynk.smopshop.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;

@Value
@AllArgsConstructor
@Builder
public class ProductPage {
  private List<ProductModel> products;
  private String next;
}
