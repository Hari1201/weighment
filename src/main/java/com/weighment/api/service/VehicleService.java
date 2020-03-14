package com.weighment.api.service;

import java.math.BigInteger;

import com.weighment.api.model.JsonResponse;
import com.weighment.api.model.VehicleDetails;

public interface VehicleService {

	public JsonResponse save(VehicleDetails vehicleDetails);
	public JsonResponse get(String vehicleNumber);
	public JsonResponse delete(BigInteger vehicleId);
	
}
