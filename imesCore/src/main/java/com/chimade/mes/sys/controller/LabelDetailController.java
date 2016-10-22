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
import com.chimade.mes.sys.model.LabelDetail;
import com.chimade.mes.sys.service.LabelDetailService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class LabelDetailController {

	private static final Log log = LogFactory.getLog(LabelDetailController.class);
	
	@Autowired
	private LabelDetailService labelDetailService;
	 
	@RequestMapping(value = "/labelDetail", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addLabelDetail(@RequestBody LabelDetail labelDetail,HttpServletRequest request){
		boolean b = labelDetailService.save(labelDetail);
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
	
	@RequestMapping(value="/labelDetail/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deleteLabelDetail(@PathVariable Integer id,HttpServletRequest request){
		boolean b = labelDetailService.delete(id);
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
 
	@RequestMapping(value="/labelDetail/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updateLabelDetail(@PathVariable Integer id ,@RequestBody LabelDetail labelDetail,HttpServletRequest request){
		boolean b = labelDetailService.update(labelDetail);
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
	
	@RequestMapping(value = "/labelDetail/labelDetails", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<LabelDetail>   getLabelDetailBySearch(@RequestBody LabelDetail labelDetail,HttpServletRequest request){
		List<LabelDetail> findAll = labelDetailService.findBySearch(  labelDetail );
		PageExtjsGridData<LabelDetail> pd = new  PageExtjsGridData<LabelDetail>( ); 
		pd.setGridDatas(findAll);
		int total = labelDetailService.fetchTotalNumberForSearch(labelDetail);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
