package com.legioapp.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tb_treasury")
public class Treasury implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private Float saldoAnterior;
	private Float coletaDoDia;
	
	@JsonFormat(pattern="dd/MM/yyyy")
	private Date diaDaColeta;
	
	private Float despesas;
	private Float subTotal;
	private Float totalEmCaixa;
	
	@JsonIgnore
	@OneToOne
	@JoinColumn(name="ata_id")
	@MapsId  	
	private Ata ata;
	
	public Treasury() {
	}

	public Treasury(Integer id, Float saldoAnterior, Float coletaDoDia, Date diaDaColeta, Float despesas,
			Float subTotal, Float totalEmCaixa, Ata ata) {
		this.id = id;
		this.saldoAnterior = saldoAnterior;
		this.coletaDoDia = coletaDoDia;
		this.diaDaColeta = diaDaColeta;
		this.despesas = despesas;
		this.subTotal = subTotal;
		this.totalEmCaixa = totalEmCaixa;
		this.ata = ata;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public Date getDiaDaColeta() {
		return diaDaColeta;
	}

	public void setDiaDaColeta(Date diaDaColeta) {
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
		Treasury other = (Treasury) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
