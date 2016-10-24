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
import com.chimade.mes.sys.model.Action;
import com.chimade.mes.sys.service.ActionService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class ActionController {

	private static final Log log = LogFactory.getLog(ActionController.class);
	
	@Autowired
	private ActionService baseActionService;
	 
	@RequestMapping(value = "/baseAction", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addAction(@RequestBody Action baseAction,HttpServletRequest request){
		boolean b = baseActionService.save(baseAction);
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
	
	@RequestMapping(value="/baseAction/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deleteAction(@PathVariable Integer id,HttpServletRequest request){
		boolean b = baseActionService.delete(id);
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
 
	@RequestMapping(value="/baseAction/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updateAction(@PathVariable Integer id ,@RequestBody Action baseAction,HttpServletRequest request){
		boolean b = baseActionService.update(baseAction);
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
	
	@RequestMapping(value = "/baseAction/baseActions", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<Action>   getActionBySearch(@RequestBody Action baseAction,HttpServletRequest request){
		List<Action> findAll = baseActionService.findBySearch(  baseAction );
		PageExtjsGridData<Action> pd = new  PageExtjsGridData<Action>( ); 
		pd.setGridDatas(findAll);
		int total = baseActionService.fetchTotalNumberForSearch(baseAction);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
