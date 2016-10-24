package com.chimade.mes.sys.model ;

import com.chimade.mes.sys.model.PageableBaseModel; 
import com.chimade.mes.sys.model.Model; 
import com.chimade.mes.sys.model.Action; 


public class ModelAction  extends PageableBaseModel {

   private   int id;
   private int   modelId;
   private int   actionId;

	private Model   model ;
	private Action   action ;
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
   public  void  setAction(Action  action   ) {
   		this.action = action;
   } 
   public  Action   getAction ()  {
   		return action;
   } 


}
