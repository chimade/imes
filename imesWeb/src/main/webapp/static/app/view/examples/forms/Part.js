Ext.define('KitchenSink.view.examples.forms.PartEdit' , 	{ 
		    extend:  'Ext.Window',
		    alias: 'chmade.PartEdit',
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
			  fieldLabel:'code' ,
			  name:'code',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'description' ,
			  name:'description',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'revision' ,
			  name:'revision',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'length' ,
			  name:'length',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'width' ,
			  name:'width',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'height' ,
			  name:'height',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'weight' ,
			  name:'weight',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'graphic' ,
			  name:'graphic',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'label_data' ,
			  name:'labelData',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'model_code' ,
			  name:'modelCode',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'model_description' ,
			  name:'modelDescription',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'customer_code' ,
			  name:'customerCode',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'part_family_id' ,
			  name:'partFamilyId',
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
    		                var beanModel = Ext.create('model.SysPartModel',  formValues);
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
 
Ext.define('KitchenSink.view.examples.forms.Part', {
    extend:  'Ext.panel.Panel',
    alias: 'chmade.sysPart',
    header: false,
    pluginStore : undefined ,
 
    beforeRender: function() {
        var me = this;
        me.callParent();
     	pluginStore =  Ext.create('SysPartStore');
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
		{ text:'code' ,		dataIndex:'code' } ,
		{ text:'description' ,		dataIndex:'description' } ,
		{ text:'revision' ,		dataIndex:'revision' } ,
		{ text:'length' ,		dataIndex:'length' } ,
		{ text:'width' ,		dataIndex:'width' } ,
		{ text:'height' ,		dataIndex:'height' } ,
		{ text:'weight' ,		dataIndex:'weight' } ,
		{ text:'graphic' ,		dataIndex:'graphic' } ,
		{ text:'label_data' ,		dataIndex:'labelData' } ,
		{ text:'model_code' ,		dataIndex:'modelCode' } ,
		{ text:'model_description' ,		dataIndex:'modelDescription' } ,
		{ text:'customer_code' ,		dataIndex:'customerCode' } ,
		{ text:'part_family_id' ,		dataIndex:'partFamilyId' }
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
				  fieldLabel:'description',
				  name:'description'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'length',
				  name:'length'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'height',
				  name:'height'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'graphic',
				  name:'graphic'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'model_code',
				  name:'modelCode'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'customer_code',
				  name:'customerCode'
				} 
				
 			]
 		       }
,{
			  items: [ 
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
				  fieldLabel:'width',
				  name:'width'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'weight',
				  name:'weight'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'label_data',
				  name:'labelData'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'model_description',
				  name:'modelDescription'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'part_family_id',
				  name:'partFamilyId'
				} 
				
 			]
 		       }
       		        ],
       		        buttons: ['->', {
       		            text: 'Search',
                       	handler: function() {
		                       		 var form = this.up('form').getForm();
		                       		 var 	 part = form.getValues();
		                           	var st = 	 this.up('gridpanel').getStore();
		                       		st.on('beforeload', function (store, options) {
		                       			var new_params = part;
		                       			Ext.apply(store.proxy.extraParams, part) ;
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
       		            		var   constrainedWin = Ext.create(  'chmade.PartEdit', { title:'Add Part', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore() } );
       		            		constrainedWin.show();
       	                	}
       		        },{
       		 
        		            text: 'Edit',
        		            	handler: function() {
        		            		var selModel =  this.up('gridpanel').getSelectionModel().getSelection() ; 
        		            		if  ( selModel.length == 1 ) {
            		            		var p =  this.up('gridpanel').up().up() ;
            		            		var   constrainedWin = Ext.create(  'chmade.PartEdit', { title:'Edit Part', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore()  } );
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
        		            			        console.log('The Part was destroyed!');
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
