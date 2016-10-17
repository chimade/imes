Ext.define('KitchenSink.view.examples.forms.CompanyEdit' , 	{ 
		    extend:  'Ext.Window',
		    alias: 'chmade.CompanyEdit',
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
			  fieldLabel:'address' ,
			  name:'address',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'website' ,
			  name:'website',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'telephone' ,
			  name:'telephone',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'description' ,
			  name:'description',
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
    		                var beanModel = Ext.create('model.SysCompanyModel',  formValues);
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
 
Ext.define('KitchenSink.view.examples.forms.Company', {
    extend:  'Ext.panel.Panel',
    alias: 'chmade.sysCompany',
    header: false,
    pluginStore : undefined ,
 
    beforeRender: function() {
        var me = this;
        me.callParent();
     	pluginStore =  Ext.create('SysCompanyStore');
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
		{ text:'address' ,		dataIndex:'address' } ,
		{ text:'website' ,		dataIndex:'website' } ,
		{ text:'telephone' ,		dataIndex:'telephone' } ,
		{ text:'description' ,		dataIndex:'description' }
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
				  fieldLabel:'name',
				  name:'name'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'website',
				  name:'website'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'description',
				  name:'description'
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
				  fieldLabel:'address',
				  name:'address'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'telephone',
				  name:'telephone'
				} 
				
 			]
 		       }
       		        ],
       		        buttons: ['->', {
       		            text: 'Search',
                       	handler: function() {
		                       		 var form = this.up('form').getForm();
		                       		 var 	 company = form.getValues();
		                           	var st = 	 this.up('gridpanel').getStore();
		                       		st.on('beforeload', function (store, options) {
		                       			var new_params = company;
		                       			Ext.apply(store.proxy.extraParams, company) ;
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
       		            		var   constrainedWin = Ext.create(  'chmade.CompanyEdit', { title:'Add Company', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore() } );
       		            		constrainedWin.show();
       	                	}
       		        },{
       		 
        		            text: 'Edit',
        		            	handler: function() {
        		            		var selModel =  this.up('gridpanel').getSelectionModel().getSelection() ; 
        		            		if  ( selModel.length == 1 ) {
            		            		var p =  this.up('gridpanel').up().up() ;
            		            		var   constrainedWin = Ext.create(  'chmade.CompanyEdit', { title:'Edit Company', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore()  } );
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
        		            			        console.log('The Company was destroyed!');
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
