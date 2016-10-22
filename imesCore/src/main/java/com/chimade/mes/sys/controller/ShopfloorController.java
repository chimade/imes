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
import com.chimade.mes.sys.model.Shopfloor;
import com.chimade.mes.sys.service.ShopfloorService;
import com.chimade.mes.sys.util.SystemContant;

@Controller
@RequestMapping("/sys")
public class ShopfloorController {

	private static final Log log = LogFactory.getLog(ShopfloorController.class);
	
	@Autowired
	private ShopfloorService shopfloorService;
	 
	@RequestMapping(value = "/shopfloor", method = { RequestMethod.POST})
	public  @ResponseBody   PageReturnMsgBean addShopfloor(@RequestBody Shopfloor shopfloor,HttpServletRequest request){
		boolean b = shopfloorService.save(shopfloor);
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
	
	@RequestMapping(value="/shopfloor/{id}",method=RequestMethod.DELETE)
	public @ResponseBody   PageReturnMsgBean   deleteShopfloor(@PathVariable Integer id,HttpServletRequest request){
		boolean b = shopfloorService.delete(id);
		PageReturnMsgBean mb = new PageReturnMsgBean();
		if ( b == true ){
			mb.setResultFlag(true);
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_SUCCESS );
		} else {
			mb.setMsg(  SystemContant.CONTROLLER_DELETE_FAILURE );
		}
		return mb ;
	}
 
	@RequestMapping(value="/shopfloor/{id}",method=RequestMethod.PUT)
	public @ResponseBody   PageReturnMsgBean   updateShopfloor(@PathVariable Integer id ,@RequestBody Shopfloor shopfloor,HttpServletRequest request){
		boolean b = shopfloorService.update(shopfloor);
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
	
	@RequestMapping(value = "/shopfloor/shopfloors", method = { RequestMethod.POST })
	public @ResponseBody    PageExtjsGridData<Shopfloor>   getShopfloorBySearch(@RequestBody Shopfloor shopfloor,HttpServletRequest request){
		List<Shopfloor> findAll = shopfloorService.findBySearch(  shopfloor );
		PageExtjsGridData<Shopfloor> pd = new  PageExtjsGridData<Shopfloor>( ); 
		pd.setGridDatas(findAll);
		int total = shopfloorService.fetchTotalNumberForSearch(shopfloor);
		pd.setTotalProperty(  total  );
		return pd ;
	}
	 
}
