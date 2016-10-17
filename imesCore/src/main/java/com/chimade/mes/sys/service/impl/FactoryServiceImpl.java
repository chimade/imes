package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.FactoryMapper;
import com.chimade.mes.sys.model.Factory;
import com.chimade.mes.sys.service.FactoryService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class FactoryServiceImpl implements FactoryService {
	
	@Resource
	private FactoryMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<Factory> findAll() {
		List<Factory> findAllList = mapper.findAll();
		return findAllList;
	}

	public Factory findById(int id) {
		Factory factory = mapper.findById(id);
		return factory;
	}

	public boolean save(Factory factory) {
		boolean f=true ;
		try {
			mapper.save(factory);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(Factory factory) {
		return mapper.update(factory);
	}

	public  int  fetchTotalNumberForSearch (Factory factory ) {
		return mapper.fetchTotalNumberForSearch(factory).intValue();
	}
	
	public List<Factory> findBySearch(Factory factory) {
		List<Factory> findAllList = mapper.findBySearch (factory)  ;
		return findAllList;
	}
	
	

}
