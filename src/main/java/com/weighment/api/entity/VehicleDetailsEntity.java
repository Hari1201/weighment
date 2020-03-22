
package com.weighment.api.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;
import java.util.List;

import javax.persistence.*;
@Entity
@Table(name="vehicle_details", catalog="weighment_db" )

public class VehicleDetailsEntity implements Serializable
{
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name="vehicle_id", nullable=false)
    private BigInteger       vehicleId    ;
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
    
/*    @OneToMany(fetch = FetchType.LAZY,mappedBy="vehicleDetails", targetEntity=WeighmentEntryDetailsEntity.class)
    private List<WeighmentEntryDetailsEntity> listOfWeighmentEntryDetailsvehicle;

    public List<WeighmentEntryDetailsEntity> getListOfWeighmentEntryDetailsvehicle() {
		return listOfWeighmentEntryDetailsvehicle;
	}
	public void setListOfWeighmentEntryDetailsvehicle(
			List<WeighmentEntryDetailsEntity> listOfWeighmentEntryDetailsvehicle) {
		this.listOfWeighmentEntryDetailsvehicle = listOfWeighmentEntryDetailsvehicle;
	}*/
	public VehicleDetailsEntity()
    {
		super();
    }

	public BigInteger getVehicleId() {
		return vehicleId;
	}

	public void setVehicleId(BigInteger vehicleId) {
		this.vehicleId = vehicleId;
	}

	public BigDecimal getTareWeight() {
		return tareWeight;
	}

	public void setTareWeight(BigDecimal tareWeight) {
		this.tareWeight = tareWeight;
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