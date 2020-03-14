
package com.weighment.api.repo;


import java.math.BigInteger;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.weighment.api.entity.CustomerDetailsEntity;

public interface CustomerDetailsRepository extends CrudRepository<CustomerDetailsEntity, BigInteger> {

	CustomerDetailsEntity findByCustomerName(String custName);
	
	CustomerDetailsEntity findByCustomerId(BigInteger custId);
	
	@Query("select c from CustomerDetailsEntity c where c.customerName like %:custName%")
	List<CustomerDetailsEntity> getCustomers(@Param("custName")String custName);
	
	
}