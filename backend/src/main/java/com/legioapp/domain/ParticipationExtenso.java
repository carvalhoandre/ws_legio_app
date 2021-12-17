package com.legioapp.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tb_participation_extenso")
public class ParticipationExtenso {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String name;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="ataExtenso_id")
	private AtaExtenso ataExtenso;
	
	public ParticipationExtenso() {
	}

	public ParticipationExtenso(Integer id, String name, AtaExtenso ataExtenso, EventExtenso eventExtenso) {
		this.id = id;
		this.name = name;
		this.ataExtenso = ataExtenso;
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

	public AtaExtenso getAtaExtenso() {
		return ataExtenso;
	}

	public void setAtaExtenso(AtaExtenso ataExtenso) {
		this.ataExtenso = ataExtenso;
	}
}
