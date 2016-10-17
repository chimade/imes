Ext.define('model.SysFactoryModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'id' },
	{ name:'code' },
	{ name:'name' },
	{ name:'companyId' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/factory'
	}
});
