Ext.define('KitchenSink.view.Header', {
    extend: 'Ext.Toolbar',
    xtype : 'pageHeader',
    
    ui   : 'sencha',
    height: 53,
    
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
//    items: [
//        {
////            xtype: 'panel',
//            xtype: 'component',
//            cls  : 'x-logo',
//            html : 'Welcome Mini MES'
//        }

    items :
{
	 xtype: 'toolbar',
	 ui   : 'sencha',
//	 height: 64,
	 items: [
		{
		xtype: 'component',
		cls  : 'x-logo',
		html : 'Welcome Mini MES'
		}
		,
      '->',
		{
  		xtype: 'component',
  		cls  : 'x-logo',
  		html : ' 切换 | 退出'
  		}
		]
}

//    ]
});
