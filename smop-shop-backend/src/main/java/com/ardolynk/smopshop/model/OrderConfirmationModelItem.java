package com.ardolynk.smopshop.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;

@Value
@AllArgsConstructor
@Builder
public class OrderConfirmationModelItem {
  int id;
  String name;
  int amount;
  double price;
  String currency;
  double localPrice;
}
