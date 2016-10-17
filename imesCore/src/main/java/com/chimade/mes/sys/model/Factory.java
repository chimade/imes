package com.chimade.mes.sys.model ;

import com.chimade.mes.sys.model.PageableBaseModel; 


public class Factory  extends PageableBaseModel {
   private   int id;
   private String   code;
   private String   name;
   private Integer   companyId;
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
   public  void  setCompanyId(Integer   companyId ) {
   		this.companyId = companyId;
   } 
   public  Integer   getCompanyId ()  {
   		return companyId;
   } 
   public  Factory() {
     super();
  }
  public  Factory(Integer Id,String Code,String Name,Integer CompanyId) {
     super();
      this.id=id;
      this.code=code;
      this.name=name;
      this.companyId=companyId;
  }
}
