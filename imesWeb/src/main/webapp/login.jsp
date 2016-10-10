<%-- <%@page import="java.lang.ProcessBuilder.Redirect"%> --%>
<%
response.setHeader(   "Content-Type"   ,   "text/html;charset=utf-8" );
%>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="contextPath" value="${pageContext.request.contextPath}"></c:set>
<!-- <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> -->
<html>
	<head>
	    <title>Kitchen Sink</title>

	    <!-- Ext JS -->
	    <link rel="stylesheet" type="text/css" href="${contextPath}/static/css/ext-neptune.css" />
	    <script type="text/javascript" src="${contextPath}/static/js/ext-all.js"></script>
		<script type="text/javascript" src="${contextPath}/static/js/all-classes.js"></script>
	    <script type="text/javascript" src="${contextPath}/static/js/ext-neptune.js"></script>

	    <!-- Example -->
	    <link rel="stylesheet" type="text/css" href="${contextPath}/static/resources/css/sink.css" />

    <!-- GC -->

	    <script type="text/javascript" src="${contextPath}/static/app.js"></script>
	</head>
	
	<body></body>
</html>
