package com.chimade.mes.sys.model ;

import com.chimade.mes.sys.model.PageableBaseModel; 


public class Action  extends PageableBaseModel {

   private   int id;
   private String   itemid;
   private String   name;
   private int modelActionId ;
   private int authorizationModelActionId ;
   
   
   public int getAuthorizationModelActionId() {
	return authorizationModelActionId;
}
public void setAuthorizationModelActionId(int authorizationModelActionId) {
	this.authorizationModelActionId = authorizationModelActionId;
}
public int getModelActionId() {
	return modelActionId;
	}
	public void setModelActionId(int modelActionId) {
		this.modelActionId = modelActionId;
	}
public  void  setId(int id) {
   		this.id = id;
   } 
   public  int getId ( )  {
   		return id;
   } 

   public  void  setItemid(String   itemid ) {
   		this.itemid = itemid;
   } 
   public  String   getItemid ()  {
   		return itemid;
   } 

   public  void  setName(String   name ) {
   		this.name = name;
   } 
   public  String   getName ()  {
   		return name;
   } 


}
