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
/*    validations: [
                  {type: 'presence',  field: 'userName'},
                  {type: 'presence',  field: 'loginAccount'},
                  {type: 'length',    field: 'password',     min: 6 ,max:30},
                  {type: 'inclusion', field: 'status',   list: ['激活', '禁止']},
                  {type: 'exclusion', field: 'userName', list: ['Admin', 'Operator']},
                  {type: 'format',    field: 'userName', matcher: /([a-z]+)[0-9]{2,3}/}
              ],*/
	proxy: {
	    type: 'rest',
	    url:'/imes/sys/user'
	}
});