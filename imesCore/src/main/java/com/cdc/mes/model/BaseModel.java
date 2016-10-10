package com.cdc.mes.model;

public class BaseModel {

	/**-----------------------------------------------------------------------------*/
	public int page ; 
	public int start ;
	public int limit ;	
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public int getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}
	/**----------------------------------------------------------------------------*/
	@Override
	public String toString() {
		return "BaseModel [page=" + page + ", start=" + start + ", limit=" + limit + "]";
	}
}
