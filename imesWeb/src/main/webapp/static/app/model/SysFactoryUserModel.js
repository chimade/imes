Ext.define('model.SysFactoryUserModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'id' },
	{ name:'factoryId' },
	{ name:'userId' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/baseFactoryUser'
	}
});
