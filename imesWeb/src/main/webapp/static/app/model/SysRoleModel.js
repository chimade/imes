Ext.define('model.SysRoleModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'id' },
	{ name:'name' },
	{ name:'factoryId' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/baseRole'
	}
});
