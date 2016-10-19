Ext.define('KitchenSink.view.examples.forms.LineEdit' , 	{ 
		    extend:  'Ext.Window',
		    alias: 'chmade.LineEdit',
		    refreshStore : null ,
		    constructor: function(config) {
		    	refreshStore = config.refreshStore ;
		    	config = Ext.apply({
		    		width: 365,
		    		height: 200,
		    		x: 300,
		    		y: 20,
		    		constrain: true,
    		    layout: 'fit',
    		    items: {
    		        xtype: 'form',
    		        layout: 'form',
    		        frame: true,
    		        bodyPadding: '5 5 0',
    		        width: 350,
    		        fieldDefaults: {
    		            msgTarget: 'side',
    		            labelWidth: 105
    		        },
    		        defaultType: 'textfield',
    		        items: [
    		        	{
			  fieldLabel:'shopfloor_id' ,
			  name:'shopfloorId',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'code' ,
			  name:'code',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'name' ,
			  name:'name',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'revision' ,
			  name:'revision',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'short_name' ,
			  name:'shortName',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'long_name' ,
			  name:'longName',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'status' ,
			  name:'status',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'workorder_id' ,
			  name:'workorderId',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'description' ,
			  name:'description',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'created_date' ,
			  name:'createdDate',
			  allowBlank:false
			}
    		        ,
    		        {
    		            name: 'id',
    		            hidden:true
    		        }
    		        ],

    		        buttons: [{
    		            text: 'Save'
    		         ,   handler: function() {
    		        	 
    		        	 	var win = this.up('window');
    		                this.up('form').getForm().isValid();
    		                var form = this.up('form').getForm();
    		                var formValues = form.getValues();
    		                var beanModel = Ext.create('model.SysLineModel',  formValues);
    		                beanModel.save({
    		                	success: function(record ,response ) {
    		                		var r = Ext.decode(response.response.responseText) ;
    		                		if (r.resultFlag){
    		                			refreshStore.load();
    		                			win.close();
    		                		}
    		                 
   		                	    }
    		                	}
    		                );
    		  
    		            }
    		        },{
    		            text: 'Cancel'
    		            , handler: function() {
    		            	this.up('window').close();
    		            }
    		        }]
    		    }
    		} , config
		    	  );
		    	   this.callParent([config]);
		    }
		}
) ;
 
Ext.define('KitchenSink.view.examples.forms.Line', {
    extend:  'Ext.panel.Panel',
    alias: 'chmade.sysLine',
    header: false,
    pluginStore : undefined ,
 
    beforeRender: function() {
        var me = this;
        me.callParent();
     	pluginStore =  Ext.create('SysLineStore');
    	 this.down('gridpanel') .reconfigure(  pluginStore );
    	 this.down('pagingtoolbar') .bindStore(  pluginStore );
    } ,
    title : '',
    layout: {
    	type:'fit',
        pack: 'center'
    },
    items: [
    {
    	
    	 	margin: ' 0 0  0 10',
    	 	xtype : 'gridpanel',
    	 	selModel  : Ext.create('Ext.selection.CheckboxModel'    ),
    	    columns: [
    	    	{ text:'shopfloor_id' ,		dataIndex:'shopfloorId' } ,
		{ text:'id' ,		dataIndex:'id' } ,
		{ text:'code' ,		dataIndex:'code' } ,
		{ text:'name' ,		dataIndex:'name' } ,
		{ text:'revision' ,		dataIndex:'revision' } ,
		{ text:'short_name' ,		dataIndex:'shortName' } ,
		{ text:'long_name' ,		dataIndex:'longName' } ,
		{ text:'status' ,		dataIndex:'status' } ,
		{ text:'workorder_id' ,		dataIndex:'workorderId' } ,
		{ text:'description' ,		dataIndex:'description' } ,
		{ text:'created_date' ,		dataIndex:'createdDate' }
    	    ],
    		   dockedItems: [ 
				{
				    xtype: 'pagingtoolbar',
				    dock: 'bottom',
				    displayInfo: true
				},
    		     {
					
    		     layout:'fit',
       		    xtype: 'toolbar',
       		    dock: 'top',
       		    items: {
       		        titleCollapse :true,
       		    	collapsible: true,
       		    	xtype:'form',
       		       bodyStyle: 'padding:5px 5px 0',
       		        fieldDefaults: {
       		            labelAlign: 'top',
       		            msgTarget: 'side'
       		        },
       		        defaults: {
       		            border: false,
       		            xtype: 'panel',
       		            flex: 1,
       		            layout: 'anchor' 
       		        },

       		        layout: 'hbox',
       		        items: [
       		        {
			  items: [ 
				{ 
    				  xtype:'textfield',
				  fieldLabel:'shopfloor_id',
				  name:'shopfloorId'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'code',
				  name:'code'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'revision',
				  name:'revision'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'long_name',
				  name:'longName'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'workorder_id',
				  name:'workorderId'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'created_date',
				  name:'createdDate'
				} 
				
 			]
 		       }
,{
			  items: [ 
				{ 
    				  xtype:'textfield',
				  fieldLabel:'id',
				  name:'id'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'name',
				  name:'name'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'short_name',
				  name:'shortName'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'status',
				  name:'status'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'description',
				  name:'description'
				} 
				
 			]
 		       }
       		        ],
       		        buttons: ['->', {
       		            text: 'Search',
                       	handler: function() {
		                       		 var form = this.up('form').getForm();
		                       		 var 	 line = form.getValues();
		                           	var st = 	 this.up('gridpanel').getStore();
		                       		st.on('beforeload', function (store, options) {
		                       			var new_params = line;
		                       			Ext.apply(store.proxy.extraParams, line) ;
		                       		}) ;
		                       		st.currentPage=1 ;
		                       		st.load( ) ;
                       	}
       		        }, {
       		            text: 'Reset',
       		            	handler: function() {
       	                		 var form = this.up('form').getForm();
       	                         form.reset();
       	                	}
       		        },
       		        {
       		            text: 'New',
       		            	handler: function() {
       		            		var p =  this.up('gridpanel').up().up() ;
       		            		var   constrainedWin = Ext.create(  'chmade.LineEdit', { title:'Add Line', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore() } );
       		            		constrainedWin.show();
       	                	}
       		        },{
       		 
        		            text: 'Edit',
        		            	handler: function() {
        		            		var selModel =  this.up('gridpanel').getSelectionModel().getSelection() ; 
        		            		if  ( selModel.length == 1 ) {
            		            		var p =  this.up('gridpanel').up().up() ;
            		            		var   constrainedWin = Ext.create(  'chmade.LineEdit', { title:'Edit Line', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore()  } );
            		            		constrainedWin.down('form').getForm().loadRecord( selModel[0]  );
            		            		constrainedWin.show();
        		            		} else {
        		            			 alert("please select  one record  to edit ");
        		            		}
        		            	}
       		        },{
        		            text: 'Delete',
        		            	handler: function() {
        		            		var selModel =  this.up('gridpanel').getSelectionModel().getSelection() ;
        		            		var ids = "";
        		            		for(var k=0 ;k<selModel.length ;k++){
        		            			ids = ids+ selModel[k].data.id +",";
        		            			selModel[k].destroy({
        		            			    success: function() {
        		            			        console.log('The Line was destroyed!');
        		            			    }
        		            			});
        		            		}
        		            		alert("delete ids:"+ids);
        		            		this.up('gridpanel').getStore().load();
        		            	}
       		        }
       		        ]
       		    }
          }]
    	} 
  ]
});
