package com.chimade.mes.sys.model ;

import com.chimade.mes.sys.model.PageableBaseModel; 


public class Location  extends PageableBaseModel {
   private   int id;
   private String   code;
   private String   name;
   private Integer   processId;
   private Integer   shopfloorId;
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
   public  void  setProcessId(Integer   processId ) {
   		this.processId = processId;
   } 
   public  Integer   getProcessId ()  {
   		return processId;
   } 
   public  void  setShopfloorId(Integer   shopfloorId ) {
   		this.shopfloorId = shopfloorId;
   } 
   public  Integer   getShopfloorId ()  {
   		return shopfloorId;
   } 
   public  Location() {
     super();
  }
  public  Location(Integer Id,String Code,String Name,Integer ProcessId,Integer ShopfloorId) {
     super();
      this.id=id;
      this.code=code;
      this.name=name;
      this.processId=processId;
      this.shopfloorId=shopfloorId;
  }
}
