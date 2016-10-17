package com.chimade.mes.sys.model ;

import com.chimade.mes.sys.model.PageableBaseModel; 


public class PartFamily  extends PageableBaseModel {
   private   int id;
   private String   code;
   private String   name;
   private String   description;
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
   public  void  setDescription(String   description ) {
   		this.description = description;
   } 
   public  String   getDescription ()  {
   		return description;
   } 
   public  PartFamily() {
     super();
  }
  public  PartFamily(Integer Id,String Code,String Name,String Description) {
     super();
      this.id=id;
      this.code=code;
      this.name=name;
      this.description=description;
  }
}
