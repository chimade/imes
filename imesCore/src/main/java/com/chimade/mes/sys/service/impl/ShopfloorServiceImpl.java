package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.ShopfloorMapper;
import com.chimade.mes.sys.model.Shopfloor;
import com.chimade.mes.sys.service.ShopfloorService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class ShopfloorServiceImpl implements ShopfloorService {
	
	@Resource
	private ShopfloorMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<Shopfloor> findAll() {
		List<Shopfloor> findAllList = mapper.findAll();
		return findAllList;
	}

	public Shopfloor findById(int id) {
		Shopfloor shopfloor = mapper.findById(id);
		return shopfloor;
	}

	public boolean save(Shopfloor shopfloor) {
		boolean f=true ;
		try {
			mapper.save(shopfloor);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(Shopfloor shopfloor) {
		return mapper.update(shopfloor);
	}

	public  int  fetchTotalNumberForSearch (Shopfloor shopfloor ) {
		return mapper.fetchTotalNumberForSearch(shopfloor).intValue();
	}
	
	public List<Shopfloor> findBySearch(Shopfloor shopfloor) {
		List<Shopfloor> findAllList = mapper.findBySearch (shopfloor)  ;
		return findAllList;
	}
	
	

}
