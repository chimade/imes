package com.chimade.mes.sys.model ;

import com.chimade.mes.sys.model.PageableBaseModel; 


public class Label  extends PageableBaseModel {
   private   int id;
   private Integer   labelTemplateId;
   private Integer   printedCopy;
   private Integer   status;
   private java.sql.Timestamp   createdDate;
   public  void  setId(int id) {
   		this.id = id;
   } 
   public  int getId ( )  {
   		return id;
   } 
   public  void  setLabelTemplateId(Integer   labelTemplateId ) {
   		this.labelTemplateId = labelTemplateId;
   } 
   public  Integer   getLabelTemplateId ()  {
   		return labelTemplateId;
   } 
   public  void  setPrintedCopy(Integer   printedCopy ) {
   		this.printedCopy = printedCopy;
   } 
   public  Integer   getPrintedCopy ()  {
   		return printedCopy;
   } 
   public  void  setStatus(Integer   status ) {
   		this.status = status;
   } 
   public  Integer   getStatus ()  {
   		return status;
   } 
   public  void  setCreatedDate(java.sql.Timestamp   createdDate ) {
   		this.createdDate = createdDate;
   } 
   public  java.sql.Timestamp   getCreatedDate ()  {
   		return createdDate;
   } 
   public  Label() {
     super();
  }
  public  Label(Integer Id,Integer LabelTemplateId,Integer PrintedCopy,Integer Status,java.sql.Timestamp CreatedDate) {
     super();
      this.id=id;
      this.labelTemplateId=labelTemplateId;
      this.printedCopy=printedCopy;
      this.status=status;
      this.createdDate=createdDate;
  }
}
