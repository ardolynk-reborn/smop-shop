package com.ardolynk.smopshop.service;

import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ardolynk.smopshop.dao.ProductEntity;
import com.ardolynk.smopshop.model.OrderConfirmationModel;
import com.ardolynk.smopshop.model.OrderConfirmationModelItem;
import com.ardolynk.smopshop.model.OrderModel;
import com.ardolynk.smopshop.model.OrderModelItem;
import com.ardolynk.smopshop.repository.ProductRepository;

import lombok.AllArgsConstructor;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class OrderService {

  private final ProductRepository repository;
  private final CurrencyRates currencyRates;

  public OrderConfirmationModel confirmOrder(OrderModel order) {
    DecimalFormat priceFormat = new DecimalFormat("0.00");
    priceFormat.setRoundingMode(RoundingMode.HALF_EVEN);

    List<OrderConfirmationModelItem> confirmedItems = new ArrayList<>(order.getItems().size());
    String currency = order.getCurrency();
    Map<String, Double> rates = currencyRates.getRates(currency);
    double total = 0.0;
    Map<Integer, ProductEntity> products = repository.findByIdIn(
      order.getItems().stream().map(OrderModelItem::getId).toList()
    ).stream().collect(Collectors.toMap(ProductEntity::getId, Function.identity()));
    for (OrderModelItem item : order.getItems()) {
      ProductEntity product = products.get(item.getId());
      if (product == null) {
        throw new RuntimeException("Product not found");
      }
      if (item.getAmount() > product.getAmount()) {
        throw new RuntimeException("Not enough products");
      }

      double localPrice = product.getPrice();
      if (!currency.equals(product.getCurrency())) {
        localPrice *= rates.get(product.getCurrency());
      }
      total += localPrice * item.getAmount();

      confirmedItems.add(OrderConfirmationModelItem.builder()
        .id(product.getId())
        .name(product.getName())
        .amount(item.getAmount())
        .price(product.getPrice())
        .currency(product.getCurrency())
        .localPrice(Math.round(localPrice * 100.0) / 100.0)
        .build());

    };

    return OrderConfirmationModel.builder().products(confirmedItems).total(Math.round(total * 100.0) / 100.0).currency(currency).build();
  }
}