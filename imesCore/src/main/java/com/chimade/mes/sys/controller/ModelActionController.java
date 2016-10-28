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

import com.chimade.mes.sys.model.Model;
import com.chimade.mes.sys.model.ModelAction;
import com.chimade.mes.sys.model.PageExtjsGridData;
import com.chimade.mes.sys.model.PageReturnMsgBean;
import com.chimade.mes.sys.service.ModelActionService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class ModelActionController {

	private static final Log log = LogFactory.getLog(ModelActionController.class);
	
	@Autowired
	private ModelActionService baseModelActionService;
	 
	@RequestMapping(value = "/baseModelAction", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addModelAction(@RequestBody ModelAction baseModelAction,HttpServletRequest request){
		boolean b = baseModelActionService.save(baseModelAction);
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
	
	@RequestMapping(value="/baseModelAction/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deleteModelAction(@PathVariable Integer id,HttpServletRequest request){
		boolean b = baseModelActionService.delete(id);
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
 
	@RequestMapping(value="/baseModelAction/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updateModelAction(@PathVariable Integer id ,@RequestBody ModelAction baseModelAction,HttpServletRequest request){
		boolean b = baseModelActionService.update(baseModelAction);
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
	
	@RequestMapping(value = "/baseModelAction/baseModelActions", method = { RequestMethod.POST })
//	public @ResponseBody    PageExtjsGridData<ModelAction>   getModelActionBySearch(@RequestBody ModelAction baseModelAction,HttpServletRequest request){
		public @ResponseBody    PageExtjsGridData<Model>   getModelActionBySearch(@RequestBody ModelAction baseModelAction,HttpServletRequest request){
//		List<ModelAction> findAll = baseModelActionService.findBySearch(  baseModelAction );
		List<Model> findAll = baseModelActionService.findModelMapActionBySearch(  baseModelAction );
//		PageExtjsGridData<ModelAction> pd = new  PageExtjsGridData<ModelAction>( ); 
		PageExtjsGridData<Model> pd = new  PageExtjsGridData<Model>( ); 
		pd.setGridDatas(findAll);
		int total = baseModelActionService.fetchTotalNumberForSearch(baseModelAction);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
