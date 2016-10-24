Ext.define('model.SysModelActionModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'id' },
	{ name:'modelId' },
	{ name:'actionId' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/baseModelAction'
	}
});
