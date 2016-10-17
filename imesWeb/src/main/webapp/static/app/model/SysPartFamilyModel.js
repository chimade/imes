Ext.define('model.SysPartFamilyModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'id' },
	{ name:'code' },
	{ name:'name' },
	{ name:'description' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/partFamily'
	}
});
