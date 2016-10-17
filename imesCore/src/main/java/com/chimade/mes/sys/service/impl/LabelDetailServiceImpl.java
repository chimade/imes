package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.LabelDetailMapper;
import com.chimade.mes.sys.model.LabelDetail;
import com.chimade.mes.sys.service.LabelDetailService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class LabelDetailServiceImpl implements LabelDetailService {
	
	@Resource
	private LabelDetailMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<LabelDetail> findAll() {
		List<LabelDetail> findAllList = mapper.findAll();
		return findAllList;
	}

	public LabelDetail findById(int id) {
		LabelDetail labelDetail = mapper.findById(id);
		return labelDetail;
	}

	public boolean save(LabelDetail labelDetail) {
		boolean f=true ;
		try {
			mapper.save(labelDetail);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(LabelDetail labelDetail) {
		return mapper.update(labelDetail);
	}

	public  int  fetchTotalNumberForSearch (LabelDetail labelDetail ) {
		return mapper.fetchTotalNumberForSearch(labelDetail).intValue();
	}
	
	public List<LabelDetail> findBySearch(LabelDetail labelDetail) {
		List<LabelDetail> findAllList = mapper.findBySearch (labelDetail)  ;
		return findAllList;
	}
	
	

}
