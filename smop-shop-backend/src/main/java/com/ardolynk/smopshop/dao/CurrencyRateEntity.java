package com.ardolynk.smopshop.dao;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity(name = "currency_rates")
@NoArgsConstructor
public class CurrencyRateEntity {
  
  @Id
  private int id;

  @Column(name="from_currency_id")
  private String fromCurrency;

  @Column(name="to_currency_id")
  private String toCurrency;

  private double rate;

  private LocalDateTime since;
}
