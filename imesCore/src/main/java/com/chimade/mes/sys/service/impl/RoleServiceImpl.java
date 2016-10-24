package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.RoleMapper;
import com.chimade.mes.sys.model.Role;
import com.chimade.mes.sys.service.RoleService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class RoleServiceImpl implements RoleService {
	
	@Resource
	private RoleMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<Role> findAll() {
		List<Role> findAllList = mapper.findAll();
		return findAllList;
	}

	public Role findById(int id) {
		Role baseRole = mapper.findById(id);
		return baseRole;
	}

	public boolean save(Role baseRole) {
		boolean f=true ;
		try {
			mapper.save(baseRole);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(Role baseRole) {
		return mapper.update(baseRole);
	}

	public  int  fetchTotalNumberForSearch (Role baseRole ) {
		return mapper.fetchTotalNumberForSearch(baseRole).intValue();
	}
	
	public List<Role> findBySearch(Role baseRole) {
		List<Role> findAllList = mapper.findBySearch (baseRole)  ;
		return findAllList;
	}
	
	

}
