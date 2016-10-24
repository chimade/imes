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
import com.chimade.mes.sys.model.Role;
import com.chimade.mes.sys.service.RoleService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class RoleController {

	private static final Log log = LogFactory.getLog(RoleController.class);
	
	@Autowired
	private RoleService baseRoleService;
	 
	@RequestMapping(value = "/baseRole", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addRole(@RequestBody Role baseRole,HttpServletRequest request){
		boolean b = baseRoleService.save(baseRole);
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
	
	@RequestMapping(value="/baseRole/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deleteRole(@PathVariable Integer id,HttpServletRequest request){
		boolean b = baseRoleService.delete(id);
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
 
	@RequestMapping(value="/baseRole/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updateRole(@PathVariable Integer id ,@RequestBody Role baseRole,HttpServletRequest request){
		boolean b = baseRoleService.update(baseRole);
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
	
	@RequestMapping(value = "/baseRole/baseRoles", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<Role>   getRoleBySearch(@RequestBody Role baseRole,HttpServletRequest request){
		List<Role> findAll = baseRoleService.findBySearch(  baseRole );
		PageExtjsGridData<Role> pd = new  PageExtjsGridData<Role>( ); 
		pd.setGridDatas(findAll);
		int total = baseRoleService.fetchTotalNumberForSearch(baseRole);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
