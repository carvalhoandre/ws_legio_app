package com.legioapp.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.legioapp.domain.enums.ChargeType;

@Entity
@Table(name = "tb_legionarios")
public class Legio implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String name;
	
	private Integer type;
	
	@JsonFormat(pattern="dd/MM/")
	private Date birthday;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="ata_id")
	private Ata ata;

	public Legio() {
	}	

	public Legio(Integer id, String name, ChargeType type, Date birthday, Ata ata) {
		super();
		this.id = id;
		this.name = name;
		this.type = (type==null) ? null: type.getCod();
		this.birthday = birthday;
		this.ata = ata;
	}
	
	public ChargeType getType() {
		return ChargeType.toEnum(type);
	}

	public void setType(ChargeType type) {
		this.type = type.getCod();
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

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
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
		Legio other = (Legio) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
