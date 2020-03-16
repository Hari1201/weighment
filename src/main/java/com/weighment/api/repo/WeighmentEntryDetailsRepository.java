package com.weighment.api.repo;


import java.math.BigInteger;

import org.springframework.data.jpa.repository.JpaRepository;

import com.weighment.api.entity.WeighmentEntryDetailsEntity;


public interface WeighmentEntryDetailsRepository extends JpaRepository<WeighmentEntryDetailsEntity, BigInteger> {


}