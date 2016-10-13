Ext.define('SysUserStore', {
//	Ext.define('SysUserStore', {
    extend: 'Ext.data.JsonStore',
//    alias: 'chmade.sysUserStore',


    constructor: function(config) {
        config = Ext.apply({
        model: 'model.SysUser',
        proxy: {
        	  headers: { 
        	        'Accept': 'application/json',
        	        'Content-Type': 'application/json' 
        	    },
            type: 'jsonajax', 
            url:'/imes/sys/sysuser/getUserBySearch',
    		method:'post',
    		actionMethods : 'post',
            reader: { 
            	type: 'json',
            	 root: 'gridDatas',
            	 idProperty: 'id',
                totalProperty: 'totalProperty'
            }
        },
//        sorters: [{
//            property: 'userName',
//            direction: 'ASC'
//        }],
        pageSize: 2,
        autoLoad : true 
        }, config);
        this.callParent([config]);
    }
});