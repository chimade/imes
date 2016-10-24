Ext.define('model.SysAuthorizeModelActionModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'entityId' },
	{ name:'type' },
	{ name:'actionId' },
	{ name:'factoryId' },
	{ name:'id' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/baseAuthorizeModelAction'
	}
});
