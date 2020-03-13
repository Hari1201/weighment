
package com.weighment.api.model;

import java.math.BigDecimal;
import java.util.Date;

public class VehicleDetails {
	private Long vechileId;
	private String vehicleNumber;

	private String vehicleName;
	
    private BigDecimal    tareWeight  ;

	public BigDecimal getTareWeight() {
		return tareWeight;
	}

	public void setTareWeight(BigDecimal tareWeight) {
		this.tareWeight = tareWeight;
	}

	private Date createdDate;

	private Date updatedDate;

	public VehicleDetails() {
		super();
	}

	public void setVechileId(Long vechileId) {
		this.vechileId = vechileId;
	}

	public Long getVechileId() {
		return this.vechileId;
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
		sb.append(vechileId);
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