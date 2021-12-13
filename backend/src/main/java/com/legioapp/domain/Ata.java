package com.legioapp.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Ata implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@OneToMany(mappedBy="ata")
	private List<Legio> legionarios = new ArrayList<>();
	
	@OneToMany(mappedBy="ata")
	private List<Event> eventos = new ArrayList<>();
	
	@OneToMany(mappedBy="ata")
	private List<Work> trabalhos = new ArrayList<>();
	
	@OneToMany(mappedBy="ata")
	private List<Recruitment> recrutamentos = new ArrayList<>();
	
	@OneToMany(mappedBy="ata")
	private List<Event> event = new ArrayList<>();
	
	private Treasury tesouraria;
	
	public Ata() {
	}

	public Ata(Integer id) {
		this.id = id;
	}

	public Ata(Integer id, List<Legio> legionarios, List<Event> eventos, List<Work> trabalhos,
			List<Recruitment> recrutamentos, List<Event> event, Treasury tesouraria) {
		this.id = id;
		this.legionarios = legionarios;
		this.eventos = eventos;
		this.trabalhos = trabalhos;
		this.recrutamentos = recrutamentos;
		this.event = event;
		this.tesouraria = tesouraria;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public List<Legio> getLegionarios() {
		return legionarios;
	}

	public void setLegionarios(List<Legio> legionarios) {
		this.legionarios = legionarios;
	}

	public List<Event> getEventos() {
		return eventos;
	}

	public void setEventos(List<Event> eventos) {
		this.eventos = eventos;
	}

	public List<Work> getTrabalhos() {
		return trabalhos;
	}

	public void setTrabalhos(List<Work> trabalhos) {
		this.trabalhos = trabalhos;
	}

	public List<Recruitment> getRecrutamentos() {
		return recrutamentos;
	}

	public void setRecrutamentos(List<Recruitment> recrutamentos) {
		this.recrutamentos = recrutamentos;
	}

	public List<Event> getEvent() {
		return event;
	}

	public void setEvent(List<Event> event) {
		this.event = event;
	}

	public Treasury getTesouraria() {
		return tesouraria;
	}

	public void setTesouraria(Treasury tesouraria) {
		this.tesouraria = tesouraria;
	}
}
