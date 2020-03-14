package com.weighment.api.mapper;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;

import com.weighment.api.entity.CustomerDetailsEntity;
import com.weighment.api.model.CustomerDetails;

@Component
public class CustomerServiceMapper extends AbstractServiceMapper{

	private ModelMapper modelMapper;
	
	public CustomerServiceMapper() {
		modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
	}

	public CustomerDetails mapCustomerDetailsEntityToCustomerDetails(CustomerDetailsEntity customerDetailsEntity) {
		if(customerDetailsEntity == null) {
			return null;
		}

		CustomerDetails customerDetails = map(customerDetailsEntity, CustomerDetails.class);
		return customerDetails;
	}
	
	public void mapCustomerDetailsToCustomerDetailsEntity(CustomerDetails customerDetails, CustomerDetailsEntity customerDetailsEntity) {
		if(customerDetails == null) {
			return;
		}

		map(customerDetails, customerDetailsEntity);

	}
	
	@Override
	protected ModelMapper getModelMapper() {
		return modelMapper;
	}

	protected void setModelMapper(ModelMapper modelMapper) {
		this.modelMapper = modelMapper;
	}

}
