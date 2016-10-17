Ext.define('SysLabelTemplateStore', {
    extend: 'Ext.data.JsonStore',
    constructor: function(config) {
        config = Ext.apply({
        model: 'model.SysLabelTemplateModel',
        proxy: {
        	  headers: { 
        	        'Accept': 'application/json',
        	        'Content-Type': 'application/json' 
        	    },
            type: 'jsonajax', 
            url:'/imes/sys/labelTemplate/labelTemplates',
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
//            property: 'labelTemplateName',
//            direction: 'ASC'
//        }],
        pageSize: 2,
        autoLoad : true 
        }, config);
        this.callParent([config]);
    }
});
