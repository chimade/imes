package com.chimade.mes.sys.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.chimade.mes.sys.mapper.LocationMapper;
import com.chimade.mes.sys.model.Location;
import com.chimade.mes.sys.service.LocationService;
 


@Service
@Transactional  //此处不再进行创建SqlSession和提交事务，都已交由spring去管理了。
public class LocationServiceImpl implements LocationService {
	
	@Resource
	private LocationMapper mapper;

	public boolean delete(int id) {
		return mapper.delete(id);
	}

	public List<Location> findAll() {
		List<Location> findAllList = mapper.findAll();
		return findAllList;
	}

	public Location findById(int id) {
		Location location = mapper.findById(id);
		return location;
	}

	public boolean save(Location location) {
		boolean f=true ;
		try {
			mapper.save(location);
		}catch(Exception e) {
			f = false ;
		}
		return f ;
	}

	public boolean update(Location location) {
		return mapper.update(location);
	}

	public  int  fetchTotalNumberForSearch (Location location ) {
		return mapper.fetchTotalNumberForSearch(location).intValue();
	}
	
	public List<Location> findBySearch(Location location) {
		List<Location> findAllList = mapper.findBySearch (location)  ;
		return findAllList;
	}
	
	

}
