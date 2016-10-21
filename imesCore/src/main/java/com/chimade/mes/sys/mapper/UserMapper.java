package com.chimade.mes.sys.mapper;

import com.chimade.mes.sys.model.User;

 

public interface UserMapper extends BaseMapper<User> {

	User findUserByLoginAccount(String loginAccount);

//	void save(User user);
//	
//	boolean update(User user);
//	
//	boolean delete(int id);
//	
//	User findById(int id);
//	
//	List<User> findAll();
//	
//	List<User> findUserBySearch (   User user );
//	
//	Integer  fetchTotalNumberForSearch (   User user );
	
}
