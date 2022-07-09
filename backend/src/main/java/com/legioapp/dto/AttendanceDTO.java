package com.legioapp.dto;

public class AttendanceDTO {
	
	private Integer id;
	
	private String name;
	
	private Integer attendance;
	
	public AttendanceDTO() {}
	
	public AttendanceDTO(Integer id, String name, Integer attendance) {
		this.id = id;
		this.name = name;
		this.attendance = attendance;
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

	public Integer getAttendance() {
		return attendance;
	}

	public void setAttendance(Integer attendance) {
		this.attendance = attendance;
	}
}
