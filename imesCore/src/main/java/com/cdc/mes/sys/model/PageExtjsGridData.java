package com.cdc.mes.sys.model;

import java.util.List;

public class PageExtjsGridData<E> {
	
	private List<E> gridDatas ;
	
	private int totalProperty ;
	
	public List<E> getGridDatas() {
		return gridDatas;
	}
	public void setGridDatas(List<E> gridDatas) {
		this.gridDatas = gridDatas;
	}
	public int getTotalProperty() {
		return totalProperty;
	}
	public void setTotalProperty(int totalProperty) {
		this.totalProperty = totalProperty;
	}
}
