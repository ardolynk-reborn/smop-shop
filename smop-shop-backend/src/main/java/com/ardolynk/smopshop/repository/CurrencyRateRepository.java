package com.ardolynk.smopshop.repository;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import com.ardolynk.smopshop.dao.CurrencyRateEntity;

import jakarta.persistence.criteria.Subquery;

@Repository
public interface CurrencyRateRepository extends JpaRepository<CurrencyRateEntity, Integer>, 
  JpaSpecificationExecutor<CurrencyRateEntity> {

  interface Specs {
    static Specification<CurrencyRateEntity> lastByDestinationCurrency(String toCurrencyId) {
      return (root, query, cb) -> {
        @SuppressWarnings("null")
        Subquery<CurrencyRateEntity> subquery = query.subquery(CurrencyRateEntity.class);
        var subRoot = subquery.from(CurrencyRateEntity.class);

        return cb.and(
          cb.equal(root.get("toCurrencyId"), toCurrencyId),
          cb.not(cb.exists(
            subquery.where(cb.and(
              cb.equal(subRoot.get("fromCurrencyId"), root.get("fromCurrencyId")),
              cb.equal(subRoot.get("toCurrencyId"), toCurrencyId),
              cb.greaterThan(subRoot.get("since"), root.get("since"))
            ))))
        );
      };
    }
  }
}
