package com.weighment.api.service.impl;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.weighment.api.mapper.CustomerServiceMapper;
import com.weighment.api.model.CustomerDetails;
import com.weighment.api.model.JsonResponse;
import com.weighment.api.repo.CustomerDetailsRepository;
import com.weighment.api.service.CustomerService;


@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	CustomerDetailsRepository repo;
	
	@Autowired
	CustomerServiceMapper customerServiceMapper;
	
	@SuppressWarnings("rawtypes")
	@Override
	public JsonResponse save(CustomerDetails customerDetails) {
		try {
			com.weighment.api.entity.CustomerDetails details = repo
					.findByCustomerId(customerDetails.getCustomerId());
			if (details == null) {
				com.weighment.api.entity.CustomerDetails detailsCustomerDetails = repo
						.findByCustomerName(customerDetails.getCustomerName());
				if(detailsCustomerDetails!=null) {
					return new JsonResponse(Boolean.FALSE,"Customer Already Exists!!!");
				}
				com.weighment.api.entity.CustomerDetails detailsEntity = new com.weighment.api.entity.CustomerDetails();
				customerServiceMapper.mapMzModuleToMzModuleEntity(customerDetails, detailsEntity);
				detailsEntity.setCreatedDte(new Date());
				com.weighment.api.entity.CustomerDetails savedEntity = repo.save(detailsEntity);
				if (savedEntity != null) {
					return new JsonResponse(Boolean.TRUE,"Customer Saved Successfully!!!");
				}
			} else {
				details.setCustomerName(customerDetails.getCustomerName());
				details.setCustomerPhone(customerDetails.getCustomerPhone());
				details.setUpdatedDate(new Date());
				com.weighment.api.entity.CustomerDetails savedEntity = repo.save(details);
				if (savedEntity != null) {
					return new JsonResponse(Boolean.TRUE,"Customer updated Successfully!!!");
				}
			}

		} catch (Exception e) {
			throw e;
		}
		return null;

	}

	@Override
	public JsonResponse  get(String custName) {
		List<com.weighment.api.entity.CustomerDetails> customerDetails = null;
		if (custName.equalsIgnoreCase("ALL")) {
		customerDetails = (List<com.weighment.api.entity.CustomerDetails>) repo.findAll();
		}else {
			customerDetails = repo.getCustomers(custName);
		}
		List<CustomerDetails> list = null;
		if(!customerDetails.isEmpty()) {
			list = new ArrayList<>();
			for(com.weighment.api.entity.CustomerDetails details : customerDetails) {
				CustomerDetails customerDetail = new CustomerDetails();
				customerDetail = customerServiceMapper.mapMzModuleEntityToMzModule(details);
				list.add(customerDetail);
			}
			return new JsonResponse(customerDetails,"Data Retrived Succesfully!!!",Boolean.TRUE);
		}else {
			return new JsonResponse(customerDetails,"No Data Available!!!",Boolean.TRUE);
		}
	}

	@Override
	public JsonResponse delete(BigInteger custId) {
		try {
			repo.delete(custId);
			return new JsonResponse(Boolean.TRUE,"Customer Deleted Successfully!!!");
		
		} catch (Exception e) {
			throw e;
		}
	}


}
