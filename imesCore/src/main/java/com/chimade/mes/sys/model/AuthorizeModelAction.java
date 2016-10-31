package com.chimade.mes.sys.model ;

import com.chimade.mes.sys.model.PageableBaseModel; 
import com.chimade.mes.sys.model.User; 
import com.chimade.mes.sys.model.Action; 
import com.chimade.mes.sys.model.Factory; 
import com.chimade.mes.sys.model.Role; 
import com.chimade.mes.sys.model.Model; 


public class AuthorizeModelAction  extends PageableBaseModel {

   private int   userId;
   private int   type;
   private int   actionId;
   private int   factoryId;
   private   int id;
   private int   roleId;
   private int   modelId;

	private User   user ;
	private Action   action ;
	private Factory   factory ;
	private Role   role ;
	private Model   model ;
   public  void  setUserId(int   userId ) {
   		this.userId = userId;
   } 
   public  int   getUserId ()  {
   		return userId;
   } 
   public  void  setUser(User  user   ) {
   		this.user = user;
   } 
   public  User   getUser ()  {
   		return user;
   } 

   public  void  setType(int   type ) {
   		this.type = type;
   } 
   public  int   getType ()  {
   		return type;
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

   public  void  setRoleId(int   roleId ) {
   		this.roleId = roleId;
   } 
   public  int   getRoleId ()  {
   		return roleId;
   } 
   public  void  setRole(Role  role   ) {
   		this.role = role;
   } 
   public  Role   getRole ()  {
   		return role;
   } 

   public  void  setModelId(int   modelId ) {
   		this.modelId = modelId;
   } 
   public  int   getModelId ()  {
   		return modelId;
   } 
   public  void  setModel(Model  model   ) {
   		this.model = model;
   } 
   public  Model   getModel ()  {
   		return model;
   } 


}
