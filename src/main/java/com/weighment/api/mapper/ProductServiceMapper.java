package com.weighment.api.mapper;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;

import com.weighment.api.entity.ProductDetailsEntity;
import com.weighment.api.model.ProductDetails;

@Component
public class ProductServiceMapper extends AbstractServiceMapper{

	private ModelMapper modelMapper;
	
	public ProductServiceMapper() {
		modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
	}

	public ProductDetails mapProductDetailsEntityToProductDetails(ProductDetailsEntity productDetailsEntity) {
		if(productDetailsEntity == null) {
			return null;
		}

		ProductDetails productDetail = map(productDetailsEntity, ProductDetails.class);

		return productDetail;
	}
	
	public void mapProductDetailsToProductDetailsEntity(ProductDetails productDetail, ProductDetailsEntity productDetailsEntity) {
		if(productDetail == null) {
			return;
		}

		map(productDetail, productDetailsEntity);

	}
	
	@Override
	protected ModelMapper getModelMapper() {
		return modelMapper;
	}

	protected void setModelMapper(ModelMapper modelMapper) {
		this.modelMapper = modelMapper;
	}

}
