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
import com.chimade.mes.sys.model.PartFamily;
import com.chimade.mes.sys.service.PartFamilyService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class PartFamilyController {

	private static final Log log = LogFactory.getLog(PartFamilyController.class);
	
	@Autowired
	private PartFamilyService partFamilyService;
	 
	@RequestMapping(value = "/partFamily", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addPartFamily(@RequestBody PartFamily partFamily,HttpServletRequest request){
		boolean b = partFamilyService.save(partFamily);
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
	
	@RequestMapping(value="/partFamily/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deletePartFamily(@PathVariable Integer id,HttpServletRequest request){
		boolean b = partFamilyService.delete(id);
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
 
	@RequestMapping(value="/partFamily/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updatePartFamily(@PathVariable Integer id ,@RequestBody PartFamily partFamily,HttpServletRequest request){
		boolean b = partFamilyService.update(partFamily);
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
	
	@RequestMapping(value = "/partFamily/partFamilys", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<PartFamily>   getPartFamilyBySearch(@RequestBody PartFamily partFamily,HttpServletRequest request){
		List<PartFamily> findAll = partFamilyService.findBySearch(  partFamily );
		PageExtjsGridData<PartFamily> pd = new  PageExtjsGridData<PartFamily>( ); 
		pd.setGridDatas(findAll);
		int total = partFamilyService.fetchTotalNumberForSearch(partFamily);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
