Ext.define('KitchenSink.view.examples.forms.authorization.ModelAssociationActionEdit' , 	{
		    extend:  'Ext.Window',
		    alias: 'chmade.ModelAssociationActionEdit',
		    refreshStore : null ,
		    userId : undefined , 
		    roleId : undefined ,
		    modelId : undefined ,
		    constructor: function(config) {
		    	refreshStore = config.refreshStore ;
		    	userId = config.userId;
		    	roleId = config.roleId;
		    	modelId = config.modelId;
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
//	    		                console.info( checkboxs  );
	    		                for(var k=0 ;k< checkboxs.length ; k++) {
//	    		                	console.info( "run 63 : " + k);
	    		                	if (   checkboxs[k]  &&  checkboxs[k].modelActionId ) {
//	    		                		console.info( "run 65 : " + k);
	    		                		if (    checkboxs[k].modelActionId !="" ) {
//	    		                			console.info( "run 67 : " + k);
	    		                				if (   checkboxs[k].getValue()	 == false ) { 
//	    		                					console.info( "run 69 : " + k);
	    		                						var deleRec =   Ext.create('model.SysAuthorizeModelActionModel',  {'id' :checkboxs[k].id,  "modelId":0, "actionId":0 });
	    		                						deleRec.destroy(); 
	    		                				}
	    		                		}
	    		                }
	    		                }
//	    		                var removeIds = new Array();
	    		                var formValues = form.getValues();
//	    		                var modelId = formValues.modelId;
	    		                var actionIds = formValues.actionId ;
	    		                var m = new Array();
//	    		            	{ name:'userId' },
//	    		        		{ name:'type' },
//	    		        		{ name:'actionId' },
//	    		        		{ name:'factoryId' },
//	    		        		{ name:'id' },
//	    		        		{ name:'roleId' },
//	    		        		{ name:'modelId' }
//	    		                console.info( actionIds  );
	    		                if (  actionIds.length ){
	    		                    for(var i=0 ; i< actionIds.length;i++) {
	    		                    	var cbobj = Ext.getCmp('checkbox'+actionIds[i]);
	    		                    	var idval =null ;
	    		                    	if ( cbobj) {
	    		                    		idval = cbobj.authModelActionId ;
	    		                    		m.push(  Ext.create('model.SysAuthorizeModelActionModel',  {'id' :idval,  "modelId":modelId, "actionId":actionIds[i], userId : userId  }) );
//	    		                    		console.info(  m ); 
	    		                    	}
	    		                    }
	    		                } else{
	    		                	var cbobj = Ext.getCmp('checkbox'+actionIds);
//	    		                	console.info(   cbobj  );
    		                    	var idval = null;
    		                    	if ( cbobj) 
    		                    		idval = cbobj.authModelActionId ;
    		                    	m.push(  Ext.create('model.SysAuthorizeModelActionModel',  { 'id' :idval, "modelId":modelId, "actionId":actionIds,userId : userId }) );
	    		                }
	    		                for(var i=0 ; i< m.length;i++) {
	    		                	var beanModel = m[i];
//	    		                	console.info(beanModel );
	    		                	beanModel.save({
	    		                		success: function(record ,response ) {
		    		                		var r = Ext.decode(response.response.responseText) ;
		    		                		if (r.resultFlag){
		    		                			refreshStore.load();
		    		                			win.close();
		    		                		}
		   		                	    },
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
    actions : undefined ,
    constructor: function(config) {
    	refreshStore = config.refreshStore ;
    	actions = config.actions;
//    	console.info( actions);
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
    	    	{ text:'权限列表' ,	flex: 10,	
        			renderer: function (value, meta, record) {  
        				var data = record.store.data.get( record.index);
	    	    		var display = "";
	    	    		if  ( data.raw.model  &&  data.raw.model.actions  &&   data.raw.model.actions.length ) {
	    	    			for(var k=0 ;k<   data.raw.model.actions.length;k++  ) {
	    	    				display = display +  data.raw.model.actions[k].name+"  "  ;
	    	    			}
	    	    		}
	    				return  display;
    	    		  } ,
    	    	}
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

       		        {
        		            text: '编辑',
        		            	handler: function() {
        		            		var selModel =  this.up('gridpanel').getSelectionModel().getSelection() ; 
        		            		if  ( selModel.length == 1 ) { 
            		            		var p =  this.up('gridpanel').up();
            		            		var   constrainedWin = Ext.create(  
            		            				'chmade.ModelAssociationActionEdit', 
            		            				{ title:'Edit ModelAssociationActionEdit ' , modelId: modelId ,userId : selModel[0].data['id'] , constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore()  }
            		            		);
            		            		var actionId = new Array();
            		            		var  loadRecord ={data: {modelId:  modelId } } ;
//            		            		console.info( selModel[0]  );
//            		            		console.info( actions  );
            		            		var  selActions =undefined ; 
            		            		if (  selModel[0].raw.model && selModel[0].raw.model.actions ) 
            		            			selActions =   selModel[0].raw.model.actions ;
            		            		
            		            		console.info(  selActions  );
            		            		console.info(  actions  );
            		 		    	   var checkbox =  constrainedWin.down('fieldcontainer') ;
            		 		    		constrainedWin.down('form').getForm().loadRecord(  loadRecord );
            		 		 		    	   for(var i =0;i<actions.length;i++){
            		 		 		    		   var checked= false ;
            		 		 		    		   var authorizationModelActionId = null  ;
            		 		 		    		   if (  selActions ) {
            		 		 		    			   for( var m=0 ; m<selActions.length; m++ ){
//            		 		 		    				   console.info( selActions[m]);
            		 		 		    				   if  ( selActions[m].id == actions[i].id ){
            		 		 		    					   checked = true ; 
            		 		 		    					 authorizationModelActionId =  selActions[m].authorizationModelActionId ;
            		 		 		    					   break; 
            		 		 		    				   }
            		 		 		    			   }
            		 		 		    				   
            		 		 		    		   }
            		 		 		    		   var modelActionId="" ; 
            		 		 		    		   var checkObj = {
            		 					    			   width : 100,
            		 					                    boxLabel  :  actions[i].name,
            		 					                   modelActionId :  modelActionId,
            		 					                    name      : 'actionId',
            		 					                   checked : checked ,
            		 					                    inputValue:  actions[i].id ,
            		 					                    id        : 'checkbox'+actions[i].id ,
            		 					                   authModelActionId : authorizationModelActionId
            		 					                 };
            		 		 		    		   	checkbox.add(  checkObj  );
            		 				    	}
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
