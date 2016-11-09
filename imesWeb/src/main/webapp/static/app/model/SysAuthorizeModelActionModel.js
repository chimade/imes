Ext.define('model.SysAuthorizeModelActionModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'userId' },
		{ name:'type' },
		{ name:'actionId' },
		{ name:'factoryId' },
		{ name:'id' },
		{ name:'roleId' },
		{ name:'modelId' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/baseAuthorizeModelAction'
	}
});
