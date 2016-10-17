package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.PartFamilyMapper;
import com.chimade.mes.sys.model.PartFamily;
import com.chimade.mes.sys.service.PartFamilyService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class PartFamilyServiceImpl implements PartFamilyService {
	
	@Resource
	private PartFamilyMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<PartFamily> findAll() {
		List<PartFamily> findAllList = mapper.findAll();
		return findAllList;
	}

	public PartFamily findById(int id) {
		PartFamily partFamily = mapper.findById(id);
		return partFamily;
	}

	public boolean save(PartFamily partFamily) {
		boolean f=true ;
		try {
			mapper.save(partFamily);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(PartFamily partFamily) {
		return mapper.update(partFamily);
	}

	public  int  fetchTotalNumberForSearch (PartFamily partFamily ) {
		return mapper.fetchTotalNumberForSearch(partFamily).intValue();
	}
	
	public List<PartFamily> findBySearch(PartFamily partFamily) {
		List<PartFamily> findAllList = mapper.findBySearch (partFamily)  ;
		return findAllList;
	}
	
	

}
