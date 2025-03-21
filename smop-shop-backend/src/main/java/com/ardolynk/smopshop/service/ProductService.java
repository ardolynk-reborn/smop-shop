package com.ardolynk.smopshop.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;

import com.ardolynk.smopshop.dao.ProductEntity;
import com.ardolynk.smopshop.model.ProductModel;
import com.ardolynk.smopshop.model.ProductPage;
import com.ardolynk.smopshop.repository.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {
  
  private final ProductRepository productRepository;

  public ProductPage getProducts(int pageNum, int pageSize, String requestUrl, UriComponentsBuilder uriBuilder) {
    String baseUri = uriBuilder.build().toString();
    Page<ProductEntity> page = productRepository.findAll(PageRequest.of(pageNum, pageSize));
    List<ProductModel> products = page.stream()
        .map(entity -> ProductModel.builder()
          .id(entity.getId())
          .name(entity.getName())
          .description(entity.getDescription())
          .amount(entity.getAmount())
          .price(entity.getPrice())
          .currency(entity.getCurrency())
          .imageUrl(constructGlobalUri(UriComponentsBuilder.fromUriString(baseUri),
            String.format("/images/img_%d.jpg", entity.getId())))
          .thumbnailUrl(constructGlobalUri(UriComponentsBuilder.fromUriString(baseUri),
            String.format("/thumbnails/thumb_%d.jpg", entity.getId())))
        .build()
        ).toList();
      
      ProductPage.ProductPageBuilder responseBuilder = ProductPage.builder().products(products);
      if (page.hasNext()) {
        Pageable nextPage = page.nextPageable();
        responseBuilder.next(constructNextPageUri(UriComponentsBuilder.fromUriString(baseUri), requestUrl,
          nextPage.getPageNumber(), nextPage.getPageSize()));
      }
      return responseBuilder.build();
  }

  private String constructGlobalUri(UriComponentsBuilder uriBuilder, String localUri) {
    return uriBuilder.path(localUri).build().encode().toUriString();
  }

  private String constructNextPageUri(UriComponentsBuilder uriBuilder, String requestUrl, int nextPage, int nextSize) {
    return uriBuilder.path(requestUrl)
      .replaceQueryParam("page", nextPage)
      .replaceQueryParam("size", nextSize)
      .build()
      .encode()
      .toUriString();
  }

}
