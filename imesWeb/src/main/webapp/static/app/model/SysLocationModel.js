Ext.define('model.SysLocationModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'id' },
	{ name:'code' },
	{ name:'name' },
	{ name:'processId' },
	{ name:'shopfloorId' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/location'
	}
});
