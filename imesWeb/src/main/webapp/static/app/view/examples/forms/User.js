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
        	 root: 'gridDatas',
        	 idProperty: 'id',
            totalProperty: 'totalProperty'
        }
    },
//    sorters: [{
//        property: 'userName',
//        direction: 'ASC'
//    }],
    pageSize: 2,
    autoLoad : true 
});
 
Ext.define('KitchenSink.view.examples.forms.User', {
//    extend: 'KitchenSink.view.examples.Example',
//    extend:  'Ext.grid.Panel',
//    extend:  'Ext.panel.Panel',
    extend: 'Ext.Container',
    /*
    requires: [
               'Ext.layout.container.VBox',
               'Ext.form.Panel',
               'Ext.grid.Panel',
               'Ext.form.field.Checkbox',
               'Ext.form.field.Text'
    ], */
    layout: {
//        type: 'hbox',
    	type:'fit',
//        align: 'center',
//        align: 'left',
//        pack: 'center'
    },
    
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
    	    store:  storeBaseUser , 
    	    columns: [
           	        { text: 'Name',  dataIndex: 'userName' },
         	        { text: 'Login Account', dataIndex: 'loginAccount', flex: 1 },
         	        { text: 'Id', dataIndex: 'id' ,hidden:false }
    	    ],
//    	    height: 400,
//    	    autoScroll : false ,
//    	    width: 290,
    		   dockedItems: [ 
				{
				    xtype: 'pagingtoolbar',
				    store: storeBaseUser,
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
//       		        width: 600,
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
       		            		var p =  this.up('gridpanel').up() ;
       		            		var constrainedWin = Ext.create('Ext.Window', {
       		            		    title: 'Add User',
       		            		    width: 365,
       		            		    height: 200,
       		            		    x: 300,
       		            		    y: 20,
       		            		    constrain: true,
       		            		    constrainTo : p.getEl(), 
       		            		    layout: 'fit',
       		            		    items: {
       		            		        xtype: 'form',
       		            		        layout: 'form',
       		            		        frame: true,
//       		            		        title: 'Simple Form',
       		            		        bodyPadding: '5 5 0',
       		            		        width: 350,
       		            		        fieldDefaults: {
       		            		            msgTarget: 'side',
       		            		            labelWidth: 105
       		            		        },
       		            		        defaultType: 'textfield',
       		            		        items: [{
       		            		            fieldLabel: 'User Name',
       		            		            afterLabelTextTpl: true,
       		            		            name: 'userName',
       		            		            allowBlank: false
       		            		        },{
       		            		            fieldLabel: 'Login Account',
       		            		            afterLabelTextTpl: true,
       		            		            name: 'loginAccount',
       		            		            allowBlank: false
       		            		        } ],

       		            		        buttons: [{
       		            		            text: 'Save',
       		            		            handler: function() {
       		            		                this.up('form').getForm().isValid();
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
//       		      						    	 console.info( txt);
       		      						     }
       		            		                });
       		            		            }
       		            		        },{
       		            		            text: 'Cancel',
       		            		            handler: function() {
       		            		            	constrainedWin.close();
       		            		            }
       		            		        }]
       		            		    }
       		            		});
       		            		constrainedWin.show();
       	                	}
       		        }
       		        ]
       		    }
          }]
    	} 
  ]
});
