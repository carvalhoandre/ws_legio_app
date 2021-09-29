package com.legioapp.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Ata implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private List<Legio> legionarios = new ArrayList<>();
	private List<Event> eventos = new ArrayList<>();
	private List<Work> trabalhos = new ArrayList<>();
	private List<Recruitment> recrutamentos = new ArrayList<>();
	private Treasury tesouraria;
	
	public Ata() {
	}

	public Ata(Integer id, Integer number, List<Legio> legionarios, List<Event> eventos, List<Work> trabalhos,
			List<Recruitment> recrutamentos, Treasury tesouraria) {
		this.id = id;
		this.legionarios = legionarios;
		this.eventos = eventos;
		this.trabalhos = trabalhos;
		this.recrutamentos = recrutamentos;
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

	public Treasury getTesouraria() {
		return tesouraria;
	}

	public void setTesouraria(Treasury tesouraria) {
		this.tesouraria = tesouraria;
	}

	public Ata(Integer id) {
		super();
		this.id = id;
	}
}
