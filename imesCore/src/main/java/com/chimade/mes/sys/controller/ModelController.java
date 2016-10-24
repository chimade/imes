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
import com.chimade.mes.sys.model.Model;
import com.chimade.mes.sys.service.ModelService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class ModelController {

	private static final Log log = LogFactory.getLog(ModelController.class);
	
	@Autowired
	private ModelService baseModelService;
	 
	@RequestMapping(value = "/baseModel", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addModel(@RequestBody Model baseModel,HttpServletRequest request){
		boolean b = baseModelService.save(baseModel);
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
	
	@RequestMapping(value="/baseModel/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deleteModel(@PathVariable Integer id,HttpServletRequest request){
		boolean b = baseModelService.delete(id);
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
 
	@RequestMapping(value="/baseModel/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updateModel(@PathVariable Integer id ,@RequestBody Model baseModel,HttpServletRequest request){
		boolean b = baseModelService.update(baseModel);
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
	
	@RequestMapping(value = "/baseModel/baseModels", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<Model>   getModelBySearch(@RequestBody Model baseModel,HttpServletRequest request){
		List<Model> findAll = baseModelService.findBySearch(  baseModel );
		PageExtjsGridData<Model> pd = new  PageExtjsGridData<Model>( ); 
		pd.setGridDatas(findAll);
		int total = baseModelService.fetchTotalNumberForSearch(baseModel);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
