package com.weighment.api.service.impl;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.weighment.api.entity.VehicleDetailsEntity;
import com.weighment.api.mapper.VehicleServiceMapper;
import com.weighment.api.model.JsonResponse;
import com.weighment.api.model.VehicleDetails;
import com.weighment.api.repo.VehicleDetailsRepository;
import com.weighment.api.service.VehicleService;


@Service
public class VehicleServiceImpl implements VehicleService {

	@Autowired
	VehicleDetailsRepository vehicleDetailsRepository;
	
	@Autowired
	VehicleServiceMapper vehicleServiceMapper;
	
	@SuppressWarnings("rawtypes")
	@Override
	public JsonResponse save(VehicleDetails vehicleDetail) {
		try {
			VehicleDetailsEntity isVehicleExists = vehicleDetailsRepository
					.findByvehicleId(vehicleDetail.getVehicleId());
			if (isVehicleExists == null) {
				VehicleDetailsEntity isVehicleNameExists = vehicleDetailsRepository
						.findByVehicleNumber(vehicleDetail.getVehicleNumber());
				if(isVehicleNameExists!=null) {
					return new JsonResponse(Boolean.FALSE,"Vehicle Already Exists!!!");
				}
				VehicleDetailsEntity vehicleDetailsEntity = new VehicleDetailsEntity();
				vehicleServiceMapper.mapVehicleDetailsToVehicleDetailsEntity(vehicleDetail, vehicleDetailsEntity);
				vehicleDetailsEntity.setCreatedDate(new Date());
				VehicleDetailsEntity savedEntity = vehicleDetailsRepository.save(vehicleDetailsEntity);
				if (savedEntity != null) {
					return new JsonResponse(Boolean.TRUE,"Vehicle Saved Successfully!!!");
				}
			} else {
				isVehicleExists.setVehicleNumber(vehicleDetail.getVehicleNumber());
				isVehicleExists.setVehicleName(vehicleDetail.getVehicleName());
				isVehicleExists.setTareWeight(vehicleDetail.getTareWeight());
				isVehicleExists.setUpdatedDate(new Date());
				VehicleDetailsEntity savedEntity = vehicleDetailsRepository.save(isVehicleExists);
				if (savedEntity != null) {
					return new JsonResponse(Boolean.TRUE,"Vehicle updated Successfully!!!");
				}
			}

		} catch (Exception e) {
			throw e;
		}
		return null;

	}

	@Override
	public JsonResponse  get(String vehicleNumber) {
		List<VehicleDetailsEntity> vehicleDetailsEntities = null;
		if (vehicleNumber.equalsIgnoreCase("ALL")) {
		vehicleDetailsEntities = (List<VehicleDetailsEntity>) vehicleDetailsRepository.findAll();
		}else {
			vehicleDetailsEntities = vehicleDetailsRepository.getVehicles(vehicleNumber);
		}
		List<VehicleDetails> vehicleDetails = null;
		if(!vehicleDetailsEntities.isEmpty()) {
			vehicleDetails = new ArrayList<>();
			for(VehicleDetailsEntity vehicleDetailsEntity : vehicleDetailsEntities) {
				VehicleDetails vehicleDetail = new VehicleDetails();
				vehicleDetail = vehicleServiceMapper.mapVehicleDetailsEntityToVehicleDetails(vehicleDetailsEntity);
				vehicleDetails.add(vehicleDetail);
			}
			return new JsonResponse(vehicleDetailsEntities,"Data Retrived Succesfully!!!",Boolean.TRUE);
		}else {
			return new JsonResponse(vehicleDetailsEntities,"No Data Available!!!",Boolean.TRUE);
		}
	}

	@Override
	public JsonResponse delete(BigInteger vehicleId) {
		try {
			vehicleDetailsRepository.delete(vehicleId);
			return new JsonResponse(Boolean.TRUE,"Vehicle Deleted Successfully!!!");
		
		} catch (Exception e) {
			throw e;
		}
	}


}
