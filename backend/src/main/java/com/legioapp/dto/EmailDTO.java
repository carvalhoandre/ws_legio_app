package com.legioapp.dto;

public class EmailDTO {
	
	private String email;
	
	public EmailDTO(String email) {
		super();
		this.email = email;
	}

	public EmailDTO() {}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
