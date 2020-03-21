package com.weighment.api.controller;

import java.math.BigInteger;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
		      
			Optional<CustomerDetails> employee = Optional.ofNullable(customerDetails);
			Optional<String> name = Optional.ofNullable(customerDetails.getCustomerName());
			Optional<String> phone = Optional.ofNullable(customerDetails.getCustomerPhone());

			if(employee.isEmpty()) {
				return new JsonResponse(Boolean.FALSE,"Please enter customer details!!!");
			}else if(name.isEmpty()) {
				return new JsonResponse(Boolean.FALSE,"Please select customer!!!");
			} else if (!phone.isEmpty()) {
				Pattern pattern = Pattern.compile("\\d{10}");
				Matcher matcher = pattern.matcher(customerDetails.getCustomerPhone());
				if (!matcher.matches()) {
					return new JsonResponse(Boolean.FALSE, "Please enter valid mobile number!!!");
				}
			}
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
