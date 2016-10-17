package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.PartMapper;
import com.chimade.mes.sys.model.Part;
import com.chimade.mes.sys.service.PartService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class PartServiceImpl implements PartService {
	
	@Resource
	private PartMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<Part> findAll() {
		List<Part> findAllList = mapper.findAll();
		return findAllList;
	}

	public Part findById(int id) {
		Part part = mapper.findById(id);
		return part;
	}

	public boolean save(Part part) {
		boolean f=true ;
		try {
			mapper.save(part);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(Part part) {
		return mapper.update(part);
	}

	public  int  fetchTotalNumberForSearch (Part part ) {
		return mapper.fetchTotalNumberForSearch(part).intValue();
	}
	
	public List<Part> findBySearch(Part part) {
		List<Part> findAllList = mapper.findBySearch (part)  ;
		return findAllList;
	}
	
	

}
