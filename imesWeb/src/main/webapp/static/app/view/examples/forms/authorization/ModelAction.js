Ext.define('KitchenSink.view.examples.forms.authorization.ModelActionEdit' , 	{
		    extend:  'Ext.Window',
		    alias: 'chmade.ModelActionEdit',
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
    		        				allowBlank:false
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
//				    		        ,
//    		        {
//    		            name: 'id',
//    		            hidden:true
//    		        }
    		        ],

    		        buttons: [{
    		            text: '保存'
    		         ,   handler: function() {
    		        	 
    		        	 	var win = this.up('window');
    		                if (   this.up('form').getForm().isValid() ) {  
	    		                var form = this.up('form').getForm();
	    		                
	    		                
	    		                var checkboxs = Ext.ComponentQuery.query(".checkbox");
//	    		                var removeIds = new Array();
	    		                for(var k=0 ;k< checkboxs.length ; k++) {
	    		                	if (   checkboxs[k]  &&  checkboxs[k].modelActionId ) {
	    		                		if (    checkboxs[k].modelActionId !="" ) {
//	    		                				console.info("find modelActionId is not empty ");
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
//	    		                    	console.info(  cbobj );
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
		    	 
//		    	   var st  = Ext.create('SysActionStore',{ pageSize : 100}) ;
//		    	   var checkbox =  this.down('fieldcontainer') ;
//		    	   st.load(  
//		    		   function(records, operation, success) {
//		    			   myLoadRecord();
//		 		    	   for(var i =0;i<st.getCount();i++){
//		 		    		   var checkObj = {
//					    			   width : 100,
//					                    boxLabel  :  st.getAt(i).get('name'),
//					                    name      : 'actionId',
//					                    inputValue:  st.getAt(i).get('id'),
//					                    id        : 'checkbox'+st.getAt(i).get('id')
//					                 };
//				    		   checkbox.add(  checkObj  );
//				    	}
//		    			}
//		    	   );
		    	 
		    }
		}
) ;

 
Ext.define('KitchenSink.view.examples.forms.authorization.ModelAction', {
    extend:  'Ext.panel.Panel',
    requires: [
               'Ext.grid.Panel',
               'Ext.grid.column.Action'
           ],
    alias: 'chmade.sysModelAction',
    header: false,
    pluginStore : undefined ,
    minHeight : 510,
    beforeRender: function() {
        var me = this;
//        me.callParent();
//     	pluginStore =  Ext.create('SysModelActionStore');
     	pluginStore =  Ext.create('SysModelStore',{
      
     	        model: 'model.SysModelModel',
     	        proxy: {
     	        	  headers: { 
     	        	        'Accept': 'application/json',
     	        	        'Content-Type': 'application/json' 
     	        	    },
     	            type: 'jsonajax', 
     	            url:'/imes/sys/baseModelAction/baseModelActions',
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
    	 this.down('gridpanel') .reconfigure(  pluginStore );
    	 this.down('pagingtoolbar') .bindStore(  pluginStore );   var me = this;
         me.callParent();
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
    	    	{ text:'id' ,		dataIndex:'id' ,hidden : true } ,
    	    	{ text:'模块名' ,		dataIndex:'name' } ,
    	    	{ 	text:'动作名' ,	flex:8,	 
    	    			renderer: function (value, meta, record) {  
		    	    		var display = "";
		    	    		if  (  record.raw.actions  &&   record.raw.actions.length ) {
		    	    			for(var k=0 ;k<   record.raw.actions.length;k++  ) {
		    	    				display = display +  record.raw.actions[k].name+"  "  ;
		    	    			}
		    	    		}
    	    				return  display;
    	    		}   	
    	    	}, 
    	    	{ 
    	    		text:'用户' ,	 
    		    	 width: 125 ,
	    			renderer: function (value, meta, record) {  
	    				var me = this ; 
	    				var p =  me.up() ;
//	    				console.info( record);
//	    				console.info( record.data['name'] );
	    				var id = Ext.id();
	    				Ext.defer(function(){
	    					Ext.widget('button',{
	    							renderTo:id,
	    							text:'关联: '+record.data['name'] ,
	    							width: 100,
	    							handler : function( ) {
	           		            		var   f = Ext.create(  'chmade.modelAssociationUser', { title:' 关联用户 ->  '+ record.data['name'], constrainTo : p.getEl() , refreshStore: me.getStore() ,    	closable : true ,
	           		            			maximizable :true , modelName:record.data['name'],modelId: record.data['id']
	           		            			,actions: record.raw.actions
	           		            			} );
	           		            		f.show();
	    							}
	    					});
	    				}, 50);
	    				return Ext.String.format('<div id="{0}"></div>',id );
	    		}   	
	    	} ,
	    	{ 
	    	 width: 125 ,
	    		text:'角色' , 
    			renderer: function (value, meta, record) {  
    				var me = this ; 
    				var p =  me.up() ;
    				var id = Ext.id();
    				Ext.defer(function(){
    					Ext.widget('button',{
    							renderTo:id,
    							text:'关联: '+record.data['name'] ,
    							width: 100,
    							handler : function( ) { 
           		            		var   f = Ext.create(  'chmade.modelAssociationRole',
           		            				{ title:' 关联角色 ->  '+ record.data['name'], constrainTo : p.getEl() , refreshStore: me.getStore() ,    	closable : true ,	maximizable :true , modelName:record.data['name'],modelId: record.data['id']
           		            			,actions: record.raw.actions
           		            			} );
           		            		f.show();
    							
    							}
    					});
    				}, 50);
    				return Ext.String.format('<div id="{0}"></div>',id );
    		}   	
    	}
    	    	/*
    	    	{
    	            xtype:'actioncolumn',
    	            text:'action',
    	            width:150,
    	            items: [ {
    	            	
    	                xtype : 'button',
    	                icon: 'http://127.0.0.1:8080/imes/static/resources/images/user.png',  
    	                tooltip: 'Edit',
    	                handler: function(grid, rowIndex, colIndex) {
    	                    var rec = grid.getStore().getAt(rowIndex);
    	                    alert("Edit " + rec.get('firstname'));
    	                }
    	            },{
    	                icon: '/imes/static/resources/images/group.png',
    	                tooltip: 'Delete',
    	                handler: function(grid, rowIndex, colIndex) {
    	                    var rec = grid.getStore().getAt(rowIndex);
    	                    alert("Terminate " + rec.get('firstname'));
    	                }
    	            }
    	            ]
    	        } */
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
       		        },{
       		 
        		            text: '编辑',
        		            	handler: function() {
        		            		var selModel =  this.up('gridpanel').getSelectionModel().getSelection() ; 
        		            		if  ( selModel.length == 1 ) { 
            		            		var p =  this.up('gridpanel').up().up() ;
            		            		var   constrainedWin = Ext.create(  'chmade.ModelActionEdit', { title:'Edit ModelAction', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore()  } );
            		            		var actionId = new Array();
            		            		var  loadRecord ={data: {modelId: selModel[0].data.id } } ;
            		            	 
             		 		    	   var st  = Ext.create('SysActionStore',{ pageSize : 100}) ;
            		 		    	   var checkbox =  constrainedWin.down('fieldcontainer') ;
            		 		    	   st.load(  
            		 		    		   function(records, operation, success) {
            		 		    				constrainedWin.down('form').getForm().loadRecord(  loadRecord  );
            		 		    			
            		 		 		    	   for(var i =0;i<st.getCount();i++){
            		 		 		    		   var checked= false ;
            		 		 		    		   var modelActionId="" ; 
            		 		 		    		   for(var k=0;k < selModel[0].raw.actions.length;k++		) {
            		 		 		    			   if  (selModel[0].raw.actions[k].id == st.getAt(i).get('id') ) {
            		 		 		    				   checked = true;
            		 		 		    				   modelActionId =selModel[0].raw.actions[k].modelActionId ;
            		 		 		    				   break;
            		 		 		    			   }
            		 		 		    		   }
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
