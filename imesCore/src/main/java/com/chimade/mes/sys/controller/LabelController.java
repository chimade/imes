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
import com.chimade.mes.sys.model.Label;
import com.chimade.mes.sys.service.LabelService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class LabelController {

	private static final Log log = LogFactory.getLog(LabelController.class);
	
	@Autowired
	private LabelService labelService;
	 
	@RequestMapping(value = "/label", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addLabel(@RequestBody Label label,HttpServletRequest request){
		boolean b = labelService.save(label);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_ADD_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_ADD_FAILURE );
		}
		return mb ;
	}
	
	@RequestMapping(value="/label/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deleteLabel(@PathVariable Integer id,HttpServletRequest request){
		boolean b = labelService.delete(id);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_FAILURE );
		}
		return mb ;
	}
 
	@RequestMapping(value="/label/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updateLabel(@PathVariable Integer id ,@RequestBody Label label,HttpServletRequest request){
		boolean b = labelService.update(label);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_UPDATE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_UPDATE_FAILURE );
		}
		return mb ;
	}
	
	@RequestMapping(value = "/label/labels", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<Label>   getLabelBySearch(@RequestBody Label label,HttpServletRequest request){
		List<Label> findAll = labelService.findBySearch(  label );
		PageExtjsGridData<Label> pd = new  PageExtjsGridData<Label>( ); 
		pd.setGridDatas(findAll);
		int total = labelService.fetchTotalNumberForSearch(label);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
