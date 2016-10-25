Ext.define('model.SysModelModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'id' },
	{ name:'name' },
	{ name:'url' },
	{ name:'status' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/baseModel'
	}
});
