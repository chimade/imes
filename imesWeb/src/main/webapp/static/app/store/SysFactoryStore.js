Ext.define('SysFactoryStore', {
    extend: 'Ext.data.JsonStore',
    constructor: function(config) {
        config = Ext.apply({
        model: 'model.SysFactoryModel',
        proxy: {
        	  headers: { 
        	        'Accept': 'application/json',
        	        'Content-Type': 'application/json' 
        	    },
            type: 'jsonajax', 
            url:'/imes/sys/factory/factorys',
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
//            property: 'factoryName',
//            direction: 'ASC'
//        }],
        pageSize: 10,
        autoLoad : true 
        }, config);
        this.callParent([config]);
    }
});
