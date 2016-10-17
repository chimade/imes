Ext.define('KitchenSink.store.Examples', {
    extend: 'Ext.data.TreeStore',

    root: {
        expanded: true,
        label :'Root',
        children: [
                   {
                       text: 'Grids',label:'Grids',
                       expanded: true,
                       children: [
                           { leaf: true, text: 'Basic Grid', label :'Basic Grid' },
                       ]
                   },
       /*     {
                text: 'Panels',
                expanded: true,
                children: [
                    { leaf: true, text: 'Basic Panel' },
                    { leaf: true, text: 'Framed Panel' }
                ]
            },
            {
                text: 'Grids',
                expanded: true,
                children: [
                    { leaf: true, text: 'Basic Grid' },
                    { leaf: true, text: 'Grouped Grid' },
                    { leaf: true, text: 'Locked Grid' },
                    { leaf: true, text: 'Grouped Header Grid' }
                ]
            },
            {
                text: 'Trees',
                expanded: true,
                children: [
                    { leaf: true, text: 'Basic Tree' }
                ]
            },
            {
                text: 'Tabs',
                expanded: true,
                children: [
                    { leaf: true, text: 'Basic Tabs' },
                    { leaf: true, text: 'Framed Tabs' },
                    { leaf: true, text: 'Icon Tabs' },
                    { leaf: true, text: 'Titled Tab Panels' }
                ]
            },
            {
                text: 'Windows',
                expanded: true,
                children: [
                    { leaf: true, text: 'Basic Window' }
                ]
            },
            */ 
            {
                text: 'System Admin',
                label : 'Forms',
                expanded: true,
                children: [
                    { leaf: true, text: 'Login' ,label:'Login'},
//                    { leaf: true, text: 'Contact' },
                    { leaf: true, text: 'Register',label :'Register' },
                    { leaf: true, text: 'Add User',label :'User' },
                    { leaf: true, text: '公司',label :'Company' },
                    { leaf: true, text: '工厂',label :'Factory' },
//                    { leaf: true, text: 'User Manager Maintenace',label :'UserManager' }
                ]
            }
            /*,
            {
                text: 'Toolbars',
                expanded: true,
                children: [
                    { leaf: true, text: 'Basic Toolbar' },
                    { leaf: true, text: 'Docked Toolbar' }
                ]
            }
            */
        ]
    }
});
