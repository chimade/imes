package com.chimade.mes.sys.model;

public class PageReturnMsgBean {
	private String msg ;
	private boolean resultFlag = false ;
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public boolean isResultFlag() {
		return resultFlag;
	}
	public void setResultFlag(boolean resultFlag) {
		this.resultFlag = resultFlag;
	} 
}
