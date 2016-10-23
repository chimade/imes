package com.chimade.mes.sys.model ;

public class Factory  extends PageableBaseModel {
   private   int id;
   private String   code;
   private String   name;
   private Integer   companyId;
   public Company company ;
   //= new Company() ;
   public Company getCompany() {
	return company;
}
public void setCompany(Company company) {
	this.company = company;
}
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
//   public  Factory() {
//     super();
//  }
//  public  Factory(Integer Id,String Code,String Name,Integer CompanyId) {
//     super();
//      this.id=id;
//      this.code=code;
//      this.name=name;
//      this.companyId=companyId;
//  }
//  public  Factory(Integer Id,String Code,String Name,Integer CompanyId , Company company) {
//	  super();
//	  this.id=id;
//	  this.code=code;
//	  this.name=name;
//	  this.companyId=companyId;
//	  this.company = company ;
//  }
}
