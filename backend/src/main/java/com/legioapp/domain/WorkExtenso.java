package com.legioapp.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tb_workExtenso")
public class WorkExtenso {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@JsonIgnore
	@ManyToMany
	@JoinTable(name = "LEGIONARIO_TRABALHO",
		joinColumns = @JoinColumn(name = "workExtenso_id"),
		inverseJoinColumns = @JoinColumn(name = "legiosExtenso_id")
	)
	private List<LegioExtenso> legio = new ArrayList<>();
	
	private String work;
	private String person;
	private String quantContact;
	private String hours;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="ataExtenso_id")
	private AtaExtenso ataExtenso;
	
	public WorkExtenso() {
	}

	public WorkExtenso(Integer id, List<LegioExtenso> legio, String work, String person, String quantContact, String hours,
			AtaExtenso ataExtenso) {
		this.id = id;
		this.legio = legio;
		this.work = work;
		this.person = person;
		this.quantContact = quantContact;
		this.hours = hours;
		this.ataExtenso = ataExtenso;
	}

	public AtaExtenso getAtaExtenso() {
		return ataExtenso;
	}

	public void setAtaExtenso(AtaExtenso ataExtenso) {
		this.ataExtenso = ataExtenso;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public List<LegioExtenso> getLegio() {
		return legio;
	}

	public void setLegio(List<LegioExtenso> legio) {
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
