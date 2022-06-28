package com.legioapp.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_ata_extenso")
public class AtaExtenso implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String date;
	
	private String inicio;
	private String ata;
	private String participation;
	private String capituloEspiritual;
	private String paginaEspiritual;
	private String titleEspiritual;
	private String allocutionAutor;
	private String allocutionAssunto;
	private Boolean coleta;
	private String paginaEstudo;
	private String paragrafoEstudo;
	private String assuntos;
	private String horaFinal;
	
	public AtaExtenso() {
	}
	
	public AtaExtenso(Integer id) {
		this.id = id;
	}

	public AtaExtenso(Integer id, String date, String inicio, String ata, String participation,
			String capituloEspiritual, String paginaEspiritual, String titleEspiritual, String allocutionAutor,
			String allocutionAssunto, Boolean coleta, String paginaEstudo, String paragrafoEstudo, String assuntos,
			String horaFinal) {
		this.id = id;
		this.date = date;
		this.inicio = inicio;
		this.ata = ata;
		this.participation = participation;
		this.capituloEspiritual = capituloEspiritual;
		this.paginaEspiritual = paginaEspiritual;
		this.titleEspiritual = titleEspiritual;
		this.allocutionAutor = allocutionAutor;
		this.allocutionAssunto = allocutionAssunto;
		this.coleta = coleta;
		this.paginaEstudo = paginaEstudo;
		this.paragrafoEstudo = paragrafoEstudo;
		this.assuntos = assuntos;
		this.horaFinal = horaFinal;
	}

	public String getInicio() {
		return inicio;
	}

	public void setInicio(String inicio) {
		this.inicio = inicio;
	}

	public Boolean getColeta() {
		return coleta;
	}

	public void setColeta(Boolean coleta) {
		this.coleta = coleta;
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

	public String getAta() {
		return ata;
	}

	public void setAta(String ata) {
		this.ata = ata;
	}

	public String getCapituloEspiritual() {
		return capituloEspiritual;
	}

	public void setCapituloEspiritual(String capituloEspiritual) {
		this.capituloEspiritual = capituloEspiritual;
	}

	public String getPaginaEspiritual() {
		return paginaEspiritual;
	}

	public void setPaginaEspiritual(String paginaEspiritual) {
		this.paginaEspiritual = paginaEspiritual;
	}

	public String getTitleEspiritual() {
		return titleEspiritual;
	}

	public void setTitleEspiritual(String titleEspiritual) {
		this.titleEspiritual = titleEspiritual;
	}

	public String getAllocutionAutor() {
		return allocutionAutor;
	}

	public void setAllocutionAutor(String allocutionAutor) {
		this.allocutionAutor = allocutionAutor;
	}

	public String getAllocutionAssunto() {
		return allocutionAssunto;
	}

	public void setAllocutionAssunto(String allocutionAssunto) {
		this.allocutionAssunto = allocutionAssunto;
	}

	public String getPaginaEstudo() {
		return paginaEstudo;
	}

	public void setPaginaEstudo(String paginaEstudo) {
		this.paginaEstudo = paginaEstudo;
	}

	public String getParagrafoEstudo() {
		return paragrafoEstudo;
	}

	public void setParagrafoEstudo(String paragrafoEstudo) {
		this.paragrafoEstudo = paragrafoEstudo;
	}

	public String getHoraFinal() {
		return horaFinal;
	}

	public void setHoraFinal(String horaFinal) {
		this.horaFinal = horaFinal;
	}

	public String getParticipation() {
		return participation;
	}

	public void setParticipation(String participation) {
		this.participation = participation;
	}

	public String getAssuntos() {
		return assuntos;
	}

	public void setAssuntos(String assuntos) {
		this.assuntos = assuntos;
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
		AtaExtenso other = (AtaExtenso) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
