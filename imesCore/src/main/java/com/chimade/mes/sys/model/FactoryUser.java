package com.chimade.mes.sys.model ;

import com.chimade.mes.sys.model.PageableBaseModel; 
import com.chimade.mes.sys.model.Factory; 
import com.chimade.mes.sys.model.User; 


public class FactoryUser  extends PageableBaseModel {

   private   int id;
   private int   factoryId;
   private int   userId;

	private Factory   factory ;
	private User   user ;
   public  void  setId(int id) {
   		this.id = id;
   } 
   public  int getId ( )  {
   		return id;
   } 

   public  void  setFactoryId(int   factoryId ) {
   		this.factoryId = factoryId;
   } 
   public  int   getFactoryId ()  {
   		return factoryId;
   } 
   public  void  setFactory(Factory  factory   ) {
   		this.factory = factory;
   } 
   public  Factory   getFactory ()  {
   		return factory;
   } 

   public  void  setUserId(int   userId ) {
   		this.userId = userId;
   } 
   public  int   getUserId ()  {
   		return userId;
   } 
   public  void  setUser(User  user   ) {
   		this.user = user;
   } 
   public  User   getUser ()  {
   		return user;
   } 


}
