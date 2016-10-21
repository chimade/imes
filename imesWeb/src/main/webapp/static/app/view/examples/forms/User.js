Ext.define('KitchenSink.view.examples.forms.UserEdit' , 	{ 
		    extend:  'Ext.Window',
		    alias: 'chmade.UserEdit',
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
//    		        layout: 'form',
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
    		            fieldLabel: '名字',
    		            name: 'userName',
   		                blankText : '名字,不能为空',
    		            allowBlank: false
    		        },{
    		            fieldLabel: '账号',
   		                blankText : '账号,不能为空',
    		            name: 'loginAccount',
    		            listeners: {
    		            	'blur' :function( component, event,  obj) {
    		            		var  idFlag = this.up('form').getForm().findField('id').getValue() ;
    		            		var oldEqualNew = true ;
    		            		if ( idFlag != "" ) {
  		            			  var rec  = refreshStore.findRecord('id',   this.up('form').getForm().findField('id').getValue() ) ;
		            			  var old =rec.get("loginAccount");
		            			  if (  old != component.getValue() )
		            				  oldEqualNew = false ;
    		            		}
    		            		if (  this.up('form').getForm().findField('id').getValue() == "" || oldEqualNew == false  ) {
	    		            		var url = '/imes/sys/user/'+component.getValue()  ;
	    		            		Ext.Ajax.request({     
	    		            		       url:  url ,  
	    		            		        method: 'get',
	    		            		        success: function(resp,opts) {  
	    		            		        	var r =Ext.decode(  resp.responseText);
	    		            		        	if ( r.resultFlag  ) {
	    		            		        		component.markInvalid("重复的用户账号");
	    		            		        	}
	    		            		        },   
	    		            	             failure: function(resp,opts) { }         		            		         
	    		            		  });  
    		            		}  
    		            	}
    		            } ,
    		            allowBlank: false
    		        },
    		        {
    		            fieldLabel: '密码',
    		            minLength: 6,
    		            maxLength: 30,
    		            inputType: 'password',
    		            name: 'password',
   		                blankText : '密码,不能为空',
    		            allowBlank: false
    		        }
    		        ,
    		        {
    		        	
    		          xtype: 'combo',
 		                blankText : '状态,不能为空',
    		            fieldLabel: '状态',
    		            name: 'status',
    		            displayField: 'name',
    		            valueField: 'key',
    		            store  :{  xtype: 'store', fields:['name', 'key'] , data:[   {'name': '激活' , key: 1} ,{name:'禁止', key:0} ]  } ,
    		            allowBlank: false
    		        },
    		        {
    		            name: 'id',
    		            hidden:true
    		        }
    		        ],

    		        buttons: [{
    		            text: 'Save',
                        formBind: true, 
                        disabled: true,
    		            handler: function() {
    		        	 
    		        	 	var win = this.up('window');
    		                this.up('form').getForm().isValid();
    		                var form = this.up('form').getForm();
    		                var userForm = form.getValues();
    		                var userModel = Ext.create('model.SysUserModel',  userForm);
    		                userModel.save({
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
 
Ext.define('KitchenSink.view.examples.forms.User', {
//    extend: 'KitchenSink.view.examples.Example',
//    extend:  'Ext.grid.Panel',
    extend:  'Ext.panel.Panel',
//    extend: 'Ext.Container',
    alias: 'chmade.sysUser',
    header: false,
    storeBaseUser : undefined ,
//    initComponent: function() {
    beforeRender: function() {
        var me = this;
        me.callParent();
     	storeBaseUser =  Ext.create('SysUserStore');
    	 this.down('gridpanel') .reconfigure(  storeBaseUser );
    	 this.down('pagingtoolbar') .bindStore(  storeBaseUser );
    } ,
    /*
    requires: [
               'Ext.layout.container.VBox',
               'Ext.form.Panel',
               'Ext.grid.Panel',
               'Ext.form.field.Checkbox',
               'Ext.form.field.Text'
    ], */
    title : '',
    layout: {
//        type: 'hbox',
    	type:'fit',
//        align: 'center',
//        align: 'left',
//        pack: 'center'
    },
//    minHeight : 500,
//    defaults: {refreshStore.load();
//        defaults: {
//            width: 650,
//            height: 500,
//            bodyPadding: 10,
//            autoScroll:  true,
//            margin: 10
//        },
//    }, 
    items: [
    {
//		  collapsible: true,
//          collapseDirection: Ext.Component.DIRECTION_LEFT,
    	 	margin: ' 0 0  0 10',
    	 	xtype : 'gridpanel',
    	 	selModel  : Ext.create('Ext.selection.CheckboxModel'    ),
    	    columns: [
           	        { text: 'Name',  dataIndex: 'userName' },
         	        { text: 'Login Account', dataIndex: 'loginAccount', flex: 1 },
         	        { text: 'Id', dataIndex: 'id' ,hidden:false }
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
       		            items: [{
       		                xtype:'textfield',
       		                fieldLabel: 'User Name',
//       		                anchor: '-5',
       		                name: 'userName'
       		            },
       		         {
    		                xtype:'hiddenfield',
    		                name: 'start'
    		            }
       		            ]
       		        }, {
       		            items: [{
       		                xtype:'textfield',
       		                fieldLabel: 'Login Account',
       		                anchor: '100%',
       		                name: 'loginAccount'
       		            }
       		            ]
       		        }
       		        ],
       		        buttons: ['->', {
       		            text: '查找',
                       	handler: function() {
		                       		 var form = this.up('form').getForm();
		                       		 var 	 user = form.getValues();
		                       		storeBaseUser.on('beforeload', function (store, options) {
		                       			var new_params = user;
		                       			Ext.apply(store.proxy.extraParams, user) ;
		                       		}) ;
		                       		storeBaseUser.currentPage=1 ;
		                       		storeBaseUser.load( ) ;
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
       		            		var   constrainedWin = Ext.create(  'chmade.UserEdit', { title:'Add User', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore() } );
       		            		constrainedWin.show();
       	                	}
       		        },{
       		 
        		            text: '编辑',
        		            	handler: function() {
        		            		var selModel =  this.up('gridpanel').getSelectionModel().getSelection() ; 
        		            		if  ( selModel.length == 1 ) {
            		            		var p =  this.up('gridpanel').up().up() ;
            		            		var   constrainedWin = Ext.create(  'chmade.UserEdit', { title:'Edit User', constrainTo : p.getEl() , refreshStore: this.up('gridpanel').getStore()  } );
            		            		constrainedWin.down('form').getForm().findField('password') .allowBlank = true ;
//            		            		constrainedWin.down('form').getForm().findField('password') .blankText = '' ;
//            		            		constrainedWin.down('form').getForm().findField('password') .wasValid =true ;
            		             		constrainedWin.down('form').getForm().loadRecord( selModel[0]  );
            		             		constrainedWin.down('form').getForm().findField('password') .setValue('');
 
            		            		constrainedWin.show();
        		            		} else {
        		            			 alert("please select  one record  to edit ");
        		            		}
        		            	}
       		        },{
        		            text: '删除',
        		            	handler: function() {
        		            		var selModel =  this.up('gridpanel').getSelectionModel().getSelection() ;
        		            		var ids = "";
        		            		for(var k=0 ;k<selModel.length ;k++){
        		            			ids = ids+ selModel[k].data.id +",";
        		            			selModel[k].destroy({
        		            			    success: function() {
        		            			        console.log('The User was destroyed!');
        		            			    }
        		            			});
        		            		}
//        		            		alert("delete ids:"+ids);
        		            		this.up('gridpanel').getStore().load();
        		            	}
       		        }
       		        ]
       		    }
          }]
    	} 
  ]
});
