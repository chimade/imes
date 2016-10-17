Ext.define('model.SysShopfloorModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'id' },
	{ name:'code' },
	{ name:'name' },
	{ name:'factoryId' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/shopfloor'
	}
});
