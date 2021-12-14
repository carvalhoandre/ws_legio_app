package com.legioapp.domain;

import java.util.ArrayList;
import java.util.List;

public class AtaExtenso {
	
	private Integer number;
	private String numero;
	private String dia;
	private String mes;
	private String ano;
	private String hora;
	private List<String> legionarios = new ArrayList<>();
	private String capituloEspiritual;
	private String paginaEspiritual;
	private String titleEspiritual;
	private List<RecruitmentExtenso> recrutamento = new ArrayList<>();
	private String saldoAnterior;
	private String coletaDoDia;
	private String diaDaColeta;
	private String despesas;
	private String subTotal;
	private String totalEmCaixa;
	private List<WorkExtenso> work = new ArrayList<>();
	private String allocutionAutor;
	private String allocutionAssunto;
	private String paginaEstudo;
	private String paragrafoEstudo;
	private List<EventExtenso> event = new ArrayList<>();
	private String horaFinal;
	private String minutoFinal;
	
	public AtaExtenso() {
	}

	public AtaExtenso(Integer number, String numero, String dia, String mes, String ano, String hora, List<String> legionarios,
			String capituloEspiritual, String paginaEspiritual, String titleEspiritual,
			List<RecruitmentExtenso> recrutamento, String saldoAnterior, String coletaDoDia, String diaDaColeta,
			String despesas, String subTotal, String totalEmCaixa, List<WorkExtenso> work, String allocutionAutor,
			String allocutionAssunto, String paginaEstudo, String paragrafoEstudo, List<EventExtenso> event,
			String horaFinal, String minutoFinal) {
		this.number = number;
		this.numero = numero;
		this.dia = dia;
		this.mes = mes;
		this.ano = ano;
		this.hora = hora;
		this.legionarios = legionarios;
		this.capituloEspiritual = capituloEspiritual;
		this.paginaEspiritual = paginaEspiritual;
		this.titleEspiritual = titleEspiritual;
		this.recrutamento = recrutamento;
		this.saldoAnterior = saldoAnterior;
		this.coletaDoDia = coletaDoDia;
		this.diaDaColeta = diaDaColeta;
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
	}

	public Integer getNumber() {
		return number;
	}

	public void setNumber(Integer number) {
		this.number = number;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getDia() {
		return dia;
	}

	public void setDia(String dia) {
		this.dia = dia;
	}

	public String getMes() {
		return mes;
	}

	public void setMes(String mes) {
		this.mes = mes;
	}

	public String getAno() {
		return ano;
	}

	public void setAno(String ano) {
		this.ano = ano;
	}

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
	}

	public List<String> getLegionarios() {
		return legionarios;
	}

	public void setLegionarios(List<String> legionarios) {
		this.legionarios = legionarios;
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

	public List<RecruitmentExtenso> getRecrutamento() {
		return recrutamento;
	}

	public void setRecrutamento(List<RecruitmentExtenso> recrutamento) {
		this.recrutamento = recrutamento;
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

	public List<WorkExtenso> getWork() {
		return work;
	}

	public void setWork(List<WorkExtenso> work) {
		this.work = work;
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

	public List<EventExtenso> getEvent() {
		return event;
	}

	public void setEvent(List<EventExtenso> event) {
		this.event = event;
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
}
