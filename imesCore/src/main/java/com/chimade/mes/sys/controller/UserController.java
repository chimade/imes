package com.chimade.mes.sys.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.shiro.crypto.hash.Sha256Hash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chimade.mes.sys.model.PageExtjsGridData;
import com.chimade.mes.sys.model.PageReturnMsgBean;
import com.chimade.mes.sys.model.User;
import com.chimade.mes.sys.service.UserService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class UserController {

	private static final Log log = LogFactory.getLog(UserController.class);
	
	@Autowired
	private UserService userService;
//	@RequestMapping(value = "/user", method = { RequestMethod.POST, RequestMethod.GET })
//	public String addUser( HttpServletRequest request){
//		System.out.println("run here..");
//		return "redirect:/sys/user/getAllUser";
//	}
//	
	 
	@RequestMapping(value = "/user", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addUser(@RequestBody User user,HttpServletRequest request){
		
		boolean b = userService.save(user);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_ADD_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_ADD_FAILURE );
		}
		return mb ;
	}
	
	@RequestMapping(value="/user/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deleteUser(@PathVariable Integer id,HttpServletRequest request){
		boolean b = userService.delete(id);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_FAILURE );
		}
		return mb ;
	}
 
	@RequestMapping(value="/user/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updateUser(@PathVariable Integer id ,@RequestBody User user,HttpServletRequest request){
		boolean b = userService.update(user);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_UPDATE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_UPDATE_FAILURE );
		}
		return mb ;
	}
	
	@RequestMapping(value = "/user/users", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<User>   getUserBySearch(@RequestBody User user,HttpServletRequest request){
		List<User> findAll = userService.findBySearch(  user );
		PageExtjsGridData<User> pd = new  PageExtjsGridData<User>( ); 
		pd.setGridDatas(findAll);
		int total = userService.fetchTotalNumberForSearch(user);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
	@RequestMapping( value="/login",method = { RequestMethod.POST })
	public  @ResponseBody   PageReturnMsgBean login(@RequestBody  User loginUser, HttpServletRequest request, HttpServletResponse response) throws IOException {
		PageReturnMsgBean mb = new PageReturnMsgBean();
		mb.setResultFlag(false);
		if ( loginUser == null   ) {
			mb.setMsg("请填写登陆表格");
			return mb ;
		}
		
		User sysUser = userService.getUserByLoginAccount(  loginUser.getLoginAccount() ) ;
		if (sysUser == null || sysUser.getStatus()== User.DIS_ENABLED) { // 用户名有误或已被禁用
			mb.setMsg("登陆账号不存在或已被禁止");
			return mb;
		}
		
		if (!sysUser.getPassword().equals(new Sha256Hash(loginUser.getPassword()).toHex())) { // 密码错误
			mb.setMsg("密码不正确");
			return mb;
		}
//		sysUser.setLastLoginTime(new Date());
//		sysUserService.update(sysUser);
		request.getSession().setAttribute(SystemContant.SESSION_SYS_USER, sysUser);
		mb.setResultFlag(true);
		return mb;
 
	}

	@RequestMapping(value="/user/{loginAccount}",method=RequestMethod.GET)
	public @ResponseBody   PageReturnMsgBean   checkAccoutName(@PathVariable String   loginAccount ,HttpServletRequest request){
		PageReturnMsgBean mb = new PageReturnMsgBean();
		mb.setResultFlag( true );
		if (  loginAccount != null  && !"".equals( loginAccount ) ) {
			User sysUser  = userService.getUserByLoginAccount( loginAccount );
			if ( sysUser != null  ){
				mb.setResultFlag(true);
				mb.setMsg(  SystemContant.CONTROLLER_FIND_SUCCESS );
			} else {
				mb.setResultFlag(false);
				mb.setMsg(  SystemContant.CONTROLLER_FIND_FAILURE );
			}
		} else {
			mb.setMsg(   "用户名不能为空" );
		}
		return mb ;
	}
}