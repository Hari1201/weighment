package com.weighment.api.service.impl;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.weighment.api.entity.ProductDetailsEntity;
import com.weighment.api.mapper.ProductServiceMapper;
import com.weighment.api.model.JsonResponse;
import com.weighment.api.model.ProductDetails;
import com.weighment.api.repo.ProductDetailsRepository;
import com.weighment.api.service.ProductService;


@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductDetailsRepository productDetailsRepository;
	
	@Autowired
	ProductServiceMapper productServiceMapper;
	
	@SuppressWarnings("rawtypes")
	@Override
	public JsonResponse save(ProductDetails productDetail) {
		try {
			ProductDetailsEntity isProductExists = productDetailsRepository
					.findByProductId(productDetail.getProductId());
			if (isProductExists == null) {
				ProductDetailsEntity isProductNameAvailable = productDetailsRepository
						.findByProductName(productDetail.getProductName());
				if(isProductNameAvailable!=null) {
					return new JsonResponse(Boolean.FALSE,"Product Already Exists!!!");
				}
				ProductDetailsEntity addProduct = new ProductDetailsEntity();
				productServiceMapper.mapProductDetailsToProductDetailsEntity(productDetail, addProduct);
				addProduct.setCreatedDate(new Date());
				ProductDetailsEntity savedEntity = productDetailsRepository.save(addProduct);
				if (savedEntity != null) {
					return new JsonResponse(Boolean.TRUE,"Product Saved Successfully!!!");
				}
			} else {
				isProductExists.setProductName(productDetail.getProductName());
				isProductExists.setProductRate(productDetail.getProductRate());
				isProductExists.setUpdatedDate(new Date());
				ProductDetailsEntity savedEntity = productDetailsRepository.save(isProductExists);
				if (savedEntity != null) {
					return new JsonResponse(Boolean.TRUE,"Product updated Successfully!!!");
				}
			}

		} catch (Exception e) {
			throw e;
		}
		return null;

	}

	@Override
	public JsonResponse  get(String productName) {
		List<ProductDetailsEntity> productDetailsEntities = null;
		if (productName.equalsIgnoreCase("ALL")) {
		productDetailsEntities = (List<ProductDetailsEntity>) productDetailsRepository.findAll();
		}else {
			productDetailsEntities = productDetailsRepository.getProducts(productName);
		}
		List<ProductDetails> productDetails = null;
		if(!productDetailsEntities.isEmpty()) {
			productDetails = new ArrayList<>();
			for(ProductDetailsEntity productDetailsEntity : productDetailsEntities) {
				ProductDetails productDetail = new ProductDetails();
				productDetail = productServiceMapper.mapProductDetailsEntityToProductDetails(productDetailsEntity);
				productDetails.add(productDetail);
			}
			return new JsonResponse(productDetailsEntities,"Data Retrived Succesfully!!!",Boolean.TRUE);
		}else {
			return new JsonResponse(productDetailsEntities,"No Data Available!!!",Boolean.TRUE);
		}
	}

	@Override
	public JsonResponse delete(BigInteger productId) {
		try {
			productDetailsRepository.delete(productId);
			return new JsonResponse(Boolean.TRUE,"Product Deleted Successfully!!!");
		
		} catch (Exception e) {
			throw e;
		}
	}


}
