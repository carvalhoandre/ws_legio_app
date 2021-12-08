package com.legioapp.dto;

import java.io.Serializable;
import java.util.Date;

import com.legioapp.domain.Legio;
import com.legioapp.domain.enums.ChargeType;

public class LegioDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	
	private String name;
	
	private ChargeType charge;
	
	private Date birthday;

	public LegioDTO() {
	}

	public LegioDTO(Integer id, String name, ChargeType charge, Date birthday) {
		this.id = id;
		this.name = name;
		this.charge = charge;
		this.birthday = birthday;
	}

	public LegioDTO(Legio obj) {
		this.id = obj.getId();
		this.name = obj.getName();
		this.charge = obj.getCharge();
		this.birthday = obj.getBirthday();
	}


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public ChargeType getCharge() {
		return charge;
	}

	public void setCharge(ChargeType charge) {
		this.charge = charge;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
}
