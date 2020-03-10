package com.weighment.api.mapper;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;

import com.weighment.api.entity.VehicleDetails;

@Component
public class VehicleServiceMapper extends AbstractServiceMapper{

	private ModelMapper modelMapper;
	
	public VehicleServiceMapper() {
		modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
	}

	public com.weighment.api.model.VehicleDetails mapMzModuleEntityToMzModule(VehicleDetails mzModuleEntity) {
		if(mzModuleEntity == null) {
			return null;
		}

		com.weighment.api.model.VehicleDetails mzModule = map(mzModuleEntity, com.weighment.api.model.VehicleDetails.class);

		return mzModule;
	}
	
	public void mapMzModuleToMzModuleEntity(com.weighment.api.model.VehicleDetails mzModule, VehicleDetails mzModuleEntity) {
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
