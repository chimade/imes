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
import com.chimade.mes.sys.model.Line;
import com.chimade.mes.sys.service.LineService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class LineController {

	private static final Log log = LogFactory.getLog(LineController.class);
	
	@Autowired
	private LineService lineService;
	 
	@RequestMapping(value = "/line", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addLine(@RequestBody Line line,HttpServletRequest request){
		boolean b = lineService.save(line);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_ADD_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_ADD_FAILURE );
		}
		return mb ;
	}
	
	@RequestMapping(value="/line/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deleteLine(@PathVariable Integer id,HttpServletRequest request){
		boolean b = lineService.delete(id);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_FAILURE );
		}
		return mb ;
	}
 
	@RequestMapping(value="/line/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updateLine(@PathVariable Integer id ,@RequestBody Line line,HttpServletRequest request){
		boolean b = lineService.update(line);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_UPDATE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_UPDATE_FAILURE );
		}
		return mb ;
	}
	
	@RequestMapping(value = "/line/lines", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<Line>   getLineBySearch(@RequestBody Line line,HttpServletRequest request){
		List<Line> findAll = lineService.findBySearch(  line );
		PageExtjsGridData<Line> pd = new  PageExtjsGridData<Line>( ); 
		pd.setGridDatas(findAll);
		int total = lineService.fetchTotalNumberForSearch(line);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
