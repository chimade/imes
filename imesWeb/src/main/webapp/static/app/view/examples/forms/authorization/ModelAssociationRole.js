 
Ext.define('KitchenSink.view.examples.forms.authorization.ModelAssociationRole', {
    extend:  'Ext.window.Window',
    requires: [
               'Ext.grid.Panel',
               'Ext.grid.column.Action'
           ],
    alias: 'chmade.modelAssociationRole',
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
     	        model: 'model.SysRoleModel',
     	        proxy: {
     	        	  headers: { 
     	        	        'Accept': 'application/json',
     	        	        'Content-Type': 'application/json' 
     	        	    },
     	            type: 'jsonajax', 
     	            url:'/imes/sys/baseAuthorizeModelAction/modelLkRole',
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
     	       listeners : {
     	        	'beforeload' :   function (store, options) {
               			 var role= {  model : { id :modelId  }} ;
               			Ext.apply(store.proxy.extraParams, role) ;
               		}
     	        },
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
    	    	{ text:'角色名' ,	flex: 2, 	dataIndex:'name' } ,
    	    	{ text:'权限列表' ,	flex: 10,	
        			renderer: function (value, meta, record) {  
        				var data = record.store.data.items[ record.index] ;
	    	    		var display = "";
	    	    		if  ( data.raw.model  &&  data.raw.model.actions  &&   data.raw.model.actions.length ) {
	    	    			for(var k=0 ;k<   data.raw.model.actions.length;k++  ) {
	    	    				display = display +  data.raw.model.actions[k].name+"  "  ;
	    	    			}
	    	    		}
//	    	    		console.info(  display);
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
    				  fieldLabel:'角色',
					 name:'name'
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
            		            				{ title:'Edit ModelAssociationActionEdit ' , modelId: modelId ,roleId : selModel[0].data['id'] , constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore()  }
            		            		);
            		            		var actionId = new Array();
            		            		var  loadRecord ={data: {modelId:  modelId } } ;
//            		            		console.info( selModel[0]  );
//            		            		console.info( actions  );
            		            		var  selActions =undefined ; 
            		            		if (  selModel[0].raw.model && selModel[0].raw.model.actions ) 
            		            			selActions =   selModel[0].raw.model.actions ;
//            		            		
//            		            		console.info(  selActions  );
//            		            		console.info(  actions  );
            		           
            		 		    	   var checkbox =  constrainedWin.down('fieldcontainer') ;
            		 		    		constrainedWin.down('form').getForm().loadRecord(  loadRecord );
            		 		 		    	   for(var i =0;i<actions.length;i++){
            		 		 		    		   var checked= false ;
            		 		 		    		   var authModelActionId =undefined ;
            		 		 		    		   if (  selActions ) {
            		 		 		    			   for( var m=0 ; m<selActions.length; m++ ){
//            		 		 		    				   console.info( selActions[m]);
            		 		 		    				   if  ( selActions[m].id == actions[i].id ){
            		 		 		    					   checked = true ; 
            		 		 		    					   authModelActionId  = selActions[m].authorizationModelActionId ;
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
            		 					                   authModelActionId : authModelActionId
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
