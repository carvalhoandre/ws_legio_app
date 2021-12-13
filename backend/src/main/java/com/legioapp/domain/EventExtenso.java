package com.legioapp.domain;

public class EventExtenso {
	
private Integer id;
	
	private String name;
	
	private Integer guests;
	
	private Integer ativos;
	
	private Integer auxiliares;
	
	public EventExtenso() {
	}

	public EventExtenso(Integer id, String name, Integer guests, Integer ativos, Integer auxiliares) {
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
}
