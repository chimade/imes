package com.chimade.mes.sys.model ;

import java.util.ArrayList;
import java.util.List; 


public class Model  extends PageableBaseModel {

   private   int id;
   private String   name;
   private String   url;
   private int   status;
	private List<Action>   actions = new ArrayList<Action>()	;
	
	public String toJsonFormat() {
		StringBuffer buf = new StringBuffer() ;
		buf.append("{");
		buf.append("'id' : ").append(id).append(",");
		buf.append("'status' : ").append(status).append(" ,");
		buf.append("'name' : '").append(name).append("' , ");
		buf.append("'url' : '").append(url).append("' ");
		if  ( actions.size() > 0	 ) {
			buf.append(" , ");
			buf.append(" actions : [");
			for(  int i=0 ; i<actions.size() ;i++) {
				buf.append(" {");
				buf.append("'name' : '").append(actions.get(i).getName()).append("' , ");
				buf.append("'itemid' : '").append(actions.get(i).getItemid()).append("' , ");
				buf.append("'id' :").append(actions.get(i).getId()) ;
				buf.append("}");
				if (  i < (actions.size() -1)) 
					buf.append(",");
			}
			buf.append("] " );
		}
		buf.append("}");
		return buf.toString() ;
	}
   public List<Action> getActions() {
		return actions;
	}
	public void setActions(List<Action> actions) {
		this.actions = actions;
	}
public  void  setId(int id) {
   		this.id = id;
   } 
   public  int getId ( )  {
   		return id;
   } 

   public  void  setName(String   name ) {
   		this.name = name;
   } 
   public  String   getName ()  {
   		return name;
   } 

   public  void  setUrl(String   url ) {
   		this.url = url;
   } 
   public  String   getUrl ()  {
   		return url;
   } 

   public  void  setStatus(int   status ) {
   		this.status = status;
   } 
   public  int   getStatus ()  {
   		return status;
   } 


}
