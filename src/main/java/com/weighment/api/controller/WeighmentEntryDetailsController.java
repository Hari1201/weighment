package com.weighment.api.controller;

import java.math.BigDecimal;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.weighment.api.model.JsonResponse;
import com.weighment.api.model.WeighmentEntryDetails;
import com.weighment.api.service.WeighmentEntryService;

@RestController
@RequestMapping("/api/weighmententry")
public class WeighmentEntryDetailsController {

	@Autowired
	private WeighmentEntryService weighmentEntryService;

	@PostMapping
	public JsonResponse weighmentEntry(@RequestBody WeighmentEntryDetails weighmentEntryDetails) {
		try {
			if(weighmentEntryDetails.getGrossWeight()==null || weighmentEntryDetails.getGrossWeight().compareTo(BigDecimal.ZERO) <= 0) {
				return new JsonResponse(Boolean.FALSE,"Please enter valid gross weight!!!");
			}
			if(weighmentEntryDetails.getRate()==null || weighmentEntryDetails.getRate().compareTo(BigDecimal.ZERO) <= 0) {
				return new JsonResponse(Boolean.FALSE,"Please enter valid rate!!!");
			} 
			if(weighmentEntryDetails.getPayMode()==null) {
				return new JsonResponse(Boolean.FALSE,"Please enter payment mode!!!");
			}
			if(weighmentEntryDetails.getGrossDate()==null || weighmentEntryDetails.getGrossDate().after(new Date())) {
				return new JsonResponse(Boolean.FALSE,"Please enter valid gross weight date!!!");
			}
			
			return weighmentEntryService.save(weighmentEntryDetails);
		}catch (Exception e) {
			return new JsonResponse(Boolean.FALSE,e.getMessage());
		}
	}

	
}