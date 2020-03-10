
package com.weighment.api.repo;


import java.math.BigInteger;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.weighment.api.entity.CustomerDetails;

public interface CustomerDetailsRepository extends CrudRepository<CustomerDetails, BigInteger> {

	CustomerDetails findByCustomerName(String custName);
	
	CustomerDetails findByCustomerId(BigInteger custId);
	
	@Query("select c from CustomerDetails c where c.customerName like %:custName%")
	List<CustomerDetails> getCustomers(@Param("custName")String custName);
	
	
}