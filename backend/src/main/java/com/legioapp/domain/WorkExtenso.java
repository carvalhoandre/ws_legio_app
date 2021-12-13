package com.legioapp.domain;

import java.util.ArrayList;
import java.util.List;

public class WorkExtenso {
	
	private List<String> legio = new ArrayList<>();
	private String work;
	private String person;
	private String quantContact;
	private String hours;

	public WorkExtenso() {
	}

	public List<String> getLegio() {
		return legio;
	}

	public void setLegio(List<String> legio) {
		this.legio = legio;
	}

	public String getWork() {
		return work;
	}

	public void setWork(String work) {
		this.work = work;
	}

	public String getPerson() {
		return person;
	}

	public void setPerson(String person) {
		this.person = person;
	}

	public String getQuantContact() {
		return quantContact;
	}

	public void setQuantContact(String quantContact) {
		this.quantContact = quantContact;
	}

	public String getHours() {
		return hours;
	}

	public void setHours(String hours) {
		this.hours = hours;
	}
}
