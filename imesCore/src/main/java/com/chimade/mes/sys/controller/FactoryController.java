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
import com.chimade.mes.sys.model.Factory;
import com.chimade.mes.sys.service.FactoryService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class FactoryController {

	private static final Log log = LogFactory.getLog(FactoryController.class);
	
	@Autowired
	private FactoryService factoryService;
	 
	@RequestMapping(value = "/factory", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addFactory(@RequestBody Factory factory,HttpServletRequest request){
		boolean b = factoryService.save(factory);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_ADD_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_ADD_FAILURE );
		}
		return mb ;
	}
	
	@RequestMapping(value="/factory/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deleteFactory(@PathVariable Integer id,HttpServletRequest request){
		boolean b = factoryService.delete(id);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_FAILURE );
		}
		return mb ;
	}
 
	@RequestMapping(value="/factory/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updateFactory(@PathVariable Integer id ,@RequestBody Factory factory,HttpServletRequest request){
		boolean b = factoryService.update(factory);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_UPDATE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_UPDATE_FAILURE );
		}
		return mb ;
	}
	
	@RequestMapping(value = "/factory/factorys", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<Factory>   getFactoryBySearch(@RequestBody Factory factory,HttpServletRequest request){
		List<Factory> findAll = factoryService.findBySearch(  factory );
		PageExtjsGridData<Factory> pd = new  PageExtjsGridData<Factory>( ); 
		pd.setGridDatas(findAll);
		int total = factoryService.fetchTotalNumberForSearch(factory);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
