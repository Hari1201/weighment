package com.weighment.api.entity;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.Date;

import javax.persistence.*;
@Entity
@Table(name="product_details", catalog="weighment_db" )
@NamedQueries ( {
  @NamedQuery ( name="ProductDetailsEntity.countAll", query="SELECT COUNT(x) FROM ProductDetailsEntity x" )
} )
public class ProductDetailsEntity implements Serializable
{
    private static final long serialVersionUID = 1L;

      @Id
      @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="product_id", nullable=false)
    private BigInteger       productId    ;
    @Column(name="product_name", nullable=false, length=50)
    private String     productName  ;

    @Column(name="product_rate", length=50)
    private String     productRate  ;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="created_date", nullable=false)
    private Date       createdDate  ;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="updated_date")
    private Date       updatedDate  ;
    public ProductDetailsEntity()
    {
		super();
    }
        public void setProductId( BigInteger productId )
    {
        this.productId = productId ;
    }
    public BigInteger getProductId()
    {
        return this.productId;
    }
    public void setProductName( String productName )
    {
        this.productName = productName;
    }
    public String getProductName()
    {
        return this.productName;
    }

    public void setProductRate( String productRate )
    {
        this.productRate = productRate;
    }
    public String getProductRate()
    {
        return this.productRate;
    }

    public void setCreatedDate( Date createdDate )
    {
        this.createdDate = createdDate;
    }
    public Date getCreatedDate()
    {
        return this.createdDate;
    }

    public void setUpdatedDate( Date updatedDate )
    {
        this.updatedDate = updatedDate;
    }
    public Date getUpdatedDate()
    {
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