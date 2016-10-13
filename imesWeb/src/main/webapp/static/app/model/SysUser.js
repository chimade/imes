Ext.define('model.SysUser', {
    extend: 'Ext.data.Model',
    fields: [
       {name: 'userName'},
       {name: 'loginAccount'},
       {name: 'id',      type: 'int',      defaultValue: undefined}
    ]
});