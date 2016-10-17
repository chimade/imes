package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.CompanyMapper;
import com.chimade.mes.sys.model.Company;
import com.chimade.mes.sys.service.CompanyService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class CompanyServiceImpl implements CompanyService {
	
	@Resource
	private CompanyMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<Company> findAll() {
		List<Company> findAllList = mapper.findAll();
		return findAllList;
	}

	public Company findById(int id) {
		Company company = mapper.findById(id);
		return company;
	}

	public boolean save(Company company) {
		boolean f=true ;
		try {
			mapper.save(company);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(Company company) {
		return mapper.update(company);
	}

	public  int  fetchTotalNumberForSearch (Company company ) {
		return mapper.fetchTotalNumberForSearch(company).intValue();
	}
	
	public List<Company> findBySearch(Company company) {
		List<Company> findAllList = mapper.findBySearch (company)  ;
		return findAllList;
	}
	
	

}
