Ext.define('KitchenSink.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Border',
        'Ext.layout.container.HBox',
        'KitchenSink.view.List'
    ],
    
    layout: 'border',
    
    items: [
        {
            region: 'north',
            xtype : 'pageHeader'
        },
        
        {
            region: 'center',
            
            layout: {
                type : 'hbox',
                 align: 'stretch' ,
//            	  type: 'border',
            	  padding: 5
            },
            
            items: [
                {
                    width: 250,
                    bodyPadding: 5,
                    xtype: 'exampleList',
                    split: true,
                    region: 'west',
//                    collapsible: true,
//                    titleCollapse : true 
                },
                
                {
                    cls: 'x-example-panel',
                    flex: 1,
                    title: '&nbsp;',
                    id   : 'examplePanel',
                    layout: {
                        type: 'vbox',
                        align: 'center',
                        pack: 'center'
                    },
                    overflowY: 'auto',
                    bodyPadding: 0
                }
            ]
        },
        {
            xtype: 'pageHeader',
            region: 'south',
            height: 13
        }
    ]
});
