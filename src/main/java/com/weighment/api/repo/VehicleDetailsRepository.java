
package com.weighment.api.repo;


import java.math.BigInteger;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.weighment.api.entity.VehicleDetailsEntity;

public interface VehicleDetailsRepository extends CrudRepository<VehicleDetailsEntity, BigInteger> {


	VehicleDetailsEntity findByVehicleNumber(String vehicleNumber);
	
	VehicleDetailsEntity findByvehicleId(BigInteger VehicleId);
	
	@Query("select v from VehicleDetailsEntity v where v.vehicleNumber like %:vehicleName%")
	List<VehicleDetailsEntity> getVehicles(@Param("vehicleName")String vehicleName);
	
	


}