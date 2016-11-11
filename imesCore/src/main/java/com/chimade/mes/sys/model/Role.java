package com.chimade.mes.sys.model ;

public class Role  extends PageableBaseModel {

   private   int id;
   private int   factoryId;
   private String   name;
	private Factory   factory ;
	
	private  Model model ;
	
   public Model getModel() {
		return model;
	}
	public void setModel(Model model) {
		this.model = model;
	}
public  void  setId(int id) {
   		this.id = id;
   } 
   public  int getId ( )  {
   		return id;
   } 

   public  void  setFactoryId(int   factoryId ) {
   		this.factoryId = factoryId;
   } 
   public  int   getFactoryId ()  {
   		return factoryId;
   } 
   public  void  setFactory(Factory  factory   ) {
   		this.factory = factory;
   } 
   public  Factory   getFactory ()  {
   		return factory;
   } 

   public  void  setName(String   name ) {
   		this.name = name;
   } 
   public  String   getName ()  {
   		return name;
   } 


}
