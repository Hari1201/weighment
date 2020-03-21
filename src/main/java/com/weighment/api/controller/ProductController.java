package com.weighment.api.controller;

import java.math.BigInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.weighment.api.model.JsonResponse;
import com.weighment.api.model.ProductDetails;
import com.weighment.api.service.ProductService;

@RestController
@RequestMapping("/api/product")
public class ProductController {

	@Autowired
	ProductService productService;

	@SuppressWarnings("rawtypes")
	@PostMapping
	public JsonResponse save(@RequestBody ProductDetails productDetail) {
		try {
		return productService.save(productDetail);
		}catch (Exception e) {
			return new JsonResponse(e.getMessage(),"Product Not Saved!!!",Boolean.FALSE);
		}
	}
	
	@GetMapping("/{id}")
	public JsonResponse getProduct(@PathVariable(value = "id") String productName) {
		try {
		return productService.get(productName);
		}catch (Exception e) {
			return new JsonResponse(e.getMessage(),"Exception in Product Retrive !!!",Boolean.FALSE);
		}
	}
	
	@DeleteMapping("/{id}")
	public JsonResponse delete(@PathVariable(value = "id") BigInteger productId) {
		try {
		return productService.delete(productId);
		}catch (Exception e) {
			return new JsonResponse(e.getMessage(),"Exception in delete product!!!",Boolean.FALSE);
		}
	}

}
