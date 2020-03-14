package com.weighment.api.mapper;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;

import com.weighment.api.entity.WeighmentEntryDetailsEntity;
import com.weighment.api.model.WeighmentEntryDetails;

@Component
public class WeighmentEntryServiceMapper extends AbstractServiceMapper{

	private ModelMapper modelMapper;
	
	public WeighmentEntryServiceMapper() {
		modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
	}

	public WeighmentEntryDetails mapWeighmentEntryDetailsEntityToWeighmentEntryDetails(WeighmentEntryDetailsEntity weighmentEntryDetailsEntity) {
		if(weighmentEntryDetailsEntity == null) {
			return null;
		}

		WeighmentEntryDetails weighmentEntryDetail = map(weighmentEntryDetailsEntity, WeighmentEntryDetails.class);
		return weighmentEntryDetail;
	}
	
	public void mapWeighmentEntryDetailsToWeighmentEntryDetailsEntity(WeighmentEntryDetails weighmentEntryDetails, WeighmentEntryDetailsEntity weighmentEntryDetailsEntity) {
		if(weighmentEntryDetails == null) {
			return;
		}

		map(weighmentEntryDetails, weighmentEntryDetailsEntity);

	}
	
	@Override
	protected ModelMapper getModelMapper() {
		return modelMapper;
	}

	protected void setModelMapper(ModelMapper modelMapper) {
		this.modelMapper = modelMapper;
	}

}
