Ext.define('model.SysLineModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'shopfloorId' },
	{ name:'id' },
	{ name:'code' },
	{ name:'name' },
	{ name:'revision' },
	{ name:'shortName' },
	{ name:'longName' },
	{ name:'status' },
	{ name:'workorderId' },
	{ name:'description' },
	{ name:'createdDate' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/line'
	}
});
