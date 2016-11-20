package com.chimade.mes.sys.util;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.List;

import com.chimade.mes.web.ImesContext;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

public class ReadJsonMenu {

	public  Menu loadOrigniMenu() {
		String path = ImesContext.WEBINFPath +"/treemenu.json";
		StringBuffer buf = new StringBuffer() ;
		try {
			FileReader f = new FileReader( path) ;
			BufferedReader br = new BufferedReader(f);
	
			String v = br.readLine();
			while (  v  != null	 ) {
				buf.append(v);
			}
			br.close();
		}catch (Exception e) {
			e.printStackTrace();
		}
		Gson gson = new Gson();  
//		java.lang.reflect.Type type =new TypeToken<List<Menu>>() {       }.getType();
//		java.lang.reflect.Type type = new TypeToken<Menu>() {}.getType();
		Menu jsonBean = gson.fromJson(buf.toString(), Menu.class);
		return jsonBean ;
	}
	
	public static void main(String[] args) {
		String jsonData=" {"+
            " text: '系统管理', "+
            "   label : 'Forms',  "+
            "   expanded: true ,  "+
            "   children: [  "+
            "    { leaf: true, text: '公司管理',label :'Company' },  "+
            "     { leaf: true, text: '工厂管理',label :'Factory' } ] "+
//"     { text:'模块动作管理', label:' authorization ' ,expanded: true,  "+
//"   	 children: [  "+
//"		 { leaf: true, text: '动作管理',label :'Action' },  "+
//"    		 { leaf: true, text: '模块管理',label :'Model' },  "+
//"           { leaf: true, text: '动作关联管理',label :'ModelAction' }  "+
//"       		 ]  "+
//                 
//   "             } ]  "+

   "}  ";
//		Menu person = GsonUtil.parseJsonWithGson(jsonData, Menu.class);
		Gson gson = new Gson();  
		java.lang.reflect.Type type =new TypeToken<List<Menu>>() {       }.getType();
//		java.lang.reflect.Type type = new TypeToken<Menu>() {}.getType();
		Menu jsonBean = gson.fromJson(jsonData, Menu.class);
//		Menu jsonBean = gson.fromJson(jsonData, type);
		System.out.println( jsonBean.toString());
}

}