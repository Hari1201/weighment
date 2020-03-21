package com.weighment.api.controller;

import java.math.BigInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.weighment.api.model.JsonResponse;
import com.weighment.api.model.VehicleDetails;
import com.weighment.api.service.VehicleService;

@RestController
@RequestMapping("/api/vehicle")
public class VehicleController {

	@Autowired
	VehicleService vehicleService;

	@SuppressWarnings("rawtypes")
	@PostMapping
	public JsonResponse save(@RequestBody VehicleDetails vehicleDetails) {
		try {
		return vehicleService.save(vehicleDetails);
		}catch (Exception e) {
			return new JsonResponse(e.getMessage(),"Vehicle Not Saved!!!",Boolean.FALSE);
		}
	}
	
	@GetMapping("/{id}")
	public JsonResponse getVehicle(@PathVariable(value = "id") String vehicleNumber) {
		try {
		return vehicleService.get(vehicleNumber);
		}catch (Exception e) {
			return new JsonResponse(e.getMessage(),"Exception in Vehicle Retrive !!!",Boolean.FALSE);
		}
	}
	
	@DeleteMapping("/{id}")
	public JsonResponse delete(@PathVariable(value = "id") BigInteger vehicleId) {
		try {
		return vehicleService.delete(vehicleId);
		}catch (Exception e) {
			return new JsonResponse(e.getMessage(),"Exception in delete vehicle!!!",Boolean.FALSE);
		}
	}

}
