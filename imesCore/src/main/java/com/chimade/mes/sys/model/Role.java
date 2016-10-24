package com.chimade.mes.sys.model ;

import com.chimade.mes.sys.model.PageableBaseModel; 
import com.chimade.mes.sys.model.Factory; 


public class Role  extends PageableBaseModel {

   private   int id;
   private boolean   name;
   private int   factoryId;

	private Factory   factory ;
   public  void  setId(int id) {
   		this.id = id;
   } 
   public  int getId ( )  {
   		return id;
   } 

   public  void  setName(boolean   name ) {
   		this.name = name;
   } 
   public  boolean   getName ()  {
   		return name;
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


}
