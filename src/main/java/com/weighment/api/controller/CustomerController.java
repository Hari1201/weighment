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

import com.weighment.api.model.CustomerDetails;
import com.weighment.api.model.JsonResponse;
import com.weighment.api.service.CustomerService;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {

	@Autowired
	CustomerService customerService;

	@SuppressWarnings("rawtypes")
	@PostMapping
	public JsonResponse save(@RequestBody CustomerDetails customerDetails) {
		try {
		return customerService.save(customerDetails);
		}catch (Exception e) {
			return new JsonResponse(e.getMessage(),"Customer Not Saved!!!",Boolean.FALSE);
		}
	}
	
	@GetMapping("/{id}")
	public JsonResponse getCustomer(@PathVariable(value = "id") String customerName) {
		try {
		return customerService.get(customerName);
		}catch (Exception e) {
			return new JsonResponse(e.getMessage(),"Exception in Customer Retrive !!!",Boolean.FALSE);
		}
	}
	
	@DeleteMapping("/{id}")
	public JsonResponse delete(@PathVariable(value = "id") BigInteger customerId) {
		try {
		return customerService.delete(customerId);
		}catch (Exception e) {
			return new JsonResponse(e.getMessage(),"Exception in delete customer!!!",Boolean.FALSE);
		}
	}

}
