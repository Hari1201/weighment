package com.weighment.api.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name="weighment_entry_details", catalog="weighment_db" )
@NamedQueries ( {
  @NamedQuery ( name="WeighmentEntryDetailsEntity.countAll", query="SELECT COUNT(x) FROM WeighmentEntryDetailsEntity x" )
} )
public class WeighmentEntryDetailsEntity implements Serializable
{
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="wei_id", nullable=false)
    private BigInteger       weiId        ;

    @Column(name="gross_weight", nullable=false)
    private BigDecimal grossWeight  ;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="gross_date", nullable=false)
    private Date       grossDate    ;

    @Column(name="net_weight", nullable=false)
    private BigDecimal netWeight    ;

    @Column(name="rate", nullable=false)
    private BigDecimal rate         ;

    @Column(name="amount", nullable=false)
    private BigDecimal amount       ;

    @Column(name="pay_mode", nullable=false, length=10)
    private String     payMode      ;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="created_date", nullable=false)
    private Date       createdDate  ;

    @ManyToOne
    @JoinColumn(name="product_id", referencedColumnName="product_id")
    private ProductDetailsEntity productDetails;

    @ManyToOne
    @JoinColumn(name="vehicle_id", referencedColumnName="vechile_id")
    private VehicleDetailsEntity vehicleDetails;

    @ManyToOne
    @JoinColumn(name="customer_id", referencedColumnName="customer_id")
    private CustomerDetailsEntity customerDetails;

    public WeighmentEntryDetailsEntity()
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

    public void setProductDetails( ProductDetailsEntity productDetails )
    {
        this.productDetails = productDetails;
    }
    public ProductDetailsEntity getProductDetails()
    {
        return this.productDetails;
    }

    public void setVehicleDetails( VehicleDetailsEntity vehicleDetails )
    {
        this.vehicleDetails = vehicleDetails;
    }
    public VehicleDetailsEntity getVehicleDetails()
    {
        return this.vehicleDetails;
    }

    public void setCustomerDetails( CustomerDetailsEntity customerDetails )
    {
        this.customerDetails = customerDetails;
    }
    public CustomerDetailsEntity getCustomerDetails()
    {
        return this.customerDetails;
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