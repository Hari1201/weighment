package com.weighment.api.mapper;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;

import com.weighment.api.entity.ProductDetails;

@Component
public class ProductServiceMapper extends AbstractServiceMapper{

	private ModelMapper modelMapper;
	
	public ProductServiceMapper() {
		modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
	}

	public com.weighment.api.model.ProductDetails mapMzModuleEntityToMzModule(ProductDetails mzModuleEntity) {
		if(mzModuleEntity == null) {
			return null;
		}

		com.weighment.api.model.ProductDetails mzModule = map(mzModuleEntity, com.weighment.api.model.ProductDetails.class);

		return mzModule;
	}
	
	public void mapMzModuleToMzModuleEntity(com.weighment.api.model.ProductDetails mzModule, ProductDetails mzModuleEntity) {
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
