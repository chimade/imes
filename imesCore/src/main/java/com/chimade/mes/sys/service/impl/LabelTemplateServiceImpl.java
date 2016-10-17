package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.LabelTemplateMapper;
import com.chimade.mes.sys.model.LabelTemplate;
import com.chimade.mes.sys.service.LabelTemplateService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class LabelTemplateServiceImpl implements LabelTemplateService {
	
	@Resource
	private LabelTemplateMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<LabelTemplate> findAll() {
		List<LabelTemplate> findAllList = mapper.findAll();
		return findAllList;
	}

	public LabelTemplate findById(int id) {
		LabelTemplate labelTemplate = mapper.findById(id);
		return labelTemplate;
	}

	public boolean save(LabelTemplate labelTemplate) {
		boolean f=true ;
		try {
			mapper.save(labelTemplate);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(LabelTemplate labelTemplate) {
		return mapper.update(labelTemplate);
	}

	public  int  fetchTotalNumberForSearch (LabelTemplate labelTemplate ) {
		return mapper.fetchTotalNumberForSearch(labelTemplate).intValue();
	}
	
	public List<LabelTemplate> findBySearch(LabelTemplate labelTemplate) {
		List<LabelTemplate> findAllList = mapper.findBySearch (labelTemplate)  ;
		return findAllList;
	}
	
	

}
