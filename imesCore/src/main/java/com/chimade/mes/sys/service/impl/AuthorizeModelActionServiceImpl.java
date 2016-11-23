package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.AuthorizeModelActionMapper;
import com.chimade.mes.sys.model.AuthorizeModelAction;
import com.chimade.mes.sys.model.Model;
import com.chimade.mes.sys.model.Role;
import com.chimade.mes.sys.model.User;
import com.chimade.mes.sys.service.AuthorizeModelActionService;
import com.chimade.mes.sys.util.Menu;
import com.chimade.mes.sys.util.ReadJsonMenu;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class AuthorizeModelActionServiceImpl implements AuthorizeModelActionService {
	
	@Resource
	private AuthorizeModelActionMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<AuthorizeModelAction> findAll() {
		List<AuthorizeModelAction> findAllList = mapper.findAll();
		return findAllList;
	}

	public AuthorizeModelAction findById(int id) {
		AuthorizeModelAction baseAuthorizeModelAction = mapper.findById(id);
		return baseAuthorizeModelAction;
	}

	public boolean save(AuthorizeModelAction baseAuthorizeModelAction) {
		boolean f=true ;
		try {
			mapper.save(baseAuthorizeModelAction);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(AuthorizeModelAction baseAuthorizeModelAction) {
		return mapper.update(baseAuthorizeModelAction);
	}

	public  int  fetchTotalNumberForSearch (AuthorizeModelAction baseAuthorizeModelAction ) {
		return mapper.fetchTotalNumberForSearch(baseAuthorizeModelAction).intValue();
	}
	
	public List<AuthorizeModelAction> findBySearch(AuthorizeModelAction baseAuthorizeModelAction) {
		List<AuthorizeModelAction> findAllList = mapper.findBySearch (baseAuthorizeModelAction)  ;
		return findAllList;
	}

	public List<User> findModelLinkUserBySearch(User user) {
		List<User> findAllList = mapper.findModelLinkUserBySearch (user)  ;
		return findAllList;
	}

 
	public int fetchTotalNumberForSearchMolelLinkUser(User user) {
		return mapper.fetchTotalNumberForSearchMolelLinkUser(user).intValue();
	}

	public List<Role> findModelLinkRoleBySearch(Role role) {
		List<Role> findAllList = mapper.findModelLinkRoleBySearch (role)  ;
		return findAllList;
	}

	public int fetchTotalNumberForSearchMolelLinkRole(Role role) {
		return mapper.fetchTotalNumberForSearchMolelLinkRole(role).intValue();
	}

	public List<Model> listUserAuthorizeById(int userId) {
		return mapper.listUserAuthorizeById(  userId );
	}

	private void filterMenuByModel( StringBuffer bf ,Menu m , List<Model> ms, boolean comma) {
		if ( m.isLeaf() ==false) {
			//递归处理
			bf.append("{text:'"+m.getText() +"' ,label:'" +m.getLabel() +"',leaf:"+m.isLeaf()  +",expanded: "+m.isExpanded() +", children:[\r\n		");
			 List<Menu> lm = m.getChildren();
			 for( int i=0 ; i<lm.size() ; i++){
				 filterMenuByModel(  bf, lm.get(i),ms ,comma);
				 if ( i < (lm.size() -1) && comma ){
					 bf.append(",\r\n");
					 comma =  false ;
				 }
			 }
			bf.append("]\r\n } , ");
		} else {
			if ( m.getLabel() !=null )
			for(Model md :ms) {
				if ( md.getUrl() !=null   && md.getUrl().toLowerCase().equals(m.getLabel().toLowerCase())){
					bf.append("{ text:'"+m.getText() +"' ,label:'" +m.getLabel() +"',leaf:"+m.isLeaf()  +"} ,");
					comma = true ;
				}
			}
		}
//		return "";
	}
	
	public String createtUserJsonMenuByModel( int userId ) {
		List<Model> ms = mapper.listUserAuthorizeById(  userId ) ; 

		StringBuffer bf = new StringBuffer();
		if (  userId ==0 ) {
				bf.append( ReadJsonMenu.readOriginContent() );
		} else {
			boolean comma = false ;
			Menu m =ReadJsonMenu.loadOrigniMenu();
			filterMenuByModel ( bf,m,ms,comma );
			String[]  strs = bf.toString().split("\r\n");
			bf = new StringBuffer();
			for(int i=0 ; i<strs.length ; i++) {
				if ( i == (strs.length-1) ){
					if ( strs[i].length()-2 >0 &&   strs[i].substring(strs[i].length()-2, strs[i].length()-1 ).equals(",") ){
//						System.out.println(   strs[i].substring(0,strs[i].length()-2)  );
						bf.append(   strs[i].substring(0,strs[i].length()-2) ).append("\r\n") ;
					}else{
						bf.append(   strs[i] ) .append("\r\n") ;
					}
				} else {
					if (  ( (strs[i].length()-2 ) > 0) && strs[i].substring(strs[i].length()-2, strs[i].length()-1).equals(",") ){
								bf.append(  strs[i].substring(0,strs[i].length()-2)+ strs[i].substring( strs[i].length()-1,   strs[i].length())).append("\r\n") ;
					}else{
						bf.append(   strs[i] ) .append("\r\n") ;
					}
				}
				
	//			System.out.println(strs[i].equals(","));
			}
		}
		String pref="Ext.define('KitchenSink.store.Examples', {\r\n"+
								"extend: 'Ext.data.TreeStore',\r\n"+
		   " root: {\r\n"+
		     "   expanded: true,\r\n"+
		     "   label :'Root',\r\n"+
		      "  children: [\r\n";
		
//		System.out.println(bf.toString());
		
		return  ( pref+bf.toString() +" \r\n ] \r\n } } );" );
	}
	
	

}
