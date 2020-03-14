package com.weighment.api.model;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;
public class WeighmentEntryDetails {

    private BigInteger       weiId        ;

    private BigDecimal grossWeight  ;

    private Date       grossDate    ;

    private BigDecimal netWeight    ;

    private BigDecimal rate         ;

    private BigDecimal amount       ;

    private String     payMode      ;

    private Date       createdDate  ;

    private BigInteger productId;

    private BigInteger vehicleId;

    private BigInteger customerId;

    public WeighmentEntryDetails()
    {
		super();
    }
   
    public void setWeiId( BigInteger weiId )
    {
        this.weiId = weiId ;
    }
    public BigInteger getWeiId()
    {
        return this.weiId;
    }

    public void setGrossWeight( BigDecimal grossWeight )
    {
        this.grossWeight = grossWeight;
    }
    public BigDecimal getGrossWeight()
    {
        return this.grossWeight;
    }

    public void setGrossDate( Date grossDate )
    {
        this.grossDate = grossDate;
    }
    public Date getGrossDate()
    {
        return this.grossDate;
    }

    public void setNetWeight( BigDecimal netWeight )
    {
        this.netWeight = netWeight;
    }
    public BigDecimal getNetWeight()
    {
        return this.netWeight;
    }

    public void setRate( BigDecimal rate )
    {
        this.rate = rate;
    }
    public BigDecimal getRate()
    {
        return this.rate;
    }

    public void setAmount( BigDecimal amount )
    {
        this.amount = amount;
    }
    public BigDecimal getAmount()
    {
        return this.amount;
    }

    public void setPayMode( String payMode )
    {
        this.payMode = payMode;
    }
    public String getPayMode()
    {
        return this.payMode;
    }

    public void setCreatedDate( Date createdDate )
    {
        this.createdDate = createdDate;
    }
    public Date getCreatedDate()
    {
        return this.createdDate;
    }


    public BigInteger getProductId() {
		return productId;
	}

	public void setProductId(BigInteger productId) {
		this.productId = productId;
	}

	public BigInteger getVehicleId() {
		return vehicleId;
	}

	public void setVehicleId(BigInteger vehicleId) {
		this.vehicleId = vehicleId;
	}

	public BigInteger getCustomerId() {
		return customerId;
	}

	public void setCustomerId(BigInteger customerId) {
		this.customerId = customerId;
	}

	public String toString() { 
        StringBuffer sb = new StringBuffer(); 
        sb.append("["); 
        sb.append(weiId);
        sb.append("]:"); 
        sb.append(grossWeight);
        sb.append("|");
        sb.append(grossDate);
        sb.append("|");
        sb.append(netWeight);
        sb.append("|");
        sb.append(rate);
        sb.append("|");
        sb.append(amount);
        sb.append("|");
        sb.append(payMode);
        sb.append("|");
        sb.append(createdDate);
        return sb.toString(); 
    } 

}