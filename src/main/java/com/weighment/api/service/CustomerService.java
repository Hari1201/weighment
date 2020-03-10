package com.weighment.api.service;

import java.math.BigInteger;
import java.util.List;

import org.springframework.http.ResponseEntity;

import com.weighment.api.model.CustomerDetails;
import com.weighment.api.model.JsonResponse;

public interface CustomerService {

	public JsonResponse save(CustomerDetails customerDetails);
	public JsonResponse get(String custName);
	public JsonResponse delete(BigInteger custId);
	
}
