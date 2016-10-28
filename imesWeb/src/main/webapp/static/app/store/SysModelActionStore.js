Ext.define('SysModelActionStore', {
    extend: 'Ext.data.JsonStore',
    constructor: function(config) {
        config = Ext.apply({
        model: 'model.SysModelActionModel',
        proxy: {
        	  headers: { 
        	        'Accept': 'application/json',
        	        'Content-Type': 'application/json' 
        	    },
            type: 'jsonajax', 
            url:'/imes/sys/baseModelAction/baseModelActions',
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
//            property: 'baseModelActionName',
//            direction: 'ASC'
//        }],
        pageSize: 10,
        autoLoad : true 
        }, config);
        this.callParent([config]);
    }
});
