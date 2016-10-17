package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.LineMapper;
import com.chimade.mes.sys.model.Line;
import com.chimade.mes.sys.service.LineService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class LineServiceImpl implements LineService {
	
	@Resource
	private LineMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<Line> findAll() {
		List<Line> findAllList = mapper.findAll();
		return findAllList;
	}

	public Line findById(int id) {
		Line line = mapper.findById(id);
		return line;
	}

	public boolean save(Line line) {
		boolean f=true ;
		try {
			mapper.save(line);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(Line line) {
		return mapper.update(line);
	}

	public  int  fetchTotalNumberForSearch (Line line ) {
		return mapper.fetchTotalNumberForSearch(line).intValue();
	}
	
	public List<Line> findBySearch(Line line) {
		List<Line> findAllList = mapper.findBySearch (line)  ;
		return findAllList;
	}
	
	

}
