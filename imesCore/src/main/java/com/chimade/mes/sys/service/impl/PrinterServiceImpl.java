package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.PrinterMapper;
import com.chimade.mes.sys.model.Printer;
import com.chimade.mes.sys.service.PrinterService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class PrinterServiceImpl implements PrinterService {
	
	@Resource
	private PrinterMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<Printer> findAll() {
		List<Printer> findAllList = mapper.findAll();
		return findAllList;
	}

	public Printer findById(int id) {
		Printer printer = mapper.findById(id);
		return printer;
	}

	public boolean save(Printer printer) {
		boolean f=true ;
		try {
			mapper.save(printer);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(Printer printer) {
		return mapper.update(printer);
	}

	public  int  fetchTotalNumberForSearch (Printer printer ) {
		return mapper.fetchTotalNumberForSearch(printer).intValue();
	}
	
	public List<Printer> findBySearch(Printer printer) {
		List<Printer> findAllList = mapper.findBySearch (printer)  ;
		return findAllList;
	}
	
	

}
