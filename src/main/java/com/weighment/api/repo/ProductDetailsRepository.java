package com.weighment.api.repo;


import java.math.BigInteger;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.weighment.api.entity.ProductDetailsEntity;


public interface ProductDetailsRepository extends CrudRepository<ProductDetailsEntity, BigInteger> {

	ProductDetailsEntity findByProductName(String productName);
	
	ProductDetailsEntity findByProductId(BigInteger productId);
	
	@Query("select p from ProductDetailsEntity p where p.productName like %:productName%")
	List<ProductDetailsEntity> getProducts(@Param("productName")String productName);
	
	
}