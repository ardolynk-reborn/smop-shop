package com.ardolynk.smopshop.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;

@Value
@AllArgsConstructor
@Builder
public class OrderConfirmationModel {
  private List<OrderConfirmationModelItem> products;
  private double total;
  private String currency;
}
