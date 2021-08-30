package com.legioapp.domain.enums;

public enum ChargeType {

	ATIVO(1, "Ativo"),
	AUXILIAR(2, "Auxiliar"),
	ADJUNTOR(3, "Adjuntor");
	
	private int cod;
	private String desc;
	
	private ChargeType(int cod, String desc) {
		this.cod = cod;
		this.desc = desc;
	}

	public int getCod() {
		return cod;
	}

	public String getDesc() {
		return desc;
	}

	public static ChargeType toEnum(Integer cod) {
		if( cod == null) {
			return null;
		}
		
		for (ChargeType x : ChargeType.values()) {
			if(cod.equals(x.getCod())) {
				return x;
			}
		}
		throw new IllegalArgumentException("ID inválido: " + cod);
	}
	
}
