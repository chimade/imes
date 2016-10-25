Ext.define('model.SysRoleModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'id' },
	{ name:'factoryId' },
	{ name:'name' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/baseRole'
	}
});
