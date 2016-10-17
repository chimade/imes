package com.chimade.mes.sys.model ;

import com.chimade.mes.sys.model.PageableBaseModel; 


public class LabelTemplate  extends PageableBaseModel {
   private   int id;
   private String   code;
   private String   name;
   private String   templateFile;
   private String   description;
   private String   labelField1;
   private String   labelField2;
   private String   labelField3;
   private String   labelField4;
   private String   labelField5;
   private String   labelField6;
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
   public  void  setTemplateFile(String   templateFile ) {
   		this.templateFile = templateFile;
   } 
   public  String   getTemplateFile ()  {
   		return templateFile;
   } 
   public  void  setDescription(String   description ) {
   		this.description = description;
   } 
   public  String   getDescription ()  {
   		return description;
   } 
   public  void  setLabelField1(String   labelField1 ) {
   		this.labelField1 = labelField1;
   } 
   public  String   getLabelField1 ()  {
   		return labelField1;
   } 
   public  void  setLabelField2(String   labelField2 ) {
   		this.labelField2 = labelField2;
   } 
   public  String   getLabelField2 ()  {
   		return labelField2;
   } 
   public  void  setLabelField3(String   labelField3 ) {
   		this.labelField3 = labelField3;
   } 
   public  String   getLabelField3 ()  {
   		return labelField3;
   } 
   public  void  setLabelField4(String   labelField4 ) {
   		this.labelField4 = labelField4;
   } 
   public  String   getLabelField4 ()  {
   		return labelField4;
   } 
   public  void  setLabelField5(String   labelField5 ) {
   		this.labelField5 = labelField5;
   } 
   public  String   getLabelField5 ()  {
   		return labelField5;
   } 
   public  void  setLabelField6(String   labelField6 ) {
   		this.labelField6 = labelField6;
   } 
   public  String   getLabelField6 ()  {
   		return labelField6;
   } 
   public  LabelTemplate() {
     super();
  }
  public  LabelTemplate(Integer Id,String Code,String Name,String TemplateFile,String Description,String LabelField1,String LabelField2,String LabelField3,String LabelField4,String LabelField5,String LabelField6) {
     super();
      this.id=id;
      this.code=code;
      this.name=name;
      this.templateFile=templateFile;
      this.description=description;
      this.labelField1=labelField1;
      this.labelField2=labelField2;
      this.labelField3=labelField3;
      this.labelField4=labelField4;
      this.labelField5=labelField5;
      this.labelField6=labelField6;
  }
}
