
package com.weighment.api.model;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class VehicleDetails {
	
	private BigInteger vehicleId;
	private String vehicleNumber;

	public BigInteger getVehicleId() {
		return vehicleId;
	}


	public void setVehicleId(BigInteger vehicleId) {
		this.vehicleId = vehicleId;
	}

	private String vehicleName;
	
    private BigDecimal tareWeight;

	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date createdDate;
	
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date updatedDate;

	public VehicleDetails() {
		super();
	}


	public BigDecimal getTareWeight() {
		return tareWeight;
	}

	public void setTareWeight(BigDecimal tareWeight) {
		this.tareWeight = tareWeight;
	}


	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}

	public String getVehicleNumber() {
		return this.vehicleNumber;
	}

	public void setVehicleName(String vehicleName) {
		this.vehicleName = vehicleName;
	}

	public String getVehicleName() {
		return this.vehicleName;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getCreatedDate() {
		return this.createdDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

	public Date getUpdatedDate() {
		return this.updatedDate;
	}

	public String toString() {
		StringBuffer sb = new StringBuffer();
		sb.append("[");
		sb.append(vehicleId);
		sb.append("]:");
		sb.append(vehicleNumber);
		sb.append("|");
		sb.append(vehicleName);
		sb.append("|");
		sb.append(createdDate);
		sb.append("|");
		sb.append(updatedDate);
		return sb.toString();
	}

}