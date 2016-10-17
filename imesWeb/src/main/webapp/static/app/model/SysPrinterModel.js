Ext.define('model.SysPrinterModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'id' },
	{ name:'code' },
	{ name:'name' },
	{ name:'host' },
	{ name:'port' },
	{ name:'resolution' },
	{ name:'description' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/printer'
	}
});
