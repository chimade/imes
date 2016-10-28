package com.chimade.mes.sys.model ;

import java.util.ArrayList;
import java.util.List; 


public class Model  extends PageableBaseModel {

   private   int id;
   private String   name;
   private String   url;
   private int   status;
	private List<Action>   actions = new ArrayList<Action>()	;
   public List<Action> getActions() {
		return actions;
	}
	public void setActions(List<Action> actions) {
		this.actions = actions;
	}
public  void  setId(int id) {
   		this.id = id;
   } 
   public  int getId ( )  {
   		return id;
   } 

   public  void  setName(String   name ) {
   		this.name = name;
   } 
   public  String   getName ()  {
   		return name;
   } 

   public  void  setUrl(String   url ) {
   		this.url = url;
   } 
   public  String   getUrl ()  {
   		return url;
   } 

   public  void  setStatus(int   status ) {
   		this.status = status;
   } 
   public  int   getStatus ()  {
   		return status;
   } 


}
