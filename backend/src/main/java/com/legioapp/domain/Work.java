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
	@JoinTable(name = "legionario_trabalho",
		joinColumns = @JoinColumn(name = "work_id"),
		inverseJoinColumns = @JoinColumn(name = "legios_id")
	)
	private List<Legio> legio = new ArrayList<>();
	
	@CollectionTable(name="trabalho")
	private Integer work;
	
	@CollectionTable(name="contato_jovem")
	private Integer yong;
	
	@CollectionTable(name="contato_adult")
	private Integer adult;
	
	@CollectionTable(name="contato_children")
	private Integer children;
	
	@CollectionTable(name="contato_elderly")
	private Integer elderly;
	
	@CollectionTable(name="total")
	private Integer total;
	
	@CollectionTable(name="duracao")
	private Float hours;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="ata_id")
	private Ata ata;

	public Work() {
	}
	
	public Work(Integer id, List<Legio> legio, WorkType work, Integer yong, Integer adult, Integer person,
			Integer children, Integer elderly, Integer total, Float hours, Ata ata) {
		this.id = id;
		this.legio = legio;
		this.work = (work==null) ? null : work.getCod();
		this.yong = yong;
		this.adult = adult;
		this.children = children;
		this.elderly = elderly;
		this.total = total;
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

	public List<Legio> getLegio() {
		return legio;
	}

	public void setLegio(List<Legio> legio) {
		this.legio = legio;
	}

	public Integer getYong() {
		return yong;
	}

	public void setYong(Integer yong) {
		this.yong = yong;
	}

	public Integer getAdult() {
		return adult;
	}

	public void setAdult(Integer adult) {
		this.adult = adult;
	}

	public Integer getElderly() {
		return elderly;
	}

	public void setElderly(Integer elderly) {
		this.elderly = elderly;
	}

	public Integer getTotal() {
		return total;
	}

	public void setTotal(Integer total) {
		this.total = total;
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

	public Integer getChildren() {
		return children;
	}

	public void setChildren(Integer children) {
		this.children = children;
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
