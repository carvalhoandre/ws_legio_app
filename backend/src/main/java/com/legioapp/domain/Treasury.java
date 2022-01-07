package com.legioapp.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_treasury")
public class Treasury implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String date;
	
	@Column(name="saldo_anterior")
	private Float saldoAnterior;
	
	@Column(name="coleta_do_dia")
	private Float coletaDoDia;
	
	@Column(unique=true, name="data_da_coleta")
	private String diaDaColeta;
	
	private Float contribuicao;
	private Float despesas;
	private Float subTotal;
	
	@Column(name="total_em_caixa")
	private Float totalEmCaixa;
	
	public Treasury() {
	}

	public Treasury(Integer id, String date, Float saldoAnterior, Float coletaDoDia, String diaDaColeta, Float despesas,
			Float subTotal, Float totalEmCaixa, Float contribuicao) {
		this.id = id;
		this.date = date;
		this.saldoAnterior = saldoAnterior;
		this.coletaDoDia = coletaDoDia;
		this.diaDaColeta = diaDaColeta;
		this.despesas = despesas;
		this.subTotal = subTotal;
		this.totalEmCaixa = totalEmCaixa;
		this.contribuicao = contribuicao;
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

	public Float getSaldoAnterior() {
		return saldoAnterior;
	}

	public void setSaldoAnterior(Float saldoAnterior) {
		this.saldoAnterior = saldoAnterior;
	}

	public Float getColetaDoDia() {
		return coletaDoDia;
	}

	public void setColetaDoDia(Float coletaDoDia) {
		this.coletaDoDia = coletaDoDia;
	}

	public String getDiaDaColeta() {
		return diaDaColeta;
	}

	public void setDiaDaColeta(String diaDaColeta) {
		this.diaDaColeta = diaDaColeta;
	}

	public Float getDespesas() {
		return despesas;
	}

	public void setDespesas(Float despesas) {
		this.despesas = despesas;
	}

	public Float getSubTotal() {
		return subTotal;
	}

	public void setSubTotal(Float subTotal) {
		this.subTotal = subTotal;
	}

	public Float getTotalEmCaixa() {
		return totalEmCaixa;
	}

	public void setTotalEmCaixa(Float totalEmCaixa) {
		this.totalEmCaixa = totalEmCaixa;
	}

	public Float getContribuicao() {
		return contribuicao;
	}

	public void setContribuicao(Float contribuicao) {
		this.contribuicao = contribuicao;
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
		Treasury other = (Treasury) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
