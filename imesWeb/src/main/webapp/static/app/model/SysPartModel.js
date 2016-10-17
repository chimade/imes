Ext.define('model.SysPartModel', {
    extend: 'Ext.data.Model',  
    fields: [
    	{ name:'id' },
	{ name:'code' },
	{ name:'description' },
	{ name:'revision' },
	{ name:'length' },
	{ name:'width' },
	{ name:'height' },
	{ name:'weight' },
	{ name:'graphic' },
	{ name:'labelData' },
	{ name:'modelCode' },
	{ name:'modelDescription' },
	{ name:'customerCode' },
	{ name:'partFamilyId' }
    ]
	,
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/part'
	}
});
