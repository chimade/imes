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
import com.chimade.mes.sys.model.Process;
import com.chimade.mes.sys.service.ProcessService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class ProcessController {

	private static final Log log = LogFactory.getLog(ProcessController.class);
	
	@Autowired
	private ProcessService processService;
	 
	@RequestMapping(value = "/process", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addProcess(@RequestBody Process process,HttpServletRequest request){
		boolean b = processService.save(process);
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
	
	@RequestMapping(value="/process/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deleteProcess(@PathVariable Integer id,HttpServletRequest request){
		boolean b = processService.delete(id);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_FAILURE );
		}
		return mb ;
	}
 
	@RequestMapping(value="/process/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updateProcess(@PathVariable Integer id ,@RequestBody Process process,HttpServletRequest request){
		boolean b = processService.update(process);
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
	
	@RequestMapping(value = "/process/processs", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<Process>   getProcessBySearch(@RequestBody Process process,HttpServletRequest request){
		List<Process> findAll = processService.findBySearch(  process );
		PageExtjsGridData<Process> pd = new  PageExtjsGridData<Process>( ); 
		pd.setGridDatas(findAll);
		int total = processService.fetchTotalNumberForSearch(process);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
