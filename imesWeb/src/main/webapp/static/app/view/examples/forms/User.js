Ext.define('KitchenSink.view.examples.forms.UserEdit' , 	{ 
		    extend:  'Ext.Window',
		    alias: 'chmade.UserEdit',
		    actionUrl : '',
		    constructor: function(config) {
		    	actionUrl = config.actionUrl ;
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
    		        items: [{
    		            fieldLabel: 'User Name',
    		            name: 'userName',
    		            allowBlank: false
    		        },{
    		            fieldLabel: 'Login Account',
    		            name: 'loginAccount',
    		            allowBlank: false
    		        } ,
    		        {
    		            name: 'id',
    		            hidden:true
    		        }
    		        ],

    		        buttons: [{
    		            text: 'Save'
    		         ,   handler: function() {
    		                this.up('form').getForm().isValid();
    		                var form = this.up('form').getForm();
    		                user = form.getValues();
    		                Ext.Ajax.request({
    		                	url:  actionUrl ,
    		                	method:'post',
    		                	jsonData: user
						     ,
						     success:function(response){
						    	 var txt=response.responseText;
						     }
    		                });
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
        pack: 'center'
    },
//    minHeight : 500,
//    defaults: {
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
       		        items: [{
       		            items: [{
       		                xtype:'textfield',
       		                fieldLabel: 'User Name',
       		                anchor: '-5',
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
       		        }],
       		        buttons: ['->', {
       		            text: 'Search',
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
       		            		var   constrainedWin = Ext.create(  'chmade.UserEdit', { title:'Add User', constrainTo : p.getEl() ,actionUrl:  '/imes/sys/sysuser/addUser' } );
       		            		constrainedWin.show();
       	                	}
       		        },{
       		 
        		            text: 'Edit',
        		            	handler: function() {
        		            		var selModel =  this.up('gridpanel').getSelectionModel().getSelection() ; 
        		            		if  ( selModel.length == 1 ) {
            		            		var p =  this.up('gridpanel').up().up() ;
            		            		var   constrainedWin = Ext.create(  'chmade.UserEdit', { title:'Edit User', constrainTo : p.getEl() ,actionUrl:  '/imes/sys/sysuser/userEdit' } );
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
