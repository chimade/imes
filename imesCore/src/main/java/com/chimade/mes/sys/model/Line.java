package com.chimade.mes.sys.model ;

import com.chimade.mes.sys.model.PageableBaseModel; 


public class Line  extends PageableBaseModel {
   private Integer   shopfloorId;
   private   int id;
   private String   code;
   private String   name;
   private Integer   revision;
   private String   shortName;
   private String   longName;
   private Integer   status;
   private Integer   workorderId;
   private String   description;
   private java.sql.Timestamp   createdDate;
   public  void  setShopfloorId(Integer   shopfloorId ) {
   		this.shopfloorId = shopfloorId;
   } 
   public  Integer   getShopfloorId ()  {
   		return shopfloorId;
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
   public  void  setRevision(Integer   revision ) {
   		this.revision = revision;
   } 
   public  Integer   getRevision ()  {
   		return revision;
   } 
   public  void  setShortName(String   shortName ) {
   		this.shortName = shortName;
   } 
   public  String   getShortName ()  {
   		return shortName;
   } 
   public  void  setLongName(String   longName ) {
   		this.longName = longName;
   } 
   public  String   getLongName ()  {
   		return longName;
   } 
   public  void  setStatus(Integer   status ) {
   		this.status = status;
   } 
   public  Integer   getStatus ()  {
   		return status;
   } 
   public  void  setWorkorderId(Integer   workorderId ) {
   		this.workorderId = workorderId;
   } 
   public  Integer   getWorkorderId ()  {
   		return workorderId;
   } 
   public  void  setDescription(String   description ) {
   		this.description = description;
   } 
   public  String   getDescription ()  {
   		return description;
   } 
   public  void  setCreatedDate(java.sql.Timestamp   createdDate ) {
   		this.createdDate = createdDate;
   } 
   public  java.sql.Timestamp   getCreatedDate ()  {
   		return createdDate;
   } 
   public  Line() {
     super();
  }
  public  Line(Integer ShopfloorId,Integer Id,String Code,String Name,Integer Revision,String ShortName,String LongName,Integer Status,Integer WorkorderId,String Description,java.sql.Timestamp CreatedDate) {
     super();
      this.shopfloorId=shopfloorId;
      this.id=id;
      this.code=code;
      this.name=name;
      this.revision=revision;
      this.shortName=shortName;
      this.longName=longName;
      this.status=status;
      this.workorderId=workorderId;
      this.description=description;
      this.createdDate=createdDate;
  }
}
