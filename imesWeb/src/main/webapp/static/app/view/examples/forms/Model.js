Ext.define('KitchenSink.view.examples.forms.ModelEdit' , 	{ 
		    extend:  'Ext.Window',
		    alias: 'chmade.ModelEdit',
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
			  fieldLabel:'名字' ,
			  name:'name',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'路径' ,
			  name:'url',
			  allowBlank:false
			}	,
			{
			  fieldLabel:'类别' ,
			  xtype : 'combo',
			  store : { xtype: 'store', fields: ['name','key'] , data : [ {'name':'普通','key':0}, {'name':'系统', 'key': 1}, {'name':'开发','key':2} ]  } ,
			  name:'status',
			  valueField : 'key',
			  displayField : 'name',
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
    		                if (   this.up('form').getForm().isValid() ) {  
	    		                var form = this.up('form').getForm();
	    		                var formValues = form.getValues();
	    		                var beanModel = Ext.create('model.SysModelModel',  formValues);
	    		                beanModel.save({
	    		                	success: function(record ,response ) {
	    		                		var r = Ext.decode(response.response.responseText) ;
	    		                		if (r.resultFlag){
	    		                			refreshStore.load(  );
	    		                			win.close();
	    		                		}
	   		                	    }
	    		                	}
	    		                );
    		                }
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
 
Ext.define('KitchenSink.view.examples.forms.Model', {
    extend:  'Ext.panel.Panel',
    alias: 'chmade.sysModel',
    header: false,
    pluginStore : undefined ,
 
    beforeRender: function() {
        var me = this;
        me.callParent();
     	pluginStore =  Ext.create('SysModelStore');
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
	{ text:'名字' ,		dataIndex:'name' } ,
	{ text:'路径' ,		dataIndex:'url' } ,
	{ text:'状态' ,		dataIndex:'status' }
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
		,		  hidden:true 
				} 
				,
				{ 
    				  xtype:'textfield',
				  fieldLabel:'路径',
				  name:'url'
				} 
				
 			]
 		       }
,{
			  items: [ 
				{  
    				  xtype:'textfield',
				  fieldLabel:'名字',
				  name:'name'
				} 
				,
				{  
    				  xtype:'textfield',
				  fieldLabel:'状态',
				  name:'status'
				} 
				
 			]
 		       }
       		        ],
       		        buttons: ['->', {
       		            text: '查找',
                       	handler: function() {
		                       		 var form = this.up('form').getForm();
		                       		 var 	 baseModel = form.getValues();
		                           	var st = 	 this.up('gridpanel').getStore();
		                       		st.on('beforeload', function (store, options) {
		                       			var new_params = baseModel;
		                       			Ext.apply(store.proxy.extraParams, baseModel) ;
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
       		            		var   constrainedWin = Ext.create(  'chmade.ModelEdit', { title:'Add Model', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore() } );
       		            		constrainedWin.show();
       	                	}
       		        },{
       		 
        		            text: '编辑',
        		            	handler: function() {
        		            		var selModel =  this.up('gridpanel').getSelectionModel().getSelection() ; 
        		            		if  ( selModel.length == 1 ) {
            		            		var p =  this.up('gridpanel').up().up() ;
            		            		var   constrainedWin = Ext.create(  'chmade.ModelEdit', { title:'Edit Model', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore()  } );
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
        		            		Ext.MessageBox.confirm('提示', '确认删除吗',  function(btn) {
        		            			 if ( btn =='yes'){
        	        		            		for(var k=0 ;k<selModel.length ;k++){
        	        		            			selModel[k].destroy({
        	        		            			    success: function() {
        	        		            			    }
        	        		            			});
        	        		            		}
//        	        		            	 var cp = Math.floor(	gridPanel.getStore() .totalCount/ gridPanel.getStore().pageSize);
//        	        		            	 var loadParam =     {  start : cp , pageSize : gridPanel.getStore().pageSize    }  ;
//        	        		            	  if  ( gridPanel.getStore().currentPage>  cp  ) {
//        	        		            			gridPanel.getStore().load( loadParam );
//        	        		            	  } else {
//        	        		            		
//        	        		            	  }
        	        		            		  gridPanel.getStore().load( );
        	        		            	
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
