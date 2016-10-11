package com.chimade.mes.sys.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.chimade.mes.sys.model.PageExtjsGridData;
import com.chimade.mes.sys.model.User;
import com.chimade.mes.sys.service.UserService;

 

/**xx
 * 用户的控制层
 * @框架唯一的升级和技术支持地址：http://shop111863449.taobao.com
 */
@Controller
@RequestMapping("/sys/sysuser")
public class SysUserController  {

	private static final Log log = LogFactory.getLog(SysUserController.class);
	@Autowired
	private UserService userService;
//	@Resource
//	private SysUserService sysUserService;
//	@Resource
//	private AttachmentService attachmentService;
//	@Resource
//	private AuthorityService authorityService;
//	@Resourcepassword
//	private RoleService roleService;
//
//	private static SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	// 登录
		@RequestMapping("/login")
		public void login (HttpServletRequest request, HttpServletResponse response) throws IOException {
			
		}
		// 登出
		@RequestMapping("/logout")
		public void logout(HttpServletRequest request, HttpServletResponse response) throws IOException {
//			SecurityUtils.getSubject().logout();
			response.sendRedirect("/imes/login.jsp");
		}
	/** 以下方法是根据路径跳转到页面 **/

//	@RequestMapping("/sysuser")
//	public String sysuser(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/systemmanage/sysuser";
//	}
//
	@RequestMapping("/homepage")
	public String homepage(HttpServletRequest request, HttpServletResponse response) throws IOException {
		return "back/homepage";
	}
	
//	 @RequestMapping(method = RequestMethod.POST)
//	public String UserSave() {
//		return "";
//	}
	
	@RequestMapping(value = "/addUser", method = { RequestMethod.POST, RequestMethod.GET })
	public String addUser(@RequestBody User user,HttpServletRequest request){
		System.out.println( user.toString());
		if (user.getUserName() != null) 
		userService.save(user);
		return "redirect:/sys/user/getAllUser";
	}
	
	
	/**
	 * 获取所有用户列表
	 * @param request
	 * @return
	 */
	@RequestMapping("/getAllUser")
	public String getAllUser(HttpServletRequest request){
		List<User> findAll = userService.findAll();
		request.setAttribute("userList", findAll);
		return "/allUser";
	}
	
	/**
	 * 获取所有用户列表
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getUserBySearch", method = { RequestMethod.POST, RequestMethod.GET })
	public @ResponseBody    PageExtjsGridData<User>   getUserBySearch(@RequestBody User user,HttpServletRequest request){
//		public @ResponseBody  List<User>    getUserBySearch(@RequestBody User user,HttpServletRequest request){
		List<User> findAll = userService.findBySearch(  user );
		PageExtjsGridData<User> pd = new  PageExtjsGridData<User>( ); 
		pd.setGridDatas(findAll);
		int total = userService.fetchUserNumberBySearch(user);
		pd.setTotalProperty(  total  );
//		request.setAttribute("userList", findAll);
		return pd ;
	}
//
//	@RequestMapping("/dict")
//	public String dict(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/systemmanage/dict";
//	}
//	@RequestMapping("/ceshi")
//	public String ceshi(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/systemmanage/ceshi";
//	}
//	
//	
//	@RequestMapping("/userinfo")
//	public String userinfo(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/systemmanage/userinfo";
//	}
//	@RequestMapping("/role")
//	public String role(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/systemmanage/role";
//	}
//
//	@RequestMapping("/department")
//	public String department(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/systemmanage/department";
//	}
//
//	@RequestMapping("/mail")
//	public String mail(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/systemmanage/mail";
//	}
//
//	@RequestMapping("/information")
//	public String information(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/infomanage/information";
//	}
//
//	@RequestMapping("/authority")
//	public String authority(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/systemmanage/authority";
//	}
//
//	@RequestMapping("/typography")
//	public String typography(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/bootstrapexample/typography";
//	}
//
//	@RequestMapping("/uielements")
//	public String uielements(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/bootstrapexample/uielements";
//	}
//
//	@RequestMapping("/buttonsicon")
//	public String buttonsicon(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/bootstrapexample/buttonsicon";
//	}
//
//	@RequestMapping("/contentslider")
//	public String contentslider(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/bootstrapexample/contentslider";
//	}
//
//	@RequestMapping("/nestablelist")
//	public String nestablelist(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/bootstrapexample/nestablelist";
//	}
//
//	@RequestMapping("/jquerydatatables")
//	public String jquerydatatables(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/bootstrapexample/jquerydatatables";
//	}
//
//	@RequestMapping("/formelements")
//	public String formelements(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/bootstrapexample/formelements";
//	}
//
//	@RequestMapping("/formelements2")
//	public String formelements2(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/bootstrapexample/formelements2";
//	}
//
//	@RequestMapping("/wizardvalidation")
//	public String wizardvalidation(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/bootstrapexample/wizardvalidation";
//	}
//
//	@RequestMapping("/uiwidgets")
//	public String uiwidgets(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/bootstrapexample/uiwidgets";
//	}
//
//	@RequestMapping("/calendar")
//	public String calendar(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/bootstrapexample/calendar";
//	}
//
//	@RequestMapping("/gallery")
//	public String gallery(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/bootstrapexample/gallery";
//	}
//
//	@RequestMapping("/pricingtables")
//	public String pricingtables(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/bootstrapexample/pricingtables";
//	}
//
//	@RequestMapping("/invoice")
//	public String invoice(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/bootstrapexample/invoice";
//	}
//
//	@RequestMapping("/timeline")
//	public String timeline(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/bootstrapexample/timeline";
//	}
//
//	@RequestMapping("/faq")
//	public String faq(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/bootstrapexample/faq";
//	}
//
//	@RequestMapping("/grid")
//	public String grid(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/bootstrapexample/grid";
//	}
//
//	@RequestMapping("/charts")
//	public String charts(HttpServletRequest request, HttpServletResponse response) throws IOException {
//		return "back/chartandreport/charts";
//	}
//
	@RequestMapping("/callError404")
	public String callError404(HttpServletRequest request, HttpServletResponse response) throws IOException {
		return "redirect:/sys/sysuser/error404";
	}

	@RequestMapping("/error404")
	public String error404(HttpServletRequest request, HttpServletResponse response) throws IOException {
		return "back/error404";
	}

	@RequestMapping("/callError500")
	public String callError500(HttpServletRequest request, HttpServletResponse response) throws IOException {
		return "redirect:/sys/sysuser/error500";
	}

	@RequestMapping("/error500")
	public String error500(HttpServletRequest request, HttpServletResponse response) throws IOException {
		return "back/error500";
	}

	@RequestMapping("/callUnauthorized")
	public String callUnauthorized(HttpServletRequest request, HttpServletResponse response) throws IOException {
		return "redirect:/sys/sysuser/unauthorized";
	}

	@RequestMapping("/unauthorized")
	public String unauthorized(HttpServletRequest request, HttpServletResponse response) throws IOException {
		return "back/unauthorized";
	}
 

}
