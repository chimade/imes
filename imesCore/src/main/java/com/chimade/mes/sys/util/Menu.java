package com.chimade.mes.sys.util;

import java.util.ArrayList;
import java.util.List;

public class Menu {
	private String text ;
	private String label ;
	private boolean  expanded ;
	private boolean leaf ;
	private List<Menu> children = new ArrayList<Menu>() ;
	@Override
	public String toString() {
		return "Menu [text=" + text + ", label=" + label + ", expanded=" + expanded + ", leaf=" + leaf + ", children="
				+ children + "]";
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public boolean isExpanded() {
		return expanded;
	}
	public void setExpanded(boolean expanded) {
		this.expanded = expanded;
	}
	public boolean isLeaf() {
		return leaf;
	}
	public void setLeaf(boolean leaf) {
		this.leaf = leaf;
	}
	public List<Menu> getChildren() {
		return children;
	}
	public void setChildren(List<Menu> children) {
		this.children = children;
	}

	
}
