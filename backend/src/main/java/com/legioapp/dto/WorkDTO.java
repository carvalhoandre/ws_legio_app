package com.legioapp.dto;

public class WorkDTO {
	
	private Integer workTot;
	
	private Integer yong;
	
	private Integer adult;
	
	private Integer children;
	
	private Integer elderly;

	private Integer total;
	
	private Integer hours;
	
	public WorkDTO() {}

	public WorkDTO(Integer workTot, Integer yong, Integer adult, Integer children, Integer elderly, Integer total,
			Integer hours) {
		this.workTot = workTot;
		this.yong = yong;
		this.adult = adult;
		this.children = children;
		this.elderly = elderly;
		this.total = total;
		this.hours = hours;
	}

	public Integer getWorkTot() {
		return workTot;
	}

	public void setWorkTot(Integer workTot) {
		this.workTot = workTot;
	}

	public Integer getYong() {
		return yong;
	}

	public void setYong(Integer yong) {
		this.yong = yong;
	}

	public Integer getAdult() {
		return adult;
	}

	public void setAdult(Integer adult) {
		this.adult = adult;
	}

	public Integer getChildren() {
		return children;
	}

	public void setChildren(Integer children) {
		this.children = children;
	}

	public Integer getElderly() {
		return elderly;
	}

	public void setElderly(Integer elderly) {
		this.elderly = elderly;
	}

	public Integer getTotal() {
		return total;
	}

	public void setTotal(Integer total) {
		this.total = total;
	}

	public Integer getHours() {
		return hours;
	}

	public void setHours(Integer hours) {
		this.hours = hours;
	}
}
