package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.ModelMapper;
import com.chimade.mes.sys.model.Model;
import com.chimade.mes.sys.service.ModelService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class ModelServiceImpl implements ModelService {
	
	@Resource
	private ModelMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<Model> findAll() {
		List<Model> findAllList = mapper.findAll();
		return findAllList;
	}

	public Model findById(int id) {
		Model baseModel = mapper.findById(id);
		return baseModel;
	}

	public boolean save(Model baseModel) {
		boolean f=true ;
		try {
			mapper.save(baseModel);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(Model baseModel) {
		return mapper.update(baseModel);
	}

	public  int  fetchTotalNumberForSearch (Model baseModel ) {
		return mapper.fetchTotalNumberForSearch(baseModel).intValue();
	}
	
	public List<Model> findBySearch(Model baseModel) {
		List<Model> findAllList = mapper.findBySearch (baseModel)  ;
		return findAllList;
	}
	
	

}
