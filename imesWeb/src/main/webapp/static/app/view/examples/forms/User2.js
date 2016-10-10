Ext.define('BaseUser', {
    extend: 'Ext.data.Model',
    fields: [
       {name: 'userName'},
       {name: 'loginAccount'},
       {name: 'id',      type: 'int',      defaultValue: undefined}
    ]
});

Ext.define('Ext.ux.data.proxy.JsonAjaxProxy', {
	extend:'Ext.data.proxy.Ajax',
	alias:'proxy.jsonajax',
	actionMethods : {
		create: "POST",
		read: "POST",
		update: "POST",
		destroy: "POST"
	},
	buildRequest:function (operation) {
		var request = this.callParent(arguments);
	        // For documentation on jsonData see Ext.Ajax.request
        	request.jsonData = request.params;
        	request.params = {};
	        return request;
	},
	/*
	 * @override
	 * Inherit docs. We don't apply any encoding here because
	 * all of the direct requests go out as jsonData
	 */
	applyEncoding: function(value){
		return value;
	}
});
var storeBaseUser = Ext.create('Ext.data.JsonStore', {
//	var storeBaseUser = Ext.create('Ext.data.Store', {
//    autoDestroy: true,
    model: 'BaseUser',
 
    proxy: {
    	  headers: { 
    	        'Accept': 'application/json',
    	        'Content-Type': 'application/json' 
    	    },
        type: 'jsonajax',
        url:'/imes/sys/sysuser/getUserBySearch',
		method:'post',
		actionMethods : 'post',
        reader: { 
        	type: 'json',
        	    root: 'data',
            idProperty: 'id',
            totalProperty: 'total'
        }
    },
//    sorters: [{
//        property: 'userName',
//        direction: 'ASC'
//    }],
    pageSize: 20,
    autoLoad : true 
});

Ext.define('KitchenSink.view.examples.forms.User', {
//    extend: 'KitchenSink.view.examples.Example',
//    extend:  'Ext.grid.Panel',
    extend:  'Ext.panel.Panel',
//    extend: 'Ext.Container',
    requires: [
               'Ext.layout.container.VBox',
               'Ext.form.Panel',
               'Ext.grid.Panel',
               'Ext.form.field.Checkbox',
               'Ext.form.field.Text'
    ], 
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    
    defaults: {
        defaults: {
            width: 400,
            height: 600,
            bodyPadding: 10,
            autoScroll: true,
            margin: 10
        },
        margin: '0 0 10 0'
    },
    items: 
 
            {
         	    type: 'gridpanel',
         	    store : storeBaseUser ,
         	    width : 800,
         	    height: 500,
         	    columns: [
         	        { text: 'Name',  dataIndex: 'name' },
         	        { text: 'Email', dataIndex: 'email', flex: 1 },
         	        { text: 'Phone', dataIndex: 'phone' }
         	    ],
         	/*
         	   dockedItems: [  {
        		    xtype: 'toolbar',
        		    dock: 'top',
        		    items: {
        		    	xtype:'form',
        		       bodyStyle: 'padding:5px 5px 0',
        		        width: 600,
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
		                       	var userStr = Ext.encode(user);
		                       		console.info(   userStr );
		                       		storeBaseUser.on('beforeload', function (store, options) {
		                       			var new_params = user;
		                       			Ext.apply(store.proxy.extraParams, user) ;
		                       		}) ;
		                       		storeBaseUser.load() ;
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
        	                		 var form = this.up('form').getForm();
        	                         form.reset();
        	                	}
        		        }
        		        ]
        		    }
           }]
         	    */
        /*{
            xtype: 'form',
            
            title: 'Add New User',
            frame:true,   dockedItems: [  {
         		    xtype: 'toolbar',
         		    dock: 'top',
         		    items: {
         		    	xtype:'form',
         		       bodyStyle: 'padding:5px 5px 0',
         		        width: 600,
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
         		                fieldLabel: 'First Name',
         		                anchor: '-5',
         		                name: 'first'
         		            }, {
         		                xtype:'textfield',
         		                fieldLabel: 'Company',
         		                anchor: '-5',
         		                name: 'company'
         		            }]
         		        }, {
         		            items: [{
         		                xtype:'textfield',
         		                fieldLabel: 'Last Name',
         		                anchor: '100%',
         		                name: 'last'
         		            },{
         		                xtype:'textfield',
         		                fieldLabel: 'Email',
         		                anchor: '100%',
         		                name: 'email',
         		                vtype:'email'
         		            }]
         		        }],   dockedItems: [  {
         		    xtype: 'toolbar',
         		    dock: 'top',
         		    items: {
         		    	xtype:'form',
         		       bodyStyle: 'padding:5px 5px 0',         		        }, {
         		            items: [{
         		                xtype:'textfield',
         		                fieldLabel: 'Last Name',
         		                anchor: '100%',
         		                name: 'last'
         		            },{
         		                xtype:'textfield',
         		                fieldLabel: 'Email',
         		                anchor: '100%',
         		                name: 'email',
         		                vtype:'email'
         		            }]
         		        }],
         		        buttons: ['->', {
         		            text: 'Save'
         		        }, {
         		            text: 'Cancel'	handler: function() {
                		 var form = this.up('form').getForm();
                         form.reset();
                	}
         		        }]
         		    }
            }]
         		        buttons: ['->', {
         		            text: 'Save'
         		        }, {
         		            text: 'Cancel'
         		        }]
         		    }
            }]
            bodyPadding: 13,
            height: null,
            
            defaultType: 'textfield',
            defaults: { anchor: '100%' },
            
            items: [
                { allowBlank:false, fieldLabel: 'User Name', name: 'userName', emptyText: 'user name' },
                { allowBlank:false, fieldLabel: 'Password', name: 'password', emptyText: 'password', inputType: 'password' },
                { allowBlank:false, fieldLabel: 'Login Account', name: 'loginAccount', emptyText: 'login account' },
            ],
            
            buttons: [
                {text:'Save' , 
                	handler: function() {
                		 var form = this.up('form').getForm();
                		user = form.getValues();
                		console.info(   user );
                		Ext.Ajax.request({
							url:'/imes/sys/sysuser/addUser',
							method:'post',
							jsonData: user
						     ,
							success:function(response){
						     
						    	var txt=response.responseText;
						    	console.info( txt);
							}
                		});
                	}
                },
                {text:'Reset' ,
                	handler: function() {
                		 var form = this.up('form').getForm();
                         form.reset();
                	}
                	 }
            
            ]
        }
         		        width: 600,
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
         		                fieldLabel: 'First Name',
         		                anchor: '-5',
         		                name: 'first'
         		            }, {
         		                xtype:'textfield',
         		                fieldLabel: 'Company',
         		                anchor: '-5',
         		                name: 'company'
         		            }]
         		        }, {
         		            items: [{
         		                xtype:'textfield',
         		                fieldLabel: 'Last Name',
         		                anchor: '100%',
         		                name: 'last'
         		            },{
         		                xtype:'textfield',
         		                fieldLabel: 'Email',
         		                anchor: '100%',
         		                name: 'email',
         		                vtype:'email'
         		            }]
         		        }],
         		        buttons: ['->', {
         		            text: 'Save'
         		        }, {
         		            text: 'Cancel'	handler: function() {
                		 var form = this.up('form').getForm();
                         form.reset();
                	}
         		        }]
         		    }
            }]
         		        buttons: ['->', {
         		            text: 'Save'
         		        }, {
         		            text: 'Cancel'
         		        }]
         		    }
            }]
            bodyPadding: 13,
            height: null,
            
            defaultType: 'textfield',
            defaults: { anchor: '100%' },
            
            items: [
                { allowBlank:false, fieldLabel: 'User Name', name: 'userName', emptyText: 'user name' },
                { allowBlank:false, fieldLabel: 'Password', name: 'password', emptyText: 'password', inputType: 'password' },
                { allowBlank:false, fieldLabel: 'Login Account', name: 'loginAccount', emptyText: 'login account' },
            ],
            
            buttons: [
                {text:'Save' , 
                	handler: function() {
                		 var form = this.up('form').getForm();
                		user = form.getValues();
                		console.info(   user );
                		Ext.Ajax.request({
							url:'/imes/sys/sysuser/addUser',
							method:'post',
							jsonData: user
						     ,
							success:function(response){
						     
						    	var txt=response.responseText;
						    	console.info( txt);
							}
                		});
                	}
                },
                {text:'Reset' ,
                	handler: function() {
                		 var form = this.up('form').getForm();
                         form.reset();
                	}
                	 }
            
            ]
        }
        */
            }
  
});
