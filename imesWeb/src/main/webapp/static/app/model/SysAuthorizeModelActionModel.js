Ext.define('model.SysAuthorizeModelActionModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'userId' },
	{ name:'type' },
	{ name:'actionId' },
	{ name:'factoryId' },
	{ name:'id' },
	{ name:'roleId' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/baseAuthorizeModelAction'
	}
});
