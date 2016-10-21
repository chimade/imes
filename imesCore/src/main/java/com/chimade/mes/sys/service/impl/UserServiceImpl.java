package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.apache.shiro.crypto.hash.Sha256Hash;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.UserMapper;
import com.chimade.mes.sys.model.User;
import com.chimade.mes.sys.service.UserService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class UserServiceImpl implements UserService {
	
	@Resource
	private UserMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<User> findAll() {
		List<User> findAllList = mapper.findAll();
		return findAllList;
	}

	public User findById(int id) {
		User user = mapper.findById(id);
		return user;
	}

	public boolean save(User user) {
		boolean f=true ;
		try {
			if ( user.getPassword() !=null &&  !"".equals(  user.getPassword() ))
				user.setPassword(new Sha256Hash(user.getPassword()).toHex());
			mapper.save(user);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(User user) {
		if ( user.getPassword() !=null &&  !"".equals(  user.getPassword() ))
			user.setPassword(new Sha256Hash(user.getPassword()).toHex());
		return mapper.update(user);
	}

	public  int  fetchTotalNumberForSearch (User user ) {
		return mapper.fetchTotalNumberForSearch(user).intValue();
	}
	
	public List<User> findBySearch(User user) {
		List<User> findAllList = mapper.findBySearch (user)  ;
		return findAllList;
	}

 
	public User getUserByLoginAccount(String loginAccount) {
		User user = mapper.findUserByLoginAccount( loginAccount );
		return user;
	}
	
	

}
