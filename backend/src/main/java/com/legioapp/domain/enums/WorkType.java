package com.legioapp.domain.enums;

public enum WorkType {
	
	VISITA(1, "Visita"),
	ROSARIO(2, "Rosario"),
	OFICIO(3, "Oficio"),
	LIGACAO(4, "Ligacao"),
	PROPAGACAO(5, "Propagacao");
	
	private int cod;
	private String desc;
	
	private WorkType(int cod, String desc) {
		this.cod = cod;
		this.desc = desc;
	}

	public int getCod() {
		return cod;
	}

	public String getDesc() {
		return desc;
	}

	public static WorkType toEnum(Integer cod) {
		if( cod == null) {
			return null;
		}
		
		for (WorkType x : WorkType.values()) {
			if(cod.equals(x.getCod())) {
				return x;
			}
		}
		throw new IllegalArgumentException("ID inválido: " + cod);
	}
}
