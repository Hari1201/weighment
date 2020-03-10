package com.weighment.api.mapper;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;

import com.weighment.api.entity.CustomerDetails;

@Component
public class CustomerServiceMapper extends AbstractServiceMapper{

	private ModelMapper modelMapper;
	
	public CustomerServiceMapper() {
		modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
	}

	public com.weighment.api.model.CustomerDetails mapMzModuleEntityToMzModule(CustomerDetails mzModuleEntity) {
		if(mzModuleEntity == null) {
			return null;
		}

		com.weighment.api.model.CustomerDetails mzModule = map(mzModuleEntity, com.weighment.api.model.CustomerDetails.class);
		return mzModule;
	}
	
	public void mapMzModuleToMzModuleEntity(com.weighment.api.model.CustomerDetails mzModule, CustomerDetails mzModuleEntity) {
		if(mzModule == null) {
			return;
		}

		map(mzModule, mzModuleEntity);

	}
	
	@Override
	protected ModelMapper getModelMapper() {
		return modelMapper;
	}

	protected void setModelMapper(ModelMapper modelMapper) {
		this.modelMapper = modelMapper;
	}

}
