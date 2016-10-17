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
import com.chimade.mes.sys.model.Part;
import com.chimade.mes.sys.service.PartService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class PartController {

	private static final Log log = LogFactory.getLog(PartController.class);
	
	@Autowired
	private PartService partService;
	 
	@RequestMapping(value = "/part", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addPart(@RequestBody Part part,HttpServletRequest request){
		boolean b = partService.save(part);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_ADD_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_ADD_FAILURE );
		}
		return mb ;
	}
	
	@RequestMapping(value="/part/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deletePart(@PathVariable Integer id,HttpServletRequest request){
		boolean b = partService.delete(id);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_FAILURE );
		}
		return mb ;
	}
 
	@RequestMapping(value="/part/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updatePart(@PathVariable Integer id ,@RequestBody Part part,HttpServletRequest request){
		boolean b = partService.update(part);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_UPDATE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_UPDATE_FAILURE );
		}
		return mb ;
	}
	
	@RequestMapping(value = "/part/parts", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<Part>   getPartBySearch(@RequestBody Part part,HttpServletRequest request){
		List<Part> findAll = partService.findBySearch(  part );
		PageExtjsGridData<Part> pd = new  PageExtjsGridData<Part>( ); 
		pd.setGridDatas(findAll);
		int total = partService.fetchTotalNumberForSearch(part);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
