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
@Table(name = "tb_event_extenso")
public class EventExtenso {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String name;
	
	private Integer guests;
	
	private Integer ativos;
	
	private Integer auxiliares;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="ataExtenso_id")
	private AtaExtenso ataExtenso;
	
	public EventExtenso() {
	}

	public EventExtenso(Integer id, String name, Integer guests, Integer ativos, Integer auxiliares,
			AtaExtenso ataExtenso) {
		this.id = id;
		this.name = name;
		this.guests = guests;
		this.ativos = ativos;
		this.auxiliares = auxiliares;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getGuests() {
		return guests;
	}

	public void setGuests(Integer guests) {
		this.guests = guests;
	}

	public Integer getAtivos() {
		return ativos;
	}

	public void setAtivos(Integer ativos) {
		this.ativos = ativos;
	}

	public Integer getAuxiliares() {
		return auxiliares;
	}

	public void setAuxiliares(Integer auxiliares) {
		this.auxiliares = auxiliares;
	}
}
