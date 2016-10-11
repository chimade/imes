package com.chimade.mes.config.model;

import java.util.List;

import com.chimade.mes.sys.model.PageableBaseModel;

/**
 * 
 * @author tommy1860
 *
 */
public class Company extends PageableBaseModel{
	private List<Address> addresses;
	private String website;

}
