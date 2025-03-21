package com.ardolynk.smopshop.model;

import lombok.AllArgsConstructor;
import lombok.Value;

@Value
@AllArgsConstructor
public class OrderModelItem {
  int id;
  int amount;
}
