package com.chimade.mes.sys.model;

/**
 * 
 * @author tommy1860
 *
 */

public class BaseModel {

	private int id;
	private String code;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}
	@Override
	public String toString() {
		return "BaseModel [id=" + id + ", code=" + code + "]";
	}
}
