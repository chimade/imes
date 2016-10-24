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
import com.chimade.mes.sys.model.AuthorizeModelAction;
import com.chimade.mes.sys.service.AuthorizeModelActionService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class AuthorizeModelActionController {

	private static final Log log = LogFactory.getLog(AuthorizeModelActionController.class);
	
	@Autowired
	private AuthorizeModelActionService baseAuthorizeModelActionService;
	 
	@RequestMapping(value = "/baseAuthorizeModelAction", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addAuthorizeModelAction(@RequestBody AuthorizeModelAction baseAuthorizeModelAction,HttpServletRequest request){
		boolean b = baseAuthorizeModelActionService.save(baseAuthorizeModelAction);
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
	
	@RequestMapping(value="/baseAuthorizeModelAction/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deleteAuthorizeModelAction(@PathVariable Integer id,HttpServletRequest request){
		boolean b = baseAuthorizeModelActionService.delete(id);
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
 
	@RequestMapping(value="/baseAuthorizeModelAction/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updateAuthorizeModelAction(@PathVariable Integer id ,@RequestBody AuthorizeModelAction baseAuthorizeModelAction,HttpServletRequest request){
		boolean b = baseAuthorizeModelActionService.update(baseAuthorizeModelAction);
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
	
	@RequestMapping(value = "/baseAuthorizeModelAction/baseAuthorizeModelActions", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<AuthorizeModelAction>   getAuthorizeModelActionBySearch(@RequestBody AuthorizeModelAction baseAuthorizeModelAction,HttpServletRequest request){
		List<AuthorizeModelAction> findAll = baseAuthorizeModelActionService.findBySearch(  baseAuthorizeModelAction );
		PageExtjsGridData<AuthorizeModelAction> pd = new  PageExtjsGridData<AuthorizeModelAction>( ); 
		pd.setGridDatas(findAll);
		int total = baseAuthorizeModelActionService.fetchTotalNumberForSearch(baseAuthorizeModelAction);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
