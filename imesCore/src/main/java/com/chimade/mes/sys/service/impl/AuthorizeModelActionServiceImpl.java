package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.AuthorizeModelActionMapper;
import com.chimade.mes.sys.model.AuthorizeModelAction;
import com.chimade.mes.sys.model.User;
import com.chimade.mes.sys.service.AuthorizeModelActionService;
 


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

	@Override
	public List<User> findModelLinkUserBySearch(User user) {
		List<User> findAllList = mapper.findModelLinkUserBySearch (user)  ;
		return findAllList;
	}

 
	public int fetchTotalNumberForSearchMolelLinkUser(User user) {
		return mapper.fetchTotalNumberForSearchMolelLinkUser(user).intValue();
	}
	
	

}
