package com.legioapp.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_ata_extenso")
public class AtaExtenso {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(unique=true)
	private String number;

	@Column(unique=true)
	private String numero;
	
	@Column(unique=true)
	private String dataExtenso;

	private String ata;
	private String presentes;
	private String capituloEspiritual;
	private String paginaEspiritual;
	private String titleEspiritual;
	private String recrutamento;
	private String saldoAnterior;
	private String diaDaColeta;
	private String coletaDoDia;
	private String despesas;
	private String subTotal;
	private String totalEmCaixa;
	private String work;
	private String allocutionAutor;
	private String allocutionAssunto;
	private String paginaEstudo;
	private String paragrafoEstudo;
	private String event;
	private String horaFinal;
	private String minutoFinal;
	
	public AtaExtenso() {
	}
	
	public AtaExtenso(Integer id) {
		this.id = id;
	}

	public AtaExtenso(Integer id, String number, String numero, String dataExtenso, String ata, String presentes,
			String capituloEspiritual, String paginaEspiritual, String titleEspiritual,
			String recrutamento, String saldoAnterior, String diaDaColeta, String coletaDoDia, String despesas,
			String subTotal, String totalEmCaixa, String work, String allocutionAutor, String allocutionAssunto,
			String paginaEstudo, String paragrafoEstudo, String event, String horaFinal, String minutoFinal) {
		this.id = id;
		this.number = number;
		this.numero = numero;
		this.dataExtenso = dataExtenso;
		this.presentes = presentes;
		this.capituloEspiritual = capituloEspiritual;
		this.paginaEspiritual = paginaEspiritual;
		this.titleEspiritual = titleEspiritual;
		this.recrutamento = recrutamento;
		this.saldoAnterior = saldoAnterior;
		this.diaDaColeta = diaDaColeta;
		this.coletaDoDia = coletaDoDia;
		this.despesas = despesas;
		this.subTotal = subTotal;
		this.totalEmCaixa = totalEmCaixa;
		this.work = work;
		this.allocutionAutor = allocutionAutor;
		this.allocutionAssunto = allocutionAssunto;
		this.paginaEstudo = paginaEstudo;
		this.paragrafoEstudo = paragrafoEstudo;
		this.event = event;
		this.horaFinal = horaFinal;
		this.minutoFinal = minutoFinal;
		this.ata = ata;
	}

	public String getAta() {
		return ata;
	}

	public void setAta(String ata) {
		this.ata = ata;
	}

	public String getPresentes() {
		return presentes;
	}

	public void setPresentes(String legionario) {
		this.presentes = legionario;
	}

	public String getRecrutamento() {
		return recrutamento;
	}

	public void setRecrutamento(String recrutamento) {
		this.recrutamento = recrutamento;
	}

	public String getWork() {
		return work;
	}

	public void setWork(String work) {
		this.work = work;
	}

	public String getEvent() {
		return event;
	}

	public void setEvent(String event) {
		this.event = event;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getDataExtenso() {
		return dataExtenso;
	}

	public void setDataExtenso(String dataExtenso) {
		this.dataExtenso = dataExtenso;
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

	public String getSaldoAnterior() {
		return saldoAnterior;
	}

	public void setSaldoAnterior(String saldoAnterior) {
		this.saldoAnterior = saldoAnterior;
	}

	public String getColetaDoDia() {
		return coletaDoDia;
	}

	public void setColetaDoDia(String coletaDoDia) {
		this.coletaDoDia = coletaDoDia;
	}

	public String getDiaDaColeta() {
		return diaDaColeta;
	}

	public void setDiaDaColeta(String diaDaColeta) {
		this.diaDaColeta = diaDaColeta;
	}

	public String getDespesas() {
		return despesas;
	}

	public void setDespesas(String despesas) {
		this.despesas = despesas;
	}

	public String getSubTotal() {
		return subTotal;
	}

	public void setSubTotal(String subTotal) {
		this.subTotal = subTotal;
	}

	public String getTotalEmCaixa() {
		return totalEmCaixa;
	}

	public void setTotalEmCaixa(String totalEmCaixa) {
		this.totalEmCaixa = totalEmCaixa;
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

	public String getMinutoFinal() {
		return minutoFinal;
	}

	public void setMinutoFinal(String minutoFinal) {
		this.minutoFinal = minutoFinal;
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
