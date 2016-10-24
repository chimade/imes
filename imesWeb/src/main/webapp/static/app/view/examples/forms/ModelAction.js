Ext.define('KitchenSink.view.examples.forms.ModelActionEdit' , 	{ 
		    extend:  'Ext.Window',
		    alias: 'chmade.ModelActionEdit',
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
			  fieldLabel:'model_id' ,
			  name:'modelId',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'action_id' ,
			  name:'actionId',
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
    		                var beanModel = Ext.create('model.SysModelActionModel',  formValues);
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
 
Ext.define('KitchenSink.view.examples.forms.ModelAction', {
    extend:  'Ext.panel.Panel',
    alias: 'chmade.sysModelAction',
    header: false,
    pluginStore : undefined ,
 
    beforeRender: function() {
        var me = this;
        me.callParent();
     	pluginStore =  Ext.create('SysModelActionStore');
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
    	    	{ text:'id' ,		dataIndex:'id' } ,
		{ text:'model_id' ,		dataIndex:'modelId' } ,
		{ text:'action_id' ,		dataIndex:'actionId' }
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
				  fieldLabel:'id',
				  name:'id'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'action_id',
				  name:'actionId'
				} 
				
 			]
 		       }
,{
			  items: [ 
				{ 
    				  xtype:'textfield',
				  fieldLabel:'model_id',
				  name:'modelId'
				} 
				
 			]
 		       }
       		        ],
       		        buttons: ['->', {
       		            text: 'Search',
                       	handler: function() {
		                       		 var form = this.up('form').getForm();
		                       		 var 	 baseModelAction = form.getValues();
		                           	var st = 	 this.up('gridpanel').getStore();
		                       		st.on('beforeload', function (store, options) {
		                       			var new_params = baseModelAction;
		                       			Ext.apply(store.proxy.extraParams, baseModelAction) ;
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
       		            		var   constrainedWin = Ext.create(  'chmade.ModelActionEdit', { title:'Add ModelAction', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore() } );
       		            		constrainedWin.show();
       	                	}
       		        },{
       		 
        		            text: 'Edit',
        		            	handler: function() {
        		            		var selModel =  this.up('gridpanel').getSelectionModel().getSelection() ; 
        		            		if  ( selModel.length == 1 ) {
            		            		var p =  this.up('gridpanel').up().up() ;
            		            		var   constrainedWin = Ext.create(  'chmade.ModelActionEdit', { title:'Edit ModelAction', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore()  } );
            		            		constrainedWin.down('form').getForm().loadRecord( selModel[0]  );
            		            		constrainedWin.show();
        		            		} else {
        		            			 alert("please select  one record  to edit ");
        		            		}
        		            	}
       		        },{
        		            text: 'Delete',
        		            	handler: function() {

        		            		var gridPanel =  this.up('gridpanel') ;
        		            		var selModel =  gridPanel.getSelectionModel().getSelection() ;
        		            		if ( selModel.length && selModel.length> 0) { 
        		            		Ext.MessageBox.confirm('提示', '确认删除吗',  function(btn) {
        		            			 if ( btn =='yes'){
        	        		            		for(var k=0 ;k<selModel.length ;k++){
        	        		            			selModel[k].destroy({
        	        		            			    success: function() {
        	        		            			    }
        	        		            			});
        	        		            		}
        	        		            		gridPanel.getStore().load();
        		            			 }
        		            		}); 
        		            		}
        		            	
        		            	}
       		        }
       		        ]
       		    }
          }]
    	} 
  ]
});
