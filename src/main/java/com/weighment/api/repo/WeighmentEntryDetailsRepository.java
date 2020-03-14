package com.weighment.api.repo;


import java.math.BigInteger;

import org.springframework.data.repository.CrudRepository;

import com.weighment.api.entity.WeighmentEntryDetailsEntity;


public interface WeighmentEntryDetailsRepository extends CrudRepository<WeighmentEntryDetailsEntity, BigInteger> {


}