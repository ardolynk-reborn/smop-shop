package com.ardolynk.smopshop.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Value;

@Value
@AllArgsConstructor
public class OrderModel {
  List<OrderModelItem> items;
  String currency;  
}
