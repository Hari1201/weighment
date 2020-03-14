package com.weighment.api.entity;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
@Entity
@Table(name="customer_details", catalog="weighment_db" )
@NamedQueries ( {
  @NamedQuery ( name="CustomerDetailsEntity.countAll", query="SELECT COUNT(x) FROM CustomerDetailsEntity x" )
} )
public class CustomerDetailsEntity implements Serializable
{
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="customer_id", nullable=false)
    private BigInteger       customerId   ;
    
    @Column(name="customer_name", nullable=false, length=100)
    private String     customerName ;

    @Column(name="customer_phone", length=10)
    private String     customerPhone ;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="created_date", nullable=false)
    private Date       createdDate   ;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="updated_date")
    private Date       updatedDate  ;
    
    @OneToMany(mappedBy="customerDetails", targetEntity=WeighmentEntryDetailsEntity.class)
    private List<WeighmentEntryDetailsEntity> listOfWeighmentEntryDetails;

    public CustomerDetailsEntity()
    {
		super();
    }
      public void setCustomerId( BigInteger customerId )
    {
        this.customerId = customerId ;
    }
    public BigInteger getCustomerId()
    {
        return this.customerId;
    }
    public void setCustomerName( String customerName )
    {
        this.customerName = customerName;
    }
    public String getCustomerName()
    {
        return this.customerName;
    }
    public void setCustomerPhone( String customerPhone )
    {
        this.customerPhone = customerPhone;
    }
    public String getCustomerPhone()
    {
        return this.customerPhone;
    }



    public Date getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	public void setUpdatedDate( Date updatedDate )
    {
        this.updatedDate = updatedDate;
    }
    public Date getUpdatedDate()
    {
        return this.updatedDate;
    }
    
    public void setListOfWeighmentEntryDetails( List<WeighmentEntryDetailsEntity> listOfWeighmentEntryDetails )
    {
        this.listOfWeighmentEntryDetails = listOfWeighmentEntryDetails;
    }
    public List<WeighmentEntryDetailsEntity> getListOfWeighmentEntryDetails()
    {
        return this.listOfWeighmentEntryDetails;
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