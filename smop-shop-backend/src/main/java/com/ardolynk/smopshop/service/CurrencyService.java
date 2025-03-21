package com.ardolynk.smopshop.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ardolynk.smopshop.model.CurrencyModel;
import com.ardolynk.smopshop.model.CurrencyRatesModel;
import com.ardolynk.smopshop.repository.CurrencyRepository;

import lombok.RequiredArgsConstructor;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class CurrencyService {

  private final CurrencyRepository currencyRepository;
  private final CurrencyRates currencyRates;

  public List<CurrencyModel> getCurrencies() {
    return currencyRepository.findAll().stream()
        .map(currency -> CurrencyModel.builder().id(currency.getId()).name(currency.getName()).build())
        .toList();
  }

  public CurrencyRatesModel getCurrencyRates(String currency) {
    Map<String, Double> rates = currencyRates.getRates(currency);
    return CurrencyRatesModel.builder().currency(currency).rates(rates).build();
  }
}
