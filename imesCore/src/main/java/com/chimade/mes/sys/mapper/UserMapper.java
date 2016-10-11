package com.chimade.mes.sys.mapper;

import java.util.List;

import com.chimade.mes.sys.model.User;

 

public interface UserMapper {

	void save(User user);
	
	boolean update(User user);
	
	boolean delete(int id);
	
	User findById(int id);
	
	List<User> findAll();
	
	List<User> findUserBySearch (   User user );
	
	Integer  fetchUserNumberBySearch (   User user );
}
