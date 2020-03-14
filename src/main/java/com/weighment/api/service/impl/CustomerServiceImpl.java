package com.weighment.api.service.impl;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.weighment.api.entity.CustomerDetailsEntity;
import com.weighment.api.mapper.CustomerServiceMapper;
import com.weighment.api.model.CustomerDetails;
import com.weighment.api.model.JsonResponse;
import com.weighment.api.repo.CustomerDetailsRepository;
import com.weighment.api.service.CustomerService;


@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	CustomerDetailsRepository customerDetailsRepository;
	
	@Autowired
	CustomerServiceMapper customerServiceMapper;
	
	@SuppressWarnings("rawtypes")
	@Override
	public JsonResponse save(CustomerDetails customerDetail) {
		try {
			CustomerDetailsEntity isCustomerExists = customerDetailsRepository
					.findByCustomerId(customerDetail.getCustomerId());
			if (isCustomerExists == null) {
				CustomerDetailsEntity isCustomerNameAvailable = customerDetailsRepository
						.findByCustomerName(customerDetail.getCustomerName());
				if(isCustomerNameAvailable!=null) {
					return new JsonResponse(Boolean.FALSE,"Customer Already Exists!!!");
				}
				CustomerDetailsEntity addCustomer = new CustomerDetailsEntity();
				customerServiceMapper.mapCustomerDetailsToCustomerDetailsEntity(customerDetail, addCustomer);
				addCustomer.setCreatedDate(new Date());
				CustomerDetailsEntity savedEntity = customerDetailsRepository.save(addCustomer);
				if (savedEntity != null) {
					return new JsonResponse(Boolean.TRUE,"Customer Saved Successfully!!!");
				}
			} else {
				isCustomerExists.setCustomerName(customerDetail.getCustomerName());
				isCustomerExists.setCustomerPhone(customerDetail.getCustomerPhone());
				isCustomerExists.setUpdatedDate(new Date());
				CustomerDetailsEntity savedEntity = customerDetailsRepository.save(isCustomerExists);
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
		List<CustomerDetailsEntity> customerDetailsEntities = null;
		if (custName.equalsIgnoreCase("ALL")) {
		customerDetailsEntities = (List<CustomerDetailsEntity>) customerDetailsRepository.findAll();
		}else {
			customerDetailsEntities = customerDetailsRepository.getCustomers(custName);
		}
		List<CustomerDetails> customerDetails = null;
		if(!customerDetailsEntities.isEmpty()) {
			customerDetails = new ArrayList<>();
			for(CustomerDetailsEntity customerDetailsEntity : customerDetailsEntities) {
				CustomerDetails customerDetail = new CustomerDetails();
				customerDetail = customerServiceMapper.mapCustomerDetailsEntityToCustomerDetails(customerDetailsEntity);
				customerDetails.add(customerDetail);
			}
			return new JsonResponse(customerDetailsEntities,"Data Retrived Succesfully!!!",Boolean.TRUE);
		}else {
			return new JsonResponse(customerDetailsEntities,"No Data Available!!!",Boolean.TRUE);
		}
	}

	@Override
	public JsonResponse delete(BigInteger custId) {
		try {
			customerDetailsRepository.delete(custId);
			return new JsonResponse(Boolean.TRUE,"Customer Deleted Successfully!!!");
		
		} catch (Exception e) {
			throw e;
		}
	}


}
