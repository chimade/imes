<%-- <%@page import="java.lang.ProcessBuilder.Redirect"%> --%>
<%
response.setHeader(   "Content-Type"   ,   "text/html;charset=utf-8" );
%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="contextPath" value="${pageContext.request.contextPath}"></c:set>
<html>
	<head>
	    <title>CHIMADE</title>

	    <link rel="stylesheet" type="text/css" href="static/resources/css/ext-all-debug.css" />
	    <link rel="stylesheet" type="text/css" href="static/resources/css/sink.css" />
 
	    <script type="text/javascript" src="static/js/ext-all.js"></script>
<!-- 	    <script type="text/javascript" src="static/js/chmade-util.js"></script> -->
<%-- 	    <script type="text/javascript" src="${contextPath}/static/app/view/examples/forms/Login.js"></script> --%>
	    <script>

	             Ext.onReady(function() {
	                 Ext.QuickTips.init();
	                 
// 	                 Ext.create('Ext.panel.Panel', {
	 Ext.create('Ext.Viewport', {
		    layout: {
		        type: 'vbox',
		        align: 'center',
		        pack: 'center'
		    },
		    
		    defaults: {
		        width: 400,
		        height: 295
		    },
	                     items:[
	             /*               {
	                                xtype: 'form',
	                                bodyPadding: 5,
	                                width: 350,
	                                title: 'Login',
	                                frame:true,
	                                bodyPadding: 13,
	                                height: null,
	                                
	                                defaultType: 'textfield',
	                                defaults: { anchor: '100%' },
	                                
	                                items: [
	                                    { allowBlank:false, fieldLabel: 'User ID', name: 'user', emptyText: 'user id' },
	                                    { allowBlank:false, fieldLabel: 'Password', name: 'pass', emptyText: 'password', inputType: 'password' },
	                                    { xtype:'checkbox', fieldLabel: 'Remember me', name: 'remember' }
	                                ],
	                                
	                                buttons: [
	                                    {text:'Register'},
	                                    {text:'Login' , 
	                                    	handler: function() {
	                                            alert('You clicked the button!');
	                                         
	                                    }
	                                    }
	                                ]
	                            }
	                            ,
	                            */
	                            {
	                                xtype: 'form',
	                                url :'/imes/sys/login',
	                                bodyPadding: 5,
	                                width: 350,
	                                title: '登陆窗口',
	                                frame:true,
	                                bodyPadding: 13,
	                                height: null,
	                                defaultType: 'textfield',
	                                defaults: { anchor: '100%' },
	                                items: [{
	                                    fieldLabel: '登陆账号',
	                                    name: 'loginAccount',
	                                    emptyText :  '系统登陆的账号 ',
	                                    allowBlank: false
	                                },{
	                                    fieldLabel: '登陆密码',
	                                    name: 'password',
	                                    inputType: 'password',
	                                    minLength: 6,
	                                    maxLength: 30,
	                                    emptyText :  '系统登陆的密码 ',
	                                    allowBlank: false
	                                }],
	                                buttons: [{
	                                    text: '重置',
	                                    handler: function() {
	                                        this.up('form').getForm().reset();
	                                    }
	                                }, {
	                                    text: '登陆',
	                                    formBind: true, 
	                                    disabled: true,
	                                    handler: function() {
	                                        var form = this.up('form').getForm();
	                                        if (form.isValid()) {
	                                            form.submit({
	                                               method : 'POST',
	                                                success: function(form, action) {
	                                                	var r =Ext.decode(  action.response.responseText) ;
	                                                	if ( r.resultFlag 	)
	                                                		document.location.href =   "../imes/static/main.jsp";
	                                                },
	                                                failure: function(form, action) {
	                                                	 Ext.Msg.alert('失败', action.result ? action.result.msg : 'No response');
	                                                }
	                                            });
	                                        }
	                                    }
	                                }],
	                            }
	                          
	                     ],
	                	    renderTo: Ext.getBody()
	                	});
 
	           
	             });
	    </script>
	</head>
	
	<body  class='x-panel-body-default-framed'></body>
	<div>copy@right 2000-2017</div>
</html>
