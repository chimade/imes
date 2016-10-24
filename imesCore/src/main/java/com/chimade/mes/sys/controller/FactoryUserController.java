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
import com.chimade.mes.sys.model.FactoryUser;
import com.chimade.mes.sys.service.FactoryUserService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class FactoryUserController {

	private static final Log log = LogFactory.getLog(FactoryUserController.class);
	
	@Autowired
	private FactoryUserService baseFactoryUserService;
	 
	@RequestMapping(value = "/baseFactoryUser", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addFactoryUser(@RequestBody FactoryUser baseFactoryUser,HttpServletRequest request){
		boolean b = baseFactoryUserService.save(baseFactoryUser);
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
	
	@RequestMapping(value="/baseFactoryUser/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deleteFactoryUser(@PathVariable Integer id,HttpServletRequest request){
		boolean b = baseFactoryUserService.delete(id);
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
 
	@RequestMapping(value="/baseFactoryUser/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updateFactoryUser(@PathVariable Integer id ,@RequestBody FactoryUser baseFactoryUser,HttpServletRequest request){
		boolean b = baseFactoryUserService.update(baseFactoryUser);
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
	
	@RequestMapping(value = "/baseFactoryUser/baseFactoryUsers", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<FactoryUser>   getFactoryUserBySearch(@RequestBody FactoryUser baseFactoryUser,HttpServletRequest request){
		List<FactoryUser> findAll = baseFactoryUserService.findBySearch(  baseFactoryUser );
		PageExtjsGridData<FactoryUser> pd = new  PageExtjsGridData<FactoryUser>( ); 
		pd.setGridDatas(findAll);
		int total = baseFactoryUserService.fetchTotalNumberForSearch(baseFactoryUser);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
