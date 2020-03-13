
package com.weighment.api.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.*;
@Entity
@Table(name="vehicle_details", catalog="weighment_db" )
@NamedQueries ( {
  @NamedQuery ( name="VehicleDetails.countAll", query="SELECT COUNT(x) FROM VehicleDetails x" )
} )
public class VehicleDetails implements Serializable
{
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name="vechile_id", nullable=false)
    private Long       vechileId    ;
    @Column(name="vehicle_number", nullable=false, length=50)
    private String     vehicleNumber ;

    @Column(name="vehicle_name", length=50)
    private String     vehicleName  ;
    
    @Column(name="tare_weight", length=50)
    private BigDecimal    tareWeight  ;

	@Temporal(TemporalType.TIMESTAMP)
    @Column(name="created_date", nullable=false)
    private Date       createdDate  ;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="updated_date")
    private Date       updatedDate  ;
    public VehicleDetails()
    {
		super();
    }
        public void setVechileId( Long vechileId )
    {
        this.vechileId = vechileId ;
    }

	public BigDecimal getTareWeight() {
		return tareWeight;
	}

	public void setTareWeight(BigDecimal tareWeight) {
		this.tareWeight = tareWeight;
	}
	public Long getVechileId()
    {
        return this.vechileId;
    }
    public void setVehicleNumber( String vehicleNumber )
    {
        this.vehicleNumber = vehicleNumber;
    }
    public String getVehicleNumber()
    {
        return this.vehicleNumber;
    }

    public void setVehicleName( String vehicleName )
    {
        this.vehicleName = vehicleName;
    }
    public String getVehicleName()
    {
        return this.vehicleName;
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