Ext.define('KitchenSink.view.examples.forms.authorization.ModelActionEdit' , 	{ 
		    extend:  'Ext.Window',
		    alias: 'chmade.ModelActionEdit',
		    refreshStore : null ,
		    constructor: function(config) {
		    	refreshStore = config.refreshStore ;
		    	config = Ext.apply({
		    		width: 465,
		    		height: 400,
		    		x: 300,
		    		y: 20,
		    		constrain: true,
    		    layout: 'fit',
    		    items: {
    		        xtype: 'form',
    		        layout: 'form',
    		        frame: true,
    		        bodyPadding: '5 5 0',
    		        width: 450,
    		        fieldDefaults: {
    		            msgTarget: 'side',
    		            labelWidth: 105
    		        },
    		        defaultType: 'textfield',
    		        items: [
    		        			{
    		        				fieldLabel:'模块名' ,
    		        				name:'modelId',
    		        				displayField: 'name',
    		    		        	valueField: 'id',
    		        				xtype : 'combo',
    		        				store : Ext.create('SysModelStore',{ pageSize : 100}) ,
    		        				allowBlank:false
			}	,
			{
//			  fieldLabel:'动作名' ,
//			  name:'actionId',
//			  allowBlank:false
			 
		            xtype: 'fieldcontainer',
		            fieldLabel: '动作名',
		            defaultType: 'checkboxfield'
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
 
	    		                var modelId = formValues.modelId;
	    		                var actionIds = formValues.actionId ;
	    		                var m = new Array();
	    		                if (  actionIds.length ){
	    		                    for(var i=0 ; i< actionIds.length;i++) {
	    		                    	m.push(  Ext.create('model.SysModelActionModel',  { "modelId":modelId, "actionId":actionIds[i] }) );
	    		                    }
	    		                } else
	    		                	m.push(  Ext.create('model.SysModelActionModel',  { "modelId":modelId, "actionId":actionIds }) );
	    		                for(var i=0 ; i< m.length;i++) {
	    		                var beanModel = m[i];
	    		                beanModel.save({
	    		                	success: function(record ,response ) {
	    		                		var r = Ext.decode(response.response.responseText) ;
	    		                		if (r.resultFlag){
	    		                			refreshStore.load();
	    		                			win.close();
	    		                		}
	   		                	    }
	    		                ,
	   		                	    failure : function(record,response){
	   		                 
	   		                	    		var msg = response.request.scope.reader.jsonData.msg ;
	   		                	    		Ext.Msg.show({
	   		                	    	     title:'提示',
	   		                	    	     msg:  msg,
	   		                	    	     buttons: Ext.Msg.YES,
	   		                	    	     icon: Ext.Msg.WARNING
	   		                	    	});
	   		                	    }  
	    		                	}
	    		                );
	    		                }
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
		    	   var st  = Ext.create('SysActionStore',{ pageSize : 100}) ;
		    	   var checkbox =  this.down('fieldcontainer') ;
		    	   st.load(  
		    		   function(records, operation, success) {
		 		    	   for(var i =0;i<st.getCount();i++){
				    		   checkbox.add( { 
				                    boxLabel  :  st.getAt(i).get('name'),
				                    name      : 'actionId',
				                    inputValue:  st.getAt(i).get('id'),
				                    id        : 'checkbox'+st.getAt(i).get('id')
				                 });
				    	}
		    			}
		    	   );
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
	{ text:'模块名' ,		dataIndex:'modelId' } ,
	{ text:'动作名' ,		dataIndex:'actionId' }
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
				  fieldLabel:'动作名',
				  name:'actionId'
				} 
				
 			]
 		       }
,{
			  items: [ 
				{  
    				  xtype:'textfield',
				  fieldLabel:'模块名',
				  name:'modelId'
				} 
				
 			]
 		       }
       		        ],
       		        buttons: ['->', {
       		            text: '查找',
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
       		            		var   constrainedWin = Ext.create(  'chmade.ModelActionEdit', { title:'Add ModelAction', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore() } );
       		            		constrainedWin.show();
       	                	}
       		        },{
       		 
        		            text: '编辑',
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
