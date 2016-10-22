package com.chimade.mes.sys.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chimade.mes.sys.model.PageExtjsGridData;
import com.chimade.mes.sys.model.PageReturnMsgBean;
import com.chimade.mes.sys.model.Location;
import com.chimade.mes.sys.service.LocationService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class LocationController {

	private static final Log log = LogFactory.getLog(LocationController.class);
	
	@Autowired
	private LocationService locationService;
	 
	@RequestMapping(value = "/location", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addLocation(@RequestBody Location location,HttpServletRequest request){
		boolean b = locationService.save(location);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setSuccess(true);
			mb.setMsg(  SystemContant.CONTROLLER_ADD_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_ADD_FAILURE );
		}
		return mb ;
	}
	
	@RequestMapping(value="/location/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deleteLocation(@PathVariable Integer id,HttpServletRequest request){
		boolean b = locationService.delete(id);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setSuccess(true);
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_FAILURE );
		}
		return mb ;
	}
 
	@RequestMapping(value="/location/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updateLocation(@PathVariable Integer id ,@RequestBody Location location,HttpServletRequest request){
		boolean b = locationService.update(location);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setSuccess(true);
			mb.setMsg(  SystemContant.CONTROLLER_UPDATE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_UPDATE_FAILURE );
		}
		return mb ;
	}
	
	@RequestMapping(value = "/location/locations", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<Location>   getLocationBySearch(@RequestBody Location location,HttpServletRequest request){
		List<Location> findAll = locationService.findBySearch(  location );
		PageExtjsGridData<Location> pd = new  PageExtjsGridData<Location>( ); 
		pd.setGridDatas(findAll);
		int total = locationService.fetchTotalNumberForSearch(location);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
