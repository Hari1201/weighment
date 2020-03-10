package com.weighment.api.repo;


import org.springframework.data.repository.CrudRepository;

import com.weighment.api.entity.ProductDetails;


public interface ProductDetailsRepository extends CrudRepository<ProductDetails, Long> {


}