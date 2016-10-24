Ext.define('model.SysActionModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'id' },
	{ name:'itemid' },
	{ name:'name' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/baseAction'
	}
});
