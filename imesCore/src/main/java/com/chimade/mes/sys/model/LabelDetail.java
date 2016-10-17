package com.chimade.mes.sys.model ;

import com.chimade.mes.sys.model.PageableBaseModel; 


public class LabelDetail  extends PageableBaseModel {
   private   int id;
   private Integer   labelId;
   private String   labelData1;
   private String   lableData2;
   private String   labelData3;
   private String   lableData4;
   private String   labelData5;
   private String   lableData6;
   public  void  setId(int id) {
   		this.id = id;
   } 
   public  int getId ( )  {
   		return id;
   } 
   public  void  setLabelId(Integer   labelId ) {
   		this.labelId = labelId;
   } 
   public  Integer   getLabelId ()  {
   		return labelId;
   } 
   public  void  setLabelData1(String   labelData1 ) {
   		this.labelData1 = labelData1;
   } 
   public  String   getLabelData1 ()  {
   		return labelData1;
   } 
   public  void  setLableData2(String   lableData2 ) {
   		this.lableData2 = lableData2;
   } 
   public  String   getLableData2 ()  {
   		return lableData2;
   } 
   public  void  setLabelData3(String   labelData3 ) {
   		this.labelData3 = labelData3;
   } 
   public  String   getLabelData3 ()  {
   		return labelData3;
   } 
   public  void  setLableData4(String   lableData4 ) {
   		this.lableData4 = lableData4;
   } 
   public  String   getLableData4 ()  {
   		return lableData4;
   } 
   public  void  setLabelData5(String   labelData5 ) {
   		this.labelData5 = labelData5;
   } 
   public  String   getLabelData5 ()  {
   		return labelData5;
   } 
   public  void  setLableData6(String   lableData6 ) {
   		this.lableData6 = lableData6;
   } 
   public  String   getLableData6 ()  {
   		return lableData6;
   } 
   public  LabelDetail() {
     super();
  }
  public  LabelDetail(Integer Id,Integer LabelId,String LabelData1,String LableData2,String LabelData3,String LableData4,String LabelData5,String LableData6) {
     super();
      this.id=id;
      this.labelId=labelId;
      this.labelData1=labelData1;
      this.lableData2=lableData2;
      this.labelData3=labelData3;
      this.lableData4=lableData4;
      this.labelData5=labelData5;
      this.lableData6=lableData6;
  }
}
