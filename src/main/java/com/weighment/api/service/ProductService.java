package com.weighment.api.service;

import java.math.BigInteger;

import com.weighment.api.model.JsonResponse;
import com.weighment.api.model.ProductDetails;

public interface ProductService {

	public JsonResponse save(ProductDetails productDetail);
	public JsonResponse get(String productName);
	public JsonResponse delete(BigInteger productId);
	
}
