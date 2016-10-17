package com.chimade.mes.sys.model ;

import com.chimade.mes.sys.model.PageableBaseModel; 


public class Company  extends PageableBaseModel {
   private   int id;
   private String   code;
   private String   name;
   private String   address;
   private String   website;
   private String   telephone;
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
   public  void  setAddress(String   address ) {
   		this.address = address;
   } 
   public  String   getAddress ()  {
   		return address;
   } 
   public  void  setWebsite(String   website ) {
   		this.website = website;
   } 
   public  String   getWebsite ()  {
   		return website;
   } 
   public  void  setTelephone(String   telephone ) {
   		this.telephone = telephone;
   } 
   public  String   getTelephone ()  {
   		return telephone;
   } 
   public  void  setDescription(String   description ) {
   		this.description = description;
   } 
   public  String   getDescription ()  {
   		return description;
   } 
   public  Company() {
     super();
  }
  public  Company(Integer Id,String Code,String Name,String Address,String Website,String Telephone,String Description) {
     super();
      this.id=id;
      this.code=code;
      this.name=name;
      this.address=address;
      this.website=website;
      this.telephone=telephone;
      this.description=description;
  }
}
