Ext.define('model.SysLabelTemplateModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'id' },
	{ name:'code' },
	{ name:'name' },
	{ name:'templateFile' },
	{ name:'description' },
	{ name:'labelField1' },
	{ name:'labelField2' },
	{ name:'labelField3' },
	{ name:'labelField4' },
	{ name:'labelField5' },
	{ name:'labelField6' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/labelTemplate'
	}
});
