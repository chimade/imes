/**
 * 
 */
package com.chimade.mes.sys.model;

/**
 * @author tommy1860
 *
 */
public class PageableBaseModel extends BaseModel {
	public int start  ;
	public int limit  ;	
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
	@Override
	public String toString() {
		return "BaseModel [start=" + start + ", limit=" + limit + "]";
	}
}
