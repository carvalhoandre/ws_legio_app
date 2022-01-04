package com.legioapp.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_ata")
public class Ata implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(unique=true)
	private String date;
	
	@OneToMany(mappedBy="ata")
	private List<Attendance> attendance = new ArrayList<>();
	
	@OneToMany(mappedBy="ata")
	private List<Work> work = new ArrayList<>();
	
	@OneToMany(mappedBy="ata")
	private List<Recruitment> recruitment = new ArrayList<>();
	
	@OneToMany(mappedBy="ata")
	private List<Event> event = new ArrayList<>();
	
	@OneToMany(mappedBy="ata")
	private List<Treasury> treasury = new ArrayList<>();
	
	public Ata() {
	}

	public Ata(Integer id) {
		this.id = id;
	}

	public Ata(Integer id, String date, List<Attendance> attendance, List<Work> work, List<Recruitment> recruitment,
			List<Event> event, List<Treasury> treasury) {
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

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public List<Attendance> getAttendance() {
		return attendance;
	}

	public void setAttendance(List<Attendance> attendance) {
		this.attendance = attendance;
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

	public List<Treasury> getTreasury() {
		return treasury;
	}

	public void setTreasury(List<Treasury> treasury) {
		this.treasury = treasury;
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
