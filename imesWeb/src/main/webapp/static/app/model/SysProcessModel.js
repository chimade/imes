Ext.define('model.SysProcessModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'id' },
	{ name:'code' },
	{ name:'name' },
	{ name:'shopfloorId' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/process'
	}
});
