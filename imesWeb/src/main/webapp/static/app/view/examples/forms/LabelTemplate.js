Ext.define('KitchenSink.view.examples.forms.LabelTemplateEdit' , 	{ 
		    extend:  'Ext.Window',
		    alias: 'chmade.LabelTemplateEdit',
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
			  fieldLabel:'name' ,
			  name:'name',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'template_file' ,
			  name:'templateFile',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'description' ,
			  name:'description',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'label_field1' ,
			  name:'labelField1',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'label_field2' ,
			  name:'labelField2',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'label_field3' ,
			  name:'labelField3',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'label_field4' ,
			  name:'labelField4',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'label_field5' ,
			  name:'labelField5',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'label_field6' ,
			  name:'labelField6',
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
    		                var beanModel = Ext.create('model.SysLabelTemplateModel',  formValues);
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
 
Ext.define('KitchenSink.view.examples.forms.LabelTemplate', {
    extend:  'Ext.panel.Panel',
    alias: 'chmade.sysLabelTemplate',
    header: false,
    pluginStore : undefined ,
 
    beforeRender: function() {
        var me = this;
        me.callParent();
     	pluginStore =  Ext.create('SysLabelTemplateStore');
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
		{ text:'name' ,		dataIndex:'name' } ,
		{ text:'template_file' ,		dataIndex:'templateFile' } ,
		{ text:'description' ,		dataIndex:'description' } ,
		{ text:'label_field1' ,		dataIndex:'labelField1' } ,
		{ text:'label_field2' ,		dataIndex:'labelField2' } ,
		{ text:'label_field3' ,		dataIndex:'labelField3' } ,
		{ text:'label_field4' ,		dataIndex:'labelField4' } ,
		{ text:'label_field5' ,		dataIndex:'labelField5' } ,
		{ text:'label_field6' ,		dataIndex:'labelField6' }
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
				  fieldLabel:'name',
				  name:'name'
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
				  fieldLabel:'label_field2',
				  name:'labelField2'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'label_field4',
				  name:'labelField4'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'label_field6',
				  name:'labelField6'
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
				  fieldLabel:'template_file',
				  name:'templateFile'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'label_field1',
				  name:'labelField1'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'label_field3',
				  name:'labelField3'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'label_field5',
				  name:'labelField5'
				} 
				
 			]
 		       }
       		        ],
       		        buttons: ['->', {
       		            text: 'Search',
                       	handler: function() {
		                       		 var form = this.up('form').getForm();
		                       		 var 	 labelTemplate = form.getValues();
		                           	var st = 	 this.up('gridpanel').getStore();
		                       		st.on('beforeload', function (store, options) {
		                       			var new_params = labelTemplate;
		                       			Ext.apply(store.proxy.extraParams, labelTemplate) ;
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
       		            		var   constrainedWin = Ext.create(  'chmade.LabelTemplateEdit', { title:'Add LabelTemplate', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore() } );
       		            		constrainedWin.show();
       	                	}
       		        },{
       		 
        		            text: 'Edit',
        		            	handler: function() {
        		            		var selModel =  this.up('gridpanel').getSelectionModel().getSelection() ; 
        		            		if  ( selModel.length == 1 ) {
            		            		var p =  this.up('gridpanel').up().up() ;
            		            		var   constrainedWin = Ext.create(  'chmade.LabelTemplateEdit', { title:'Edit LabelTemplate', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore()  } );
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
        		            			        console.log('The LabelTemplate was destroyed!');
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
