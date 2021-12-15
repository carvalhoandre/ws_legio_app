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
@Table(name = "tb_recruitmentExtenso")
public class RecruitmentExtenso {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String quantidade;
	
	private String person;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="ataExtenso_id")
	private AtaExtenso ataExtenso;

	public RecruitmentExtenso() {
	}

	public RecruitmentExtenso(Integer id, String quantidade, String person, AtaExtenso ataExtenso) {
		this.id = id;
		this.quantidade = quantidade;
		this.person = person;
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

	public String getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(String quantidade) {
		this.quantidade = quantidade;
	}

	public String getPerson() {
		return person;
	}

	public void setPerson(String person) {
		this.person = person;
	}
}
