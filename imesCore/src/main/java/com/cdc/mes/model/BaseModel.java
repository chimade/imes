package com.cdc.mes.model;

public class BaseModel {

	/**-----------------------------------------------------------------------------*/
//	protected int currentPageNumber ;
//	protected int pageSize ;
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
//	public int getCurrentPageNumber() {
//		return currentPageNumber;
//	}
//	public void setCurrentPageNumber(int currentPageNumber) {
//		this.currentPageNumber = currentPageNumber;
//	}
//	public int getPageSize() {
//		return pageSize;
//	}
//	public void setPageSize(int pageSize) {
//		this.pageSize = pageSize;
//	}
	
	@Override
	public String toString() {
		return "BaseModel [page=" + page + ", start=" + start + ", limit=" + limit + "]";
	}
}
