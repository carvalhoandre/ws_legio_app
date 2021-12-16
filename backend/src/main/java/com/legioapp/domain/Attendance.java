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
import com.legioapp.domain.enums.AttendanceType;

@Entity
@Table(name = "tb_presencas")
public class Attendance implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@JsonFormat(pattern="dd/MM/yyyy")
	private Date date;
	
	@ManyToOne
	@JoinColumn(name="legio_id")
	private Legio legio;
	
	private Integer attendance;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="ata_id")
	private Ata ata;

	public Attendance() {
	}

	public Attendance(Integer id, Date date, Legio legio, AttendanceType attendance, Ata ata) {
		this.id = id;
		this.date = date;
		this.legio = legio;
		this.attendance = (attendance==null) ? null: attendance.getCod();
		this.ata = ata;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Legio getLegio() {
		return legio;
	}

	public void setLegio(Legio legio) {
		this.legio = legio;
	}

	public AttendanceType getAttendance() {
		return AttendanceType.toEnum(attendance);
	}

	public void setAttendance(AttendanceType attendance) {
		this.attendance = attendance.getCod();
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
		Attendance other = (Attendance) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
