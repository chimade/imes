package com.chimade.mes.sys.model ;

import com.chimade.mes.sys.model.PageableBaseModel; 


public class Process  extends PageableBaseModel {
   private   int id;
   private String   code;
   private String   name;
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
   public  void  setShopfloorId(Integer   shopfloorId ) {
   		this.shopfloorId = shopfloorId;
   } 
   public  Integer   getShopfloorId ()  {
   		return shopfloorId;
   } 
   public  Process() {
     super();
  }
  public  Process(Integer Id,String Code,String Name,Integer ShopfloorId) {
     super();
      this.id=id;
      this.code=code;
      this.name=name;
      this.shopfloorId=shopfloorId;
  }
}
