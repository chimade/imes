package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.LabelMapper;
import com.chimade.mes.sys.model.Label;
import com.chimade.mes.sys.service.LabelService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class LabelServiceImpl implements LabelService {
	
	@Resource
	private LabelMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<Label> findAll() {
		List<Label> findAllList = mapper.findAll();
		return findAllList;
	}

	public Label findById(int id) {
		Label label = mapper.findById(id);
		return label;
	}

	public boolean save(Label label) {
		boolean f=true ;
		try {
			mapper.save(label);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(Label label) {
		return mapper.update(label);
	}

	public  int  fetchTotalNumberForSearch (Label label ) {
		return mapper.fetchTotalNumberForSearch(label).intValue();
	}
	
	public List<Label> findBySearch(Label label) {
		List<Label> findAllList = mapper.findBySearch (label)  ;
		return findAllList;
	}
	
	

}
