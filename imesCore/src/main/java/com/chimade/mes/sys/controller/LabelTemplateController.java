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
import com.chimade.mes.sys.model.LabelTemplate;
import com.chimade.mes.sys.service.LabelTemplateService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class LabelTemplateController {

	private static final Log log = LogFactory.getLog(LabelTemplateController.class);
	
	@Autowired
	private LabelTemplateService labelTemplateService;
	 
	@RequestMapping(value = "/labelTemplate", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addLabelTemplate(@RequestBody LabelTemplate labelTemplate,HttpServletRequest request){
		boolean b = labelTemplateService.save(labelTemplate);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_ADD_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_ADD_FAILURE );
		}
		return mb ;
	}
	
	@RequestMapping(value="/labelTemplate/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deleteLabelTemplate(@PathVariable Integer id,HttpServletRequest request){
		boolean b = labelTemplateService.delete(id);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_FAILURE );
		}
		return mb ;
	}
 
	@RequestMapping(value="/labelTemplate/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updateLabelTemplate(@PathVariable Integer id ,@RequestBody LabelTemplate labelTemplate,HttpServletRequest request){
		boolean b = labelTemplateService.update(labelTemplate);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_UPDATE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_UPDATE_FAILURE );
		}
		return mb ;
	}
	
	@RequestMapping(value = "/labelTemplate/labelTemplates", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<LabelTemplate>   getLabelTemplateBySearch(@RequestBody LabelTemplate labelTemplate,HttpServletRequest request){
		List<LabelTemplate> findAll = labelTemplateService.findBySearch(  labelTemplate );
		PageExtjsGridData<LabelTemplate> pd = new  PageExtjsGridData<LabelTemplate>( ); 
		pd.setGridDatas(findAll);
		int total = labelTemplateService.fetchTotalNumberForSearch(labelTemplate);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
