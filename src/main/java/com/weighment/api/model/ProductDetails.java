package com.weighment.api.model;

import java.math.BigInteger;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class ProductDetails {

	private BigInteger productId;
	private String productName;

	private String productRate;

	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date createdDate;

	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date updatedDate;

	public ProductDetails() {
		super();
	}

	public void setProductId(BigInteger productId) {
		this.productId = productId;
	}

	public BigInteger getProductId() {
		return this.productId;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductName() {
		return this.productName;
	}

	public void setProductRate(String productRate) {
		this.productRate = productRate;
	}

	public String getProductRate() {
		return this.productRate;
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
		sb.append(productId);
		sb.append("]:");
		sb.append(productName);
		sb.append("|");
		sb.append(productRate);
		sb.append("|");
		sb.append(createdDate);
		sb.append("|");
		sb.append(updatedDate);
		return sb.toString();
	}

}