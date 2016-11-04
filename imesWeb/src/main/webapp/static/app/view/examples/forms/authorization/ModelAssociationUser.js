Ext.define('KitchenSink.view.examples.forms.authorization.ModelAssociationActionEdit' , 	{
		    extend:  'Ext.Window',
		    alias: 'chmade.ModelAssociationActionEdit',
		    refreshStore : null ,
		    constructor: function(config) {
		    	refreshStore = config.refreshStore ;
		    	config = Ext.apply({
		    		width: 410,
		    		height: 260,
		    		x: 300,
		    		y: 20,
		    		constrain: true,
    		    layout: 'fit',
    		    items: {
    		        xtype: 'form',
    		        layout: 'form',
    		        frame: true,
    		        bodyPadding: '5 5 0',
    		        width:400,
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
    		        				allowBlank:false,
    		        				readOnly : true
    		        				
    		        			}	,
					 		{
						            xtype: 'fieldcontainer',
						            fieldLabel: '动作名',
						            layout: {
						                type: 'table',
						                columns: 2
						            },
						            defaultType: 'checkboxfield'
							}
    		        ],

    		        buttons: [{
    		            text: '保存'
    		         ,   handler: function() {
    		        	 	var win = this.up('window');
    		                if (   this.up('form').getForm().isValid() ) {  
	    		                var form = this.up('form').getForm();
	    		                var checkboxs = Ext.ComponentQuery.query(".checkbox");
	    		                for(var k=0 ;k< checkboxs.length ; k++) {
	    		                	if (   checkboxs[k]  &&  checkboxs[k].modelActionId ) {
	    		                		if (    checkboxs[k].modelActionId !="" ) {
	    		                				if (   checkboxs[k].getValue()	 == false ) { 
	    		                						var deleRec =   Ext.create('model.SysModelActionModel',  {'id' :checkboxs[k].modelActionId,  "modelId":0, "actionId":0 });
	    		                						deleRec.destroy();
	    		                				}
	    		                		}
	    		                }
	    		                }
	    		                var removeIds = new Array();
	    		                var formValues = form.getValues();
	    		                var modelId = formValues.modelId;
	    		                var actionIds = formValues.actionId ;
	    		                var m = new Array();
	    		                if (  actionIds.length ){
	    		                    for(var i=0 ; i< actionIds.length;i++) {
	    		                    	var cbobj = Ext.getCmp('checkbox'+actionIds[i]);
	    		                    	var idval =null ;
	    		                    	if ( cbobj) {
	    		                    		idval = cbobj.modelActionId ;
	    		                    	m.push(  Ext.create('model.SysModelActionModel',  {'id' :idval,  "modelId":modelId, "actionId":actionIds[i] }) );
	    		                    	}
	    		                    }
	    		                } else{
	    		                	var cbobj = Ext.getCmp('checkbox'+actionIds);
    		                    	var idval = null;
    		                    	if ( cbobj) 
    		                    		idval = cbobj.modelActionId ;
    		                    	m.push(  Ext.create('model.SysModelActionModel',  { 'id' :idval, "modelId":modelId, "actionId":actionIds }) );
	    		                }
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
    		} , 
    		config
		);
		    	   this.callParent([config]);
		    }
		}
) ;
 
Ext.define('KitchenSink.view.examples.forms.authorization.ModelAssociationUser', {
    extend:  'Ext.window.Window',
    requires: [
               'Ext.grid.Panel',
               'Ext.grid.column.Action'
           ],
    alias: 'chmade.modelAssociationUser',
    header: false,
    title: '',
	closable : true ,
	maximizable :true ,
	modelId :undefined ,
	modelName : undefined ,
    pluginStore : undefined ,
    constructor: function(config) {
    	refreshStore = config.refreshStore ;
    	modelId = config.modelId;
    	modelName = config.modelName;
     	pluginStore =  Ext.create('SysModelStore',{
     	        model: 'model.SysUserModel',
     	        proxy: {
     	        	  headers: { 
     	        	        'Accept': 'application/json',
     	        	        'Content-Type': 'application/json' 
     	        	    },
     	            type: 'jsonajax', 
     	            url:'/imes/sys/baseAuthorizeModelAction/modelLkUser',
     	    		method:'post',
     	    		actionMethods : 'post',
     	            reader: { 
     	            	type: 'json',
     	            	 root: 'gridDatas',
     	            	 idProperty: 'id',
     	                totalProperty: 'totalProperty'
     	            }
     	        },
     	        pageSize: 10,
     	        autoLoad : true 
     	}
     	);

    	config = Ext.apply(  {
    		x: 270,
    		y:110,
    		constrain: true,
		    title : '',
		    width : 840,
		    height : 500,
		    modal : true,
			closable : true ,
			maximizable :true ,
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
    	    	{ text:'id' ,		dataIndex:'id' ,hidden : true } ,
    	    	{ text:'用户名' ,	flex: 2, 	dataIndex:'loginAccount' } ,
    	    	{ text:'权限列表' ,	flex: 10,	dataIndex:'name' } ,
    	 
    	    ],
    		   dockedItems: [ 
				{
				    xtype: 'pagingtoolbar',
				    dock: 'bottom',
				    displayInfo: true
				},
    		     {
//				    header: false,
//				    pluginStore : undefined ,
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
    				, hidden:true 
				} 
				,
				{ 
    				  xtype:'textfield',
    				  fieldLabel:'用户账号',
					 name:'loginAccount'
				} 
				
 			]
 		       }
       		        /*
,{
			  items: [ 
				{  
    				  xtype:'textfield',
				  fieldLabel:'模块名',
				  name:'modelId'
				} 
				
 			]

 		       }
*/
       		        ]
       		      ,
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
       		        /*
       		        {
       		            text: '新增',
       		            	handler: function() {
       		            		var p =  this.up('gridpanel').up().up() ;
       		            		var   constrainedWin = Ext.create(  'chmade.ModelActionEdit', { title:'Add ModelAction', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore() } );
      		 		    	   var st  = Ext.create('SysActionStore',{ pageSize : 100}) ;
    		 		    	   var checkbox =  constrainedWin.down('fieldcontainer') ;
    		 		    	   st.load(  
    		 		    		   function(records, operation, success) {
    		 		 		    	   for(var i =0;i<st.getCount();i++){
    		 		 		    		   var checked= false ;
    		 		 		    		   var checkObj = {
    		 					    			   width : 100,
    		 					                    boxLabel  :  st.getAt(i).get('name'),
    		 					                    name      : 'actionId',
    		 					                   checked : checked ,
    		 					                    inputValue:  st.getAt(i).get('id'),
    		 					                    id        : 'checkbox'+st.getAt(i).get('id')
    		 					                 };
    		 				    		   checkbox.add(  checkObj  );
    		 				    	}
    		 		    			}
    		 		    	   );
       		            		constrainedWin.show();
       	                	}
       		        }
       		        
       		        ,*/
       		        {
        		            text: '编辑',
        		            	handler: function() {
        		            		var selModel =  this.up('gridpanel').getSelectionModel().getSelection() ; 
        		            		if  ( selModel.length == 1 ) { 
            		            		var p =  this.up('gridpanel').up();
            		            		var   constrainedWin = Ext.create(  'chmade.ModelAssociationActionEdit', { title:'Edit ModelAssociationActionEdit ', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore()  } );
            		            		var actionId = new Array();
            		            		var  loadRecord ={data: {modelId:  modelId } } ;
             		 		    	   var st  = Ext.create('SysActionStore',{ pageSize : 100}) ;
            		 		    	   var checkbox =  constrainedWin.down('fieldcontainer') ;
            		 		    	   st.load(  
            		 		    		   function(records, operation, success) {
            		 		    				constrainedWin.down('form').getForm().loadRecord(  loadRecord  );
            		 		 		    	   for(var i =0;i<st.getCount();i++){
            		 		 		    		   var checked= false ;
            		 		 		    		   var modelActionId="" ; 
            		 		 		    		   /*
            		 		 		    		   for(var k=0;k < selModel[0].raw.actions.length;k++		) {
            		 		 		    			   if  (selModel[0].raw.actions[k].id == st.getAt(i).get('id') ) {
            		 		 		    				   checked = true;
            		 		 		    				   modelActionId =selModel[0].raw.actions[k].modelActionId ;
            		 		 		    				   break;
            		 		 		    			   }
            		 		 		    		   }
            		 		 		    		   */
            		 		 		    		   var checkObj = {
            		 					    			   width : 100,
            		 					                    boxLabel  :  st.getAt(i).get('name'),
            		 					                   modelActionId :  modelActionId,
            		 					                    name      : 'actionId',
            		 					                   checked : checked ,
            		 					                    inputValue:  st.getAt(i).get('id'),
            		 					                    id        : 'checkbox'+st.getAt(i).get('id')
            		 					                 };
            		 		 		    		   	checkbox.add(  checkObj  );
            		 				    	}
            		 		    			}
            		 		    	   );
            		            		constrainedWin.show();
        		            		} else {
        		            			 alert("please select  one record  to edit ");
        		            		}
        		            	}
       		        },
       		        {
    		            text: '关闭',
    		            	handler: function() {
    		            		 var w=this.up('window');
    		            		 w.close();
    		            	}
       		        }
       		        /*,{
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
       		      */
       		        ]
       		       
       		    }
          }]
    	} 
  ]
    	} ,config);
    	   this.callParent([config]);
    	   
         	 this.down('gridpanel') .reconfigure(  pluginStore );
        	 this.down('pagingtoolbar') .bindStore(  pluginStore );   
    }
});
