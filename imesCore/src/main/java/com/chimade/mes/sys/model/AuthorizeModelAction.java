package com.chimade.mes.sys.model ;

public class AuthorizeModelAction  extends PageableBaseModel {

   private int   entityId;
   private int   type;
   private int   actionId;
   private int   factoryId;
   private   int id;

	private User   user ;
	private Role   role ;
	private Action   action ;
	private Factory   factory ;
   public  void  setEntityId(int   entityId ) {
   		this.entityId = entityId;
   } 
   public  int   getEntityId ()  {
   		return entityId;
   } 

   public  void  setType(int   type ) {
   		this.type = type;
   } 
   public  int   getType ()  {
   		return type;
   } 

   public User getUser() {
	return user;
}
public void setUser(User user) {
	this.user = user;
}
public  void  setActionId(int   actionId ) {
   		this.actionId = actionId;
   } 
   public  int   getActionId ()  {
   		return actionId;
   } 
   public  void  setAction(Action  action   ) {
   		this.action = action;
   } 
   public  Action   getAction ()  {
   		return action;
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

   public  void  setId(int id) {
   		this.id = id;
   } 
   public  int getId ( )  {
   		return id;
   } 


}
