package com.chimade.mes.sys.model ;

import com.chimade.mes.sys.model.PageableBaseModel; 


public class Part  extends PageableBaseModel {
   private   int id;
   private String   code;
   private String   description;
   private Integer   revision;
   private Double   length;
   private Double   width;
   private Double   height;
   private Double   weight;
   private String   graphic;
   private String   labelData;
   private String   modelCode;
   private String   modelDescription;
   private String   customerCode;
   private Integer   partFamilyId;
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
   public  void  setDescription(String   description ) {
   		this.description = description;
   } 
   public  String   getDescription ()  {
   		return description;
   } 
   public  void  setRevision(Integer   revision ) {
   		this.revision = revision;
   } 
   public  Integer   getRevision ()  {
   		return revision;
   } 
   public  void  setLength(Double   length ) {
   		this.length = length;
   } 
   public  Double   getLength ()  {
   		return length;
   } 
   public  void  setWidth(Double   width ) {
   		this.width = width;
   } 
   public  Double   getWidth ()  {
   		return width;
   } 
   public  void  setHeight(Double   height ) {
   		this.height = height;
   } 
   public  Double   getHeight ()  {
   		return height;
   } 
   public  void  setWeight(Double   weight ) {
   		this.weight = weight;
   } 
   public  Double   getWeight ()  {
   		return weight;
   } 
   public  void  setGraphic(String   graphic ) {
   		this.graphic = graphic;
   } 
   public  String   getGraphic ()  {
   		return graphic;
   } 
   public  void  setLabelData(String   labelData ) {
   		this.labelData = labelData;
   } 
   public  String   getLabelData ()  {
   		return labelData;
   } 
   public  void  setModelCode(String   modelCode ) {
   		this.modelCode = modelCode;
   } 
   public  String   getModelCode ()  {
   		return modelCode;
   } 
   public  void  setModelDescription(String   modelDescription ) {
   		this.modelDescription = modelDescription;
   } 
   public  String   getModelDescription ()  {
   		return modelDescription;
   } 
   public  void  setCustomerCode(String   customerCode ) {
   		this.customerCode = customerCode;
   } 
   public  String   getCustomerCode ()  {
   		return customerCode;
   } 
   public  void  setPartFamilyId(Integer   partFamilyId ) {
   		this.partFamilyId = partFamilyId;
   } 
   public  Integer   getPartFamilyId ()  {
   		return partFamilyId;
   } 
   public  Part() {
     super();
  }
  public  Part(Integer Id,String Code,String Description,Integer Revision,Double Length,Double Width,Double Height,Double Weight,String Graphic,String LabelData,String ModelCode,String ModelDescription,String CustomerCode,Integer PartFamilyId) {
     super();
      this.id=id;
      this.code=code;
      this.description=description;
      this.revision=revision;
      this.length=length;
      this.width=width;
      this.height=height;
      this.weight=weight;
      this.graphic=graphic;
      this.labelData=labelData;
      this.modelCode=modelCode;
      this.modelDescription=modelDescription;
      this.customerCode=customerCode;
      this.partFamilyId=partFamilyId;
  }
}
