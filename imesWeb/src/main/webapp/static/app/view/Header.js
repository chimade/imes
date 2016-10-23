Ext.define('KitchenSink.view.Header', {
    extend: 'Ext.Toolbar',
    xtype : 'pageHeader',
    
    ui   : 'sencha',
    height: 53,
    
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
//    items: [
//        {
////            xtype: 'panel',
//            xtype: 'component',
//            cls  : 'x-logo',
//            html : 'Welcome Mini MES'
//        }

    items :
{
	 xtype: 'toolbar',
	 ui   : 'sencha',
//	 height: 64,
	 items: [
		{
		xtype: 'component',
		cls  : 'x-logo',
  		style: {
  			'font-size': '18px' ,'color': '#fff' ,'font-weight':'bold'
        } ,
		html : 'Welcome Mini MES'
		}
		,
      '->',
		{ 
			xtype:'combo' ,
//		    fieldLabel: 'Choose State',
			ui   : 'sencha',
			  xtype:'combo',
			 store:  Ext.create('SysCompanyStore') ,
			 displayField: 'name',
		    valueField: 'id',
 
		    hideTrigger : true,
		},
 /*
		{
  		xtype: 'component',
  		style: {
  			'font-size': '18px' ,'color': '#fff' ,'font-weight':'bold'
        } ,
  		html : ' <div id="changeCompany" style="display:inline">切换</div>',
  		listeners: {
            render: function(component){
 
            	component.getEl().on('click', function( e ){
            		console.info("run here...");
            		var  m =Ext.create('Ext.menu.Menu', {
            		    width: 100,
            		    plain: true,
            		    floating: false, 
            		    items: [{
            		        text: 'plain item 1'
            		    },{
            		        text: 'plain item 2'
            		    },{
            		        text: 'plain item 3'
            		    }]
            		});
            		m.show( this );
                      });    
              }
        	}
  		},
  		*/
  		'|',
		{
  	  		xtype: 'component',
//  	  		cls  : 'x-logo',
  	  		style: {
  	  			'font-size': '18px' ,'color': '#fff' ,'font-weight':'bold'
  	        } ,
  	  		html : ' <div style="display:inline"> 退出</div>',
  	  		listeners: {
  	            render: function(component){
  	            	component.getEl().on('click', function( e ){

  	                      });    
  	              }
  	        	}
  	  		}
		]
}

//    ]
});
