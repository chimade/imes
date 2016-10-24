package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.ActionMapper;
import com.chimade.mes.sys.model.Action;
import com.chimade.mes.sys.service.ActionService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class ActionServiceImpl implements ActionService {
	
	@Resource
	private ActionMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<Action> findAll() {
		List<Action> findAllList = mapper.findAll();
		return findAllList;
	}

	public Action findById(int id) {
		Action baseAction = mapper.findById(id);
		return baseAction;
	}

	public boolean save(Action baseAction) {
		boolean f=true ;
		try {
			mapper.save(baseAction);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(Action baseAction) {
		return mapper.update(baseAction);
	}

	public  int  fetchTotalNumberForSearch (Action baseAction ) {
		return mapper.fetchTotalNumberForSearch(baseAction).intValue();
	}
	
	public List<Action> findBySearch(Action baseAction) {
		List<Action> findAllList = mapper.findBySearch (baseAction)  ;
		return findAllList;
	}
	
	

}
