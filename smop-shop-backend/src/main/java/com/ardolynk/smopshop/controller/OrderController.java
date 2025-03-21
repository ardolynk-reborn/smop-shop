package com.ardolynk.smopshop.controller;

import org.springframework.web.bind.annotation.RestController;

import com.ardolynk.smopshop.model.OrderConfirmationModel;
import com.ardolynk.smopshop.model.OrderModel;
import com.ardolynk.smopshop.service.OrderService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequiredArgsConstructor
public class OrderController {
  
  private final OrderService service;

  @PostMapping("/order")
  public ResponseEntity<OrderConfirmationModel> postMethodName(@RequestBody OrderModel order) {
    return ResponseEntity.ok(service.confirmOrder(order));
  }
}
