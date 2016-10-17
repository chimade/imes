Ext.define('SysLabelDetailStore', {
    extend: 'Ext.data.JsonStore',
    constructor: function(config) {
        config = Ext.apply({
        model: 'model.SysLabelDetailModel',
        proxy: {
        	  headers: { 
        	        'Accept': 'application/json',
        	        'Content-Type': 'application/json' 
        	    },
            type: 'jsonajax', 
            url:'/imes/sys/labelDetail/labelDetails',
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
//            property: 'labelDetailName',
//            direction: 'ASC'
//        }],
        pageSize: 2,
        autoLoad : true 
        }, config);
        this.callParent([config]);
    }
});
