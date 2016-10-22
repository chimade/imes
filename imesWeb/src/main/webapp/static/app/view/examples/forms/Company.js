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
//    		        bodyPadding: '5 5 0',
    		        width: 350,
    		        fieldDefaults: {
    		            msgTarget: 'side',
    		            labelWidth: 105
    		        },
    		        defaultType: 'textfield',
    		        items: [
    		        			{
			  fieldLabel:'编号' ,
			  name:'code',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'名字' ,
			  name:'name',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'地址' ,
			  name:'address',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'网址' ,
			  name:'website',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'电话' ,
			  name:'telephone',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'描述' ,
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
    		            text: '保存'
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
    		            text: '取消'
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
    	    	{ text:'id' ,		dataIndex:'id'  ,hidden:true} ,
		{ text:'编号' ,		dataIndex:'code' } ,
		{ text:'名字' ,		dataIndex:'name' } ,
		{ text:'地址' ,		dataIndex:'address' } ,
		{ text:'网址' ,		dataIndex:'website' } ,
		{ text:'电话' ,		dataIndex:'telephone' } ,
		{ text:'描述' ,		dataIndex:'description' }
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
				  name:'id',
				  hidden: true
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'名字',
				  name:'name'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'网址',
				  name:'website'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'描述',
				  name:'description'
				} 
				
 			]
 		       }
,{
			  items: [ 
				{ 
    				  xtype:'textfield',
				  fieldLabel:'编码',
				  name:'code'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'地址',
				  name:'address'
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'电话',
				  name:'telephone'
				} 
				
 			]
 		       }
       		        ],
       		        buttons: ['->', {
       		            text: '查找',
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
       		            text: '重置',
       		            	handler: function() {
       	                		 var form = this.up('form').getForm();
       	                         form.reset();
       	                	}
       		        },
       		        {
       		            text: '新增',
       		            	handler: function() {
       		            		var p =  this.up('gridpanel').up().up() ;
       		            		var   constrainedWin = Ext.create(  'chmade.CompanyEdit', { title:'Add Company', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore() } );
       		            		constrainedWin.show();
       	                	}
       		        },{
       		 
        		            text: '编辑',
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
        		            text: '删除',
        		            	handler: function() {
        		            		var gridPanel =  this.up('gridpanel') ;
        		            		var selModel =  gridPanel.getSelectionModel().getSelection() ;
        		            		if ( selModel.length && selModel.length> 0) { 
//        		            		var ids = "";
        		            		Ext.MessageBox.confirm('提示', '确认删除吗',  function(btn) { 
        		            			 if ( btn =='yes'){
        	        		            		for(var k=0 ;k<selModel.length ;k++){
//        	        		            			ids = ids+ selModel[k].data.id +",";
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
