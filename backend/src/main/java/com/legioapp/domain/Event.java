package com.legioapp.domain;

import java.io.Serializable;

import javax.persistence.CollectionTable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_event")
public class Event implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@CollectionTable(name="titulo")
	private String name;
	
	@CollectionTable(name="quantidade_convidados")
	private Integer guests;
	
	@CollectionTable(name="quantidade_ativos")
	private Integer ativos;
	
	@CollectionTable(name="quantidade_auxilixares")
	private Integer auxiliares;
	
	@ManyToOne
	@JoinColumn(name="ata")
	private Ata ata;

	public Event() {
	}

	public Event(Integer id, String name, Integer guests, Integer ativos, Integer auxiliares) {
		super();
		this.id = id;
		this.name = name;
		this.guests = guests;
		this.ativos = ativos;
		this.auxiliares = auxiliares;
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

	public Ata getAta() {
		return ata;
	}

	public void setAta(Ata ata) {
		this.ata = ata;
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
