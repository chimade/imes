Ext.define('model.SysLabelModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'id' },
	{ name:'labelTemplateId' },
	{ name:'printedCopy' },
	{ name:'status' },
	{ name:'createdDate' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/label'
	}
});
