package com.legioapp.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.legioapp.domain.enums.PersonType;

@Entity
@Table(name = "tb_recruitment")
public class Recruitment implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private Integer quantidade;
	
	private Integer person;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="ata_id")
	private Ata ata;

	public Recruitment() {
	}

	public Recruitment(Integer id, Integer quantidade, PersonType person, Ata ata) {
		this.id = id;
		this.quantidade = quantidade;
		this.person = (person == null) ? null: person.getCod();
		this.ata = ata;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public PersonType getPerson() {
		return PersonType.toEnum(person);
	}

	public void setPerson(PersonType person) {
		this.person = person.getCod();
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
		Recruitment other = (Recruitment) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
