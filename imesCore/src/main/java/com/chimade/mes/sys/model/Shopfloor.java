package com.chimade.mes.sys.model ;

import com.chimade.mes.sys.model.PageableBaseModel; 


public class Shopfloor  extends PageableBaseModel {
   private   int id;
   private String   code;
   private String   name;
   private Integer   factoryId;
   public  void  setId(int id) {
   		this.id = id;
   } 
   public  int getId ( )  {
   		return id;
   } 
   public  void  setCode(String   code ) {
   		this.code = code;
   } 
   public  String   getCode ()  {
   		return code;
   } 
   public  void  setName(String   name ) {
   		this.name = name;
   } 
   public  String   getName ()  {
   		return name;
   } 
   public  void  setFactoryId(Integer   factoryId ) {
   		this.factoryId = factoryId;
   } 
   public  Integer   getFactoryId ()  {
   		return factoryId;
   } 
   public  Shopfloor() {
     super();
  }
  public  Shopfloor(Integer Id,String Code,String Name,Integer FactoryId) {
     super();
      this.id=id;
      this.code=code;
      this.name=name;
      this.factoryId=factoryId;
  }
}
