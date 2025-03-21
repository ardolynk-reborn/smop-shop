package com.ardolynk.smopshop.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;

@Value
@AllArgsConstructor
@Builder
public class CurrencyModel {
  private String id;
  private String name;
}
