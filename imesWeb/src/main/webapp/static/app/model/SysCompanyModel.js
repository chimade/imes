Ext.define('model.SysCompanyModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'id' },
	{ name:'code' },
	{ name:'name' },
	{ name:'address' },
	{ name:'website' },
	{ name:'telephone' },
	{ name:'description' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/company'
	}
});
