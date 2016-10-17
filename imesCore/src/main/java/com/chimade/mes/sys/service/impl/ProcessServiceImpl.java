package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.ProcessMapper;
import com.chimade.mes.sys.model.Process;
import com.chimade.mes.sys.service.ProcessService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class ProcessServiceImpl implements ProcessService {
	
	@Resource
	private ProcessMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<Process> findAll() {
		List<Process> findAllList = mapper.findAll();
		return findAllList;
	}

	public Process findById(int id) {
		Process process = mapper.findById(id);
		return process;
	}

	public boolean save(Process process) {
		boolean f=true ;
		try {
			mapper.save(process);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(Process process) {
		return mapper.update(process);
	}

	public  int  fetchTotalNumberForSearch (Process process ) {
		return mapper.fetchTotalNumberForSearch(process).intValue();
	}
	
	public List<Process> findBySearch(Process process) {
		List<Process> findAllList = mapper.findBySearch (process)  ;
		return findAllList;
	}
	
	

}
