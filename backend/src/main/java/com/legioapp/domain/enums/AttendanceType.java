package com.legioapp.domain.enums;

public enum AttendanceType {
	
	AUSENTE(1, "Ausente"),
	PRESENTE(2, "Presente");
	
	private int cod;
	private String desc;
	
	private AttendanceType(int cod, String desc) {
		this.cod = cod;
		this.desc = desc;
	}

	public int getCod() {
		return cod;
	}

	public String getDesc() {
		return desc;
	}

	public static AttendanceType toEnum(Integer cod) {
		if(cod == null) {
			return null;
		}
		
		for (AttendanceType x : AttendanceType.values()) {
			if(cod.equals(x.getCod())) {
				return x;
			}
		}
		throw new IllegalArgumentException("ID inválido: " + cod);
	}
}
