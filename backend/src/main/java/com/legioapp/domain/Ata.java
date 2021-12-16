package com.legioapp.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "tb_ata")
public class Ata implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(unique=true)
	@JsonFormat(pattern="dd/MM/yyyy")
	private Date date;
	
	@OneToMany(mappedBy="ata", cascade=CascadeType.ALL)
	private List<Attendance> attendance = new ArrayList<>();
	
	@OneToMany(mappedBy="ata", cascade=CascadeType.ALL)
	private List<Work> work = new ArrayList<>();
	
	@OneToMany(mappedBy="ata", cascade=CascadeType.ALL)
	private List<Recruitment> recruitment = new ArrayList<>();
	
	@OneToMany(mappedBy="ata", cascade=CascadeType.ALL)
	private List<Event> event = new ArrayList<>();
	
	@OneToOne(cascade=CascadeType.ALL, mappedBy="ata")
	private Treasury treasury;
	
	public Ata() {
	}

	public Ata(Integer id) {
		this.id = id;
	}

	public Ata(Integer id, Date date, List<Attendance> attendance, List<Work> work, List<Recruitment> recruitment,
			List<Event> event, Treasury treasury) {
		this.id = id;
		this.date = date;
		this.attendance = attendance;
		this.work = work;
		this.recruitment = recruitment;
		this.event = event;
		this.treasury = treasury;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public List<Work> getWork() {
		return work;
	}

	public void setWork(List<Work> work) {
		this.work = work;
	}

	public List<Recruitment> getRecruitment() {
		return recruitment;
	}

	public void setRecruitment(List<Recruitment> recruitment) {
		this.recruitment = recruitment;
	}

	public List<Event> getEvent() {
		return event;
	}

	public void setEvent(List<Event> event) {
		this.event = event;
	}

	public Treasury getTreasury() {
		return treasury;
	}

	public void setTreasury(Treasury treasury) {
		this.treasury = treasury;
	}

	public List<Attendance> getAttendance() {
		return attendance;
	}

	public void setAttendance(List<Attendance> attendance) {
		this.attendance = attendance;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
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
		Ata other = (Ata) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
