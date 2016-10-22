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
import com.chimade.mes.sys.model.Company;
import com.chimade.mes.sys.service.CompanyService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class CompanyController {

	private static final Log log = LogFactory.getLog(CompanyController.class);
	
	@Autowired
	private CompanyService companyService;
	 
	@RequestMapping(value = "/company", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addCompany(@RequestBody Company company,HttpServletRequest request){
		boolean b = companyService.save(company);
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
	
	@RequestMapping(value="/company/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deleteCompany(@PathVariable Integer id,HttpServletRequest request){
		boolean b = companyService.delete(id);
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
 
	@RequestMapping(value="/company/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updateCompany(@PathVariable Integer id ,@RequestBody Company company,HttpServletRequest request){
		boolean b = companyService.update(company);
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
	
	@RequestMapping(value = "/company/companys", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<Company>   getCompanyBySearch(@RequestBody Company company,HttpServletRequest request){
		List<Company> findAll = companyService.findBySearch(  company );
		PageExtjsGridData<Company> pd = new  PageExtjsGridData<Company>( ); 
		pd.setGridDatas(findAll);
		int total = companyService.fetchTotalNumberForSearch(company);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
