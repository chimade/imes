package com.chimade.mes.sys.service;

import java.util.List;

public interface BaseService<T> {
	boolean save(T  t);
	boolean update(T t);
	boolean delete(int id);
	T  findById(int id);
	List<T> findAll();
	List<T> findBySearch(T t);
	int fetchTotalNumberForSearch(T t);
}
