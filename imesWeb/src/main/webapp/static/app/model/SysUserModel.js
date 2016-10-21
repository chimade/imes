Ext.define('model.SysUserModel', {
    extend: 'Ext.data.Model',  
    fields: [
       {name: 'userName'},
       {name: 'loginAccount'},
       {name: 'password'},
       {name: 'status'},
       {name: 'id',      type: 'int',      defaultValue: undefined}
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/user'
	}
});