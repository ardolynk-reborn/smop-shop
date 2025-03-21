package com.ardolynk.smopshop.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.ardolynk.smopshop.dao.ProductEntity;

@Repository
public interface ProductRepository extends PagingAndSortingRepository<ProductEntity, Integer> {
  List<ProductEntity> findByIdIn(List<Integer> ids);
}
