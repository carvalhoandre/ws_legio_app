package com.legioapp.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_event")
public class Event implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String date;
	
	@Column(name="titulo")
	private String name;
	
	@Column(name="data_evento")
	private String dateEvent;
	
	@Column(name="quantidade_convidados")
	private Integer guests;
	
	@Column(name="quantidade_ativos")
	private Integer ativos;
	
	@Column(name="quantidade_auxilixares")
	private Integer auxiliares;


	public Event() {
	}

	public Event(Integer id, String dateEvent, String date, String name, Integer guests, Integer ativos, Integer auxiliares) {
		this.id = id;
		this.name = name;
		this.guests = guests;
		this.ativos = ativos;
		this.auxiliares = auxiliares;
		this.date = date;
		this.dateEvent = dateEvent;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
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

	public String getDateEvent() {
		return dateEvent;
	}

	public void setDateEvent(String dateEvent) {
		this.dateEvent = dateEvent;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Event other = (Event) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
