package com.ardolynk.smopshop.service;

import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

import com.ardolynk.smopshop.dao.CurrencyRateEntity;
import com.ardolynk.smopshop.repository.CurrencyRateRepository;

import lombok.RequiredArgsConstructor;

@Component
@SessionScope
@RequiredArgsConstructor
public class CurrencyRates {

  private final CurrencyRateRepository repository;

  @Value("${app.currency-rates.ttl-millis}")
  private long ttlMillis;

  private String selectedCurrency;
  private Map<String, Double> rates;
  private Long lastUpdateTimeMillis = 0L;

  public synchronized Map<String, Double> getRates(String currency) {
    Long currentTimeMillis = System.currentTimeMillis();
    if (!currency.equals(selectedCurrency) || currentTimeMillis - lastUpdateTimeMillis >= ttlMillis) {
      rates = repository.findAll(CurrencyRateRepository.Specs.lastByDestinationCurrency(currency)).stream()
        .collect(Collectors.toMap(CurrencyRateEntity::getFromCurrency, CurrencyRateEntity::getRate));
      selectedCurrency = currency;
      lastUpdateTimeMillis = currentTimeMillis;
    }
    return rates;
  }
}
