package com.weighment.api.mapper;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.stereotype.Component;

import com.weighment.api.entity.VehicleDetailsEntity;
import com.weighment.api.model.VehicleDetails;

@Component
public class VehicleServiceMapper extends AbstractServiceMapper{

	private ModelMapper modelMapper;
	
	public VehicleServiceMapper() {
		modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
	}

	public VehicleDetails mapVehicleDetailsEntityToVehicleDetails(VehicleDetailsEntity vehicleDetailsEntity) {
		if(vehicleDetailsEntity == null) {
			return null;
		}

		VehicleDetails vehicleDetail = map(vehicleDetailsEntity, VehicleDetails.class);

		return vehicleDetail;
	}
	
	public void mapVehicleDetailsToVehicleDetailsEntity(VehicleDetails vehicleDetail, VehicleDetailsEntity vehicleDetailsEntity) {
		if(vehicleDetail == null) {
			return;
		}

		map(vehicleDetail, vehicleDetailsEntity);

	}
	
	@Override
	protected ModelMapper getModelMapper() {
		return modelMapper;
	}

	protected void setModelMapper(ModelMapper modelMapper) {
		this.modelMapper = modelMapper;
	}

}
