package com.chimade.mes.sys.model ;

import java.util.List; 


public class ModelAction  extends PageableBaseModel {

   private   int id;
   private int   modelId;
   private int   actionId;

	private Model   model ;
	private List<Action>   actions ;
   public  void  setId(int id) {
   		this.id = id;
   } 
   public  int getId ( )  {
   		return id;
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

   public  void  setActionId(int   actionId ) {
   		this.actionId = actionId;
   } 
   public  int   getActionId ()  {
   		return actionId;
   } 
   public  void  setActions(List<Action>  actions   ) {
   		this.actions = actions;
   } 
   public  List<Action>   getActions ()  {
   		return actions;
   } 


}
