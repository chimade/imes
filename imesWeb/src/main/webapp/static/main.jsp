<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
	    <title>Kitchen Sink</title>
<script>
	var menuManagerTxt = "System Maintenance";
</script>
	    <link rel="stylesheet" type="text/css" href="resources/css/ext-all-debug.css" />
	    <link rel="stylesheet" type="text/css" href="resources/css/sink.css" />
<!-- 	    <link rel="stylesheet" type="text/css" href="resources/css/ext-neptune.css" /> -->
	    <!-- Ext JS -->
	    <script type="text/javascript" src="js/ext-all.js"></script>
	    <script type="text/javascript" src="js/chmade-util.js"></script>
	      
	      <script type="text/javascript" src="app/view/examples/Example.js"></script>
	    <script type="text/javascript" src="app/store/Examples.js"></script>
	    
	    
	    <%-- below is projectt --%>
<script type="text/javascript" src="app/store/SysCompanyStore.js"></script>
<script type="text/javascript" src="app/model/SysCompanyModel.js"></script>
<script type="text/javascript" src="app/view/examples/forms/Company.js"></script>
<script type="text/javascript" src="app/store/SysFactoryStore.js"></script>
<script type="text/javascript" src="app/model/SysFactoryModel.js"></script>
<script type="text/javascript" src="app/view/examples/forms/Factory.js"></script>
<script type="text/javascript" src="app/store/SysLabelStore.js"></script>
<script type="text/javascript" src="app/model/SysLabelModel.js"></script>
<script type="text/javascript" src="app/view/examples/forms/Label.js"></script>
<script type="text/javascript" src="app/store/SysLabelDetailStore.js"></script>
<script type="text/javascript" src="app/model/SysLabelDetailModel.js"></script>
<script type="text/javascript" src="app/view/examples/forms/LabelDetail.js"></script>
<script type="text/javascript" src="app/store/SysLabelTemplateStore.js"></script>
<script type="text/javascript" src="app/model/SysLabelTemplateModel.js"></script>
<script type="text/javascript" src="app/view/examples/forms/LabelTemplate.js"></script>
<script type="text/javascript" src="app/store/SysLineStore.js"></script>
<script type="text/javascript" src="app/model/SysLineModel.js"></script>
<script type="text/javascript" src="app/view/examples/forms/Line.js"></script>
<script type="text/javascript" src="app/store/SysLocationStore.js"></script>
<script type="text/javascript" src="app/model/SysLocationModel.js"></script>
<script type="text/javascript" src="app/view/examples/forms/Location.js"></script>
<script type="text/javascript" src="app/store/SysPartStore.js"></script>
<script type="text/javascript" src="app/model/SysPartModel.js"></script>
<script type="text/javascript" src="app/view/examples/forms/Part.js"></script>
<script type="text/javascript" src="app/store/SysPartFamilyStore.js"></script>
<script type="text/javascript" src="app/model/SysPartFamilyModel.js"></script>
<script type="text/javascript" src="app/view/examples/forms/PartFamily.js"></script>
<script type="text/javascript" src="app/store/SysPrinterStore.js"></script>
<script type="text/javascript" src="app/model/SysPrinterModel.js"></script>
<script type="text/javascript" src="app/view/examples/forms/Printer.js"></script>
<script type="text/javascript" src="app/store/SysProcessStore.js"></script>
<script type="text/javascript" src="app/model/SysProcessModel.js"></script>
<script type="text/javascript" src="app/view/examples/forms/Process.js"></script>
<script type="text/javascript" src="app/store/SysShopfloorStore.js"></script>
<script type="text/javascript" src="app/model/SysShopfloorModel.js"></script>
<script type="text/javascript" src="app/view/examples/forms/Shopfloor.js"></script>
	       
<%-- 	
	    	    <script type="text/javascript" src="app/view/examples/trees/BasicTree.js"></script>

<script type="text/javascript" src="app/view/examples/tabs/IconTabs.js"></script>
<script type="text/javascript" src="app/view/examples/tabs/FramedTabs.js"></script>
<script type="text/javascript" src="app/view/examples/tabs/BasicTabs.js"></script>
<script type="text/javascript" src="app/view/examples/tabs/TitledTabPanels.js"></script>

<script type="text/javascript" src="app/view/examples/windows/BasicWindow.js"></script>
<script type="text/javascript" src="app/view/examples/grids/GroupedHeaderGrid.js"></script>
<script type="text/javascript" src="app/view/examples/grids/GroupedGrid.js"></script>
<script type="text/javascript" src="app/view/examples/grids/LockedGrid.js"></script>

<script type="text/javascript" src="app/view/examples/toolbars/DockedToolbar.js"></script>
<script type="text/javascript" src="app/view/examples/toolbars/BasicToolbar.js"></script>


<script type="text/javascript" src="app/view/examples/panels/BasicPanel.js"></script>
<script type="text/javascript" src="app/view/examples/panels/FramedPanel.js"></script>



   --%>
   <script type="text/javascript" src="app/model/Restaurant.js"></script>
   <script type="text/javascript" src="app/store/Restaurants.js"></script>
   <script type="text/javascript" src="app/view/examples/grids/BasicGrid.js"></script>
   
     <script type="text/javascript" src="app/model/SysUserModel.js"></script>
   <script type="text/javascript" src="app/store/SysUserStore.js"></script> 

<!--    <script type="text/javascript" src="app/view/examples/PanelExample.js"></script> -->
<script type="text/javascript" src="app/store/States.js"></script>
<script type="text/javascript" src="app/view/examples/forms/Register.js"></script>
<!--    <script type="text/javascript" src="app/view/examples/forms/Contact.js"></script> -->
 <script type="text/javascript" src="app/view/examples/forms/Login.js"></script>
 <script type="text/javascript" src="app/view/examples/forms/User.js"></script>
<!--  <script type="text/javascript" src="app/store/TreeStore.js"></script> -->


<!-- <script type="text/javascript" src="app/store/Companies.js"></script> -->

   <script type="text/javascript" src="app/view/List.js"></script>
   <script type="text/javascript" src="app/view/Header.js"></script>
   <script type="text/javascript" src="app/view/Viewport.js"></script>
<script type="text/javascript" src="app/controller/Main.js"></script>
<%--  --%>  
<!-- 		<script type="text/javascript" src="js/all-classes.js"></script> -->
	    <script type="text/javascript" src="js/ext-neptune-debug.js"></script>
	    
	    <!-- Example -->


    <!-- GC -->

	    <script type="text/javascript" src="app.js"></script>
	</head>
	
	<body></body>
</html>
