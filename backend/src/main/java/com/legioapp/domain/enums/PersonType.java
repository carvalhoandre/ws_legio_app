package com.legioapp.domain.enums;

public enum PersonType {
	
	CRIANCA(1, "Crianca"),
	ADOLESCENTE(2, "Adolescente"),
	JOVEM(3, "Jovem"),
	ADULTO(4, "Adulto"),
	IDOSO(5, "Idoso");
	
	private int cod;
	private String desc;
	
	private PersonType(int cod, String desc) {
		this.cod = cod;
		this.desc = desc;
	}

	public int getCod() {
		return cod;
	}

	public String getDesc() {
		return desc;
	}

	public static PersonType toEnum(Integer cod) {
		if( cod == null) {
			return null;
		}
		
		for (PersonType x : PersonType.values()) {
			if(cod.equals(x.getCod())) {
				return x;
			}
		}
		throw new IllegalArgumentException("ID inválido: " + cod);
	}
}
