package com.chimade.mes.sys.model ;

import com.chimade.mes.sys.model.PageableBaseModel; 


public class Printer  extends PageableBaseModel {
   private   int id;
   private String   code;
   private String   name;
   private String   host;
   private String   port;
   private String   resolution;
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
   public  void  setHost(String   host ) {
   		this.host = host;
   } 
   public  String   getHost ()  {
   		return host;
   } 
   public  void  setPort(String   port ) {
   		this.port = port;
   } 
   public  String   getPort ()  {
   		return port;
   } 
   public  void  setResolution(String   resolution ) {
   		this.resolution = resolution;
   } 
   public  String   getResolution ()  {
   		return resolution;
   } 
   public  void  setDescription(String   description ) {
   		this.description = description;
   } 
   public  String   getDescription ()  {
   		return description;
   } 
   public  Printer() {
     super();
  }
  public  Printer(Integer Id,String Code,String Name,String Host,String Port,String Resolution,String Description) {
     super();
      this.id=id;
      this.code=code;
      this.name=name;
      this.host=host;
      this.port=port;
      this.resolution=resolution;
      this.description=description;
  }
}
