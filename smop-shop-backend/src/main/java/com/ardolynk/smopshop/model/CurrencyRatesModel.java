package com.ardolynk.smopshop.model;

import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;

@Value
@AllArgsConstructor
@Builder
public class CurrencyRatesModel {
  private String currency;
  private Map<String, Double> rates;
}
