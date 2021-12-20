package com.legioapp.dto;

import com.legioapp.domain.Legio;

public class LegioDTO {
	
	private Integer id;
	
	private String name;
	
	public LegioDTO() {}
	
	public LegioDTO(Legio obj) {
		id = obj.getId();
		name = obj.getName();
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
}
