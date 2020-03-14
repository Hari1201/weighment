package com.weighment.api.model;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;


public class CustomerDetails{

	private BigInteger customerId;
	private String customerName;

	private String customerPhone;
	
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date createdDate;
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date updatedDate;

	public CustomerDetails() {
		super();
	}

	public void setCustomerId(BigInteger customerId) {
		this.customerId = customerId;
	}

	public BigInteger getCustomerId() {
		return this.customerId;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerName() {
		return this.customerName;
	}

	public void setCustomerPhone(String customerPhone) {
		this.customerPhone = customerPhone;
	}

	public String getCustomerPhone() {
		return this.customerPhone;
	}


	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
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
		sb.append(customerId);
		sb.append("]:");
		sb.append(customerName);
		sb.append("|");
		sb.append(customerPhone);
		sb.append("|");
		sb.append(createdDate);
		sb.append("|");
		sb.append(updatedDate);
		return sb.toString();
	}

}