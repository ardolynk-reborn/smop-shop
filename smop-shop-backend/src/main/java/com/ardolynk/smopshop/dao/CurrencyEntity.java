package com.ardolynk.smopshop.dao;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity(name = "currencies")
@NoArgsConstructor
public class CurrencyEntity {
  
  @Id
  private String id;

  private String name;
}
