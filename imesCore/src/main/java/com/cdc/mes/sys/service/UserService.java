package com.cdc.mes.sys.service;

import java.util.List;

import com.cdc.mes.sys.model.User;

 

public interface UserService {
	void save(User user);
	boolean update(User user);
	boolean delete(int id);
	User findById(int id);
	List<User> findAll();
	List<User> findBySearch(User user);
	int fetchUserNumberBySearch(User user);
	
}
