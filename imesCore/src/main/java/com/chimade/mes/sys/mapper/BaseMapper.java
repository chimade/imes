package com.chimade.mes.sys.mapper;

import java.util.List;

public interface BaseMapper<T> {
	
	void save(T t);
	
	boolean update(T t);
	
	boolean delete(int id);
	
	T findById(int id);
	
	List<T> findAll();
	
	List<T> findBySearch (   T t );
	
	Integer  fetchTotalNumberForSearch (   T  t );
	
}
