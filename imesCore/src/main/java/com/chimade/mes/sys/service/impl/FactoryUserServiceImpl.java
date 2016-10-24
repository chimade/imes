package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.FactoryUserMapper;
import com.chimade.mes.sys.model.FactoryUser;
import com.chimade.mes.sys.service.FactoryUserService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class FactoryUserServiceImpl implements FactoryUserService {
	
	@Resource
	private FactoryUserMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<FactoryUser> findAll() {
		List<FactoryUser> findAllList = mapper.findAll();
		return findAllList;
	}

	public FactoryUser findById(int id) {
		FactoryUser baseFactoryUser = mapper.findById(id);
		return baseFactoryUser;
	}

	public boolean save(FactoryUser baseFactoryUser) {
		boolean f=true ;
		try {
			mapper.save(baseFactoryUser);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(FactoryUser baseFactoryUser) {
		return mapper.update(baseFactoryUser);
	}

	public  int  fetchTotalNumberForSearch (FactoryUser baseFactoryUser ) {
		return mapper.fetchTotalNumberForSearch(baseFactoryUser).intValue();
	}
	
	public List<FactoryUser> findBySearch(FactoryUser baseFactoryUser) {
		List<FactoryUser> findAllList = mapper.findBySearch (baseFactoryUser)  ;
		return findAllList;
	}
	
	

}
