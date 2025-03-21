package com.ardolynk.smopshop.controller;

import org.springframework.web.bind.annotation.RestController;

import com.ardolynk.smopshop.model.CurrencyModel;
import com.ardolynk.smopshop.model.CurrencyRatesModel;
import com.ardolynk.smopshop.service.CurrencyService;

import jakarta.websocket.server.PathParam;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequiredArgsConstructor
public class CurrencyController {

  private final CurrencyService service;

  @GetMapping("/currencies")
  public ResponseEntity<List<CurrencyModel>> getCurrencies() {
      return ResponseEntity.ok().body(service.getCurrencies());
  }
  
  @GetMapping("/rates/{currency}")
  public ResponseEntity<CurrencyRatesModel> getCurrencyRates(@PathParam("currency") String currency) {
      return ResponseEntity.ok().body(service.getCurrencyRates(currency));
  }
}
