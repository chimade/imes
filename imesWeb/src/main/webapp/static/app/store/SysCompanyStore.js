Ext.define('SysCompanyStore', {
    extend: 'Ext.data.JsonStore',
    constructor: function(config) {
        config = Ext.apply({
        model: 'model.SysCompanyModel',
        proxy: {
        	  headers: { 
        	        'Accept': 'application/json',
        	        'Content-Type': 'application/json' 
        	    },
            type: 'jsonajax', 
            url:'/imes/sys/company/companys',
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
//            property: 'companyName',
//            direction: 'ASC'
//        }],
        pageSize: 10 ,
        autoLoad : true 
        }, config);
        this.callParent([config]);
    }
});
