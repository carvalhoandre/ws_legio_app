package com.legioapp.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CollectionTable;
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
import com.legioapp.domain.enums.PersonType;
import com.legioapp.domain.enums.WorkType;

@Entity
@Table(name = "tb_work")
public class Work implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@JsonIgnore
	@ManyToMany
	@JoinTable(name = "LEGIONARIO_TRABALHO",
		joinColumns = @JoinColumn(name = "work_id"),
		inverseJoinColumns = @JoinColumn(name = "legios_id")
	)
	private List<Legio> legio = new ArrayList<>();
	
	@CollectionTable(name="TRABALHO")
	private Integer work;
	
	@CollectionTable(name="CONTATO")
	private Integer person;
	
	@CollectionTable(name="QUANT_CONTATO")
	private Integer quantContact;
	
	@CollectionTable(name="DURACAO")
	private Float hours;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="ata_id")
	private Ata ata;

	public Work() {
	}

	public Work(Integer id, Legio legio, WorkType work, PersonType person, Integer quantContact, Float hours, Ata ata) {
		this.id = id;
		this.work = (work==null) ? null : work.getCod();
		this.person = (person==null) ? null : person.getCod();
		this.quantContact = quantContact;
		this.hours = hours;
		this.ata = ata;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public List<Legio> getLegios() {
		return legio;
	}

	public void setLegios(List<Legio> legio) {
		this.legio = legio;
	}

	public WorkType getWork() {
		return WorkType.toEnum(work);
	}

	public void setWork(WorkType work) {
		this.work = work.getCod();
	}

	public PersonType getPerson() {
		return PersonType.toEnum(person);
	}

	public void setPerson(PersonType person) {
		this.person = person.getCod();
	}

	public Integer getQuantContact() {
		return quantContact;
	}

	public void setQuantContact(Integer quantContact) {
		this.quantContact = quantContact;
	}

	public Float getHours() {
		return hours;
	}

	public void setHours(Float hours) {
		this.hours = hours;
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
		Work other = (Work) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
