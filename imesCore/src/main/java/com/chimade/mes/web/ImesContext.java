package com.chimade.mes.web;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

import org.apache.log4j.Logger;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
 

public class ImesContext extends HttpServlet {
	protected static Logger logger = Logger.getLogger( ImesContext.class );
	private static final long serialVersionUID = 1L;
	private static ApplicationContext serverContext = null;
	public static String WEBINFPath;
	
	@Override
	public void init() throws ServletException {
		super.init();
		WEBINFPath = getServletContext().getRealPath("WEB-INF");
		javax.servlet.ServletContext servletContext = getServletContext();
		serverContext = WebApplicationContextUtils.getRequiredWebApplicationContext(servletContext);
	}
	public static void setApplication( ApplicationContext ctx) {
		if ( serverContext == null ) {
			 serverContext = ctx ;
		}
	}
	public static ApplicationContext getApplicationContext()
    {
        return serverContext;
    }

}
