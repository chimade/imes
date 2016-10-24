package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.ModelActionMapper;
import com.chimade.mes.sys.model.ModelAction;
import com.chimade.mes.sys.service.ModelActionService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class ModelActionServiceImpl implements ModelActionService {
	
	@Resource
	private ModelActionMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<ModelAction> findAll() {
		List<ModelAction> findAllList = mapper.findAll();
		return findAllList;
	}

	public ModelAction findById(int id) {
		ModelAction baseModelAction = mapper.findById(id);
		return baseModelAction;
	}

	public boolean save(ModelAction baseModelAction) {
		boolean f=true ;
		try {
			mapper.save(baseModelAction);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(ModelAction baseModelAction) {
		return mapper.update(baseModelAction);
	}

	public  int  fetchTotalNumberForSearch (ModelAction baseModelAction ) {
		return mapper.fetchTotalNumberForSearch(baseModelAction).intValue();
	}
	
	public List<ModelAction> findBySearch(ModelAction baseModelAction) {
		List<ModelAction> findAllList = mapper.findBySearch (baseModelAction)  ;
		return findAllList;
	}
	
	

}
