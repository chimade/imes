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
import com.chimade.mes.sys.model.Printer;
import com.chimade.mes.sys.service.PrinterService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class PrinterController {

	private static final Log log = LogFactory.getLog(PrinterController.class);
	
	@Autowired
	private PrinterService printerService;
	 
	@RequestMapping(value = "/printer", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addPrinter(@RequestBody Printer printer,HttpServletRequest request){
		boolean b = printerService.save(printer);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_ADD_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_ADD_FAILURE );
		}
		return mb ;
	}
	
	@RequestMapping(value="/printer/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deletePrinter(@PathVariable Integer id,HttpServletRequest request){
		boolean b = printerService.delete(id);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_FAILURE );
		}
		return mb ;
	}
 
	@RequestMapping(value="/printer/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updatePrinter(@PathVariable Integer id ,@RequestBody Printer printer,HttpServletRequest request){
		boolean b = printerService.update(printer);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_UPDATE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_UPDATE_FAILURE );
		}
		return mb ;
	}
	
	@RequestMapping(value = "/printer/printers", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<Printer>   getPrinterBySearch(@RequestBody Printer printer,HttpServletRequest request){
		List<Printer> findAll = printerService.findBySearch(  printer );
		PageExtjsGridData<Printer> pd = new  PageExtjsGridData<Printer>( ); 
		pd.setGridDatas(findAll);
		int total = printerService.fetchTotalNumberForSearch(printer);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
