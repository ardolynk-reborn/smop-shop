package com.ardolynk.smopshop.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.ardolynk.smopshop.model.ProductPage;
import com.ardolynk.smopshop.service.ProductService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@AllArgsConstructor
public class ProductController {

  private ProductService service;
  
  @GetMapping("/products")
  public ResponseEntity<ProductPage> getMethodName(
    @RequestParam(defaultValue = "0") int page,
    @RequestParam(defaultValue = "20") int size,
    HttpServletRequest request,
    UriComponentsBuilder uriComponentsBuilder) {
      return ResponseEntity.ok().body(service.getProducts(page, size, request.getRequestURI(), uriComponentsBuilder));
  }
  
}
