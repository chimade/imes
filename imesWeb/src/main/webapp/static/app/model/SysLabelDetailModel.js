Ext.define('model.SysLabelDetailModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'id' },
	{ name:'labelId' },
	{ name:'labelData1' },
	{ name:'lableData2' },
	{ name:'labelData3' },
	{ name:'lableData4' },
	{ name:'labelData5' },
	{ name:'lableData6' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/labelDetail'
	}
});
