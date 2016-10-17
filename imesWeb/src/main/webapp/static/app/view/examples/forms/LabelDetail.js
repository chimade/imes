Ext.define('KitchenSink.view.examples.forms.LabelDetailEdit' , 	{ 
		    extend:  'Ext.Window',
		    alias: 'chmade.LabelDetailEdit',
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
			  fieldLabel:'label_id' ,
			  name:'labelId',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'label_data1' ,
			  name:'labelData1',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'lable_data2' ,
			  name:'lableData2',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'label_data3' ,
			  name:'labelData3',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'lable_data4' ,
			  name:'lableData4',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'label_data5' ,
			  name:'labelData5',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'lable_data6' ,
			  name:'lableData6',
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
    		                var beanModel = Ext.create('model.SysLabelDetailModel',  formValues);
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
 
Ext.define('KitchenSink.view.examples.forms.LabelDetail', {
    extend:  'Ext.panel.Panel',
    alias: 'chmade.sysLabelDetail',
    header: false,
    pluginStore : undefined ,
 
    beforeRender: function() {
        var me = this;
        me.callParent();
     	pluginStore =  Ext.create('SysLabelDetailStore');
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
		{ text:'label_id' ,		dataIndex:'labelId' } ,
		{ text:'label_data1' ,		dataIndex:'labelData1' } ,
		{ text:'lable_data2' ,		dataIndex:'lableData2' } ,
		{ text:'label_data3' ,		dataIndex:'labelData3' } ,
		{ text:'lable_data4' ,		dataIndex:'lableData4' } ,
		{ text:'label_data5' ,		dataIndex:'labelData5' } ,
		{ text:'lable_data6' ,		dataIndex:'lableData6' }
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
				  fieldLabel:'label_data1',
				  name:'labelData1'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'label_data3',
				  name:'labelData3'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'label_data5',
				  name:'labelData5'
				} 
				
 			]
 		       }
,{
			  items: [ 
				{ 
    				  xtype:'textfield',
				  fieldLabel:'label_id',
				  name:'labelId'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'lable_data2',
				  name:'lableData2'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'lable_data4',
				  name:'lableData4'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'lable_data6',
				  name:'lableData6'
				} 
				
 			]
 		       }
       		        ],
       		        buttons: ['->', {
       		            text: 'Search',
                       	handler: function() {
		                       		 var form = this.up('form').getForm();
		                       		 var 	 labelDetail = form.getValues();
		                           	var st = 	 this.up('gridpanel').getStore();
		                       		st.on('beforeload', function (store, options) {
		                       			var new_params = labelDetail;
		                       			Ext.apply(store.proxy.extraParams, labelDetail) ;
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
       		            		var   constrainedWin = Ext.create(  'chmade.LabelDetailEdit', { title:'Add LabelDetail', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore() } );
       		            		constrainedWin.show();
       	                	}
       		        },{
       		 
        		            text: 'Edit',
        		            	handler: function() {
        		            		var selModel =  this.up('gridpanel').getSelectionModel().getSelection() ; 
        		            		if  ( selModel.length == 1 ) {
            		            		var p =  this.up('gridpanel').up().up() ;
            		            		var   constrainedWin = Ext.create(  'chmade.LabelDetailEdit', { title:'Edit LabelDetail', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore()  } );
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
        		            			        console.log('The LabelDetail was destroyed!');
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
