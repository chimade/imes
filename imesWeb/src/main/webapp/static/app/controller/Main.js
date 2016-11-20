Ext.define('KitchenSink.controller.Main', {
    extend: 'Ext.app.Controller',
    
    stores: [
        'Examples',
//        'Companies',
//        'Restaurants',
//        'States',
//        'TreeStore'
    ],

    views: [
        'Viewport',
        'Header'
    ],

    refs: [
        {
            ref: 'examplePanel',
            selector: '#examplePanel'
        },
        {
            ref: 'exampleList',
            selector: 'exampleList'
        }
    ],

    init: function() {
    	 this.control({
             'viewport > panel': {
                 render: this.onPanelRendered
             }
         });
        this.control({
            'viewport exampleList': {
            	//itemclick for support tabpanel
            	'itemclick' :function ( v,   record,  item,   index,  e,   eOpts ){
                    if (!record.isLeaf()) {
                        return; 
                    }
            		 this.setActiveExample(this.classNameFromRecord(record), record.raw['label']  );
            	},
 
                'select': function(me, record, item, index, e) {
                    if (!record.isLeaf()) {
                        return; 
                    }
                    this.setActiveExample(this.classNameFromRecord(record), record.raw['label']    );
//                    this.setActiveExample(this.classNameFromRecord(record), record.get('text'));
                },
                afterrender: function(){
                    var me = this,
                        className, exampleList, name, record;
                    setTimeout(function(){
                        className = location.hash.substring(1);
                        exampleList = me.getExampleList();

                        if (className) {
                        	
                            name = className.replace('-', ' ').toLowerCase();
                            record = exampleList.view.store.find('label', name);     
                            for(var k=0 ; k< exampleList.view.store.data.length ; k++) {
                            	if (   exampleList.view.store.data.items[k] .raw['label']  &&   exampleList.view.store.data.items[k] .raw['label'].toLowerCase()  == name   ){
                            		record = k ;
                            		break; 
                            	}
                            }
//                            record = exampleList.view.store.find('text', name);     
                        } else {
							record = exampleList.view.store.find('label', 'grouped header grid');
//							record = exampleList.view.store.find('text', 'grouped header grid');
						}
                        if ( record !=-1) {
                        		exampleList.view.select(record);
                        }
                    }, 0);
                }
            }
        });
    },
    onPanelRendered: function() {
    	  var st = this.getExamplesStore();
//    	  console.info( st);
//    	  var st = this.getExampleList().down('treepanel') ;
//    	  console.info(  st.getRootNode());
    	  st.getRootNode() .cascade( function (){
    		  console.info( this);
    		  if (   this.data.leaf == true ) {
    			  var  hideFlag = true ;
    			  for( var k=0 ;  k< menuUrls.length; k++	) {
    				  if (  this.raw['label'].toLowerCase()  ==menuUrls[k].toLowerCase()  ){
//    					  this.getUI().hide();
    					  hideFlag = false ;
    				  }
    			  }
    			  if  ( hideFlag 	){
    				console.info( this);
//    				this.parentNode.removeChild(this);
    			  }
    			  
    		  }
    	  });
//    	  var temp= new Array();
////    		var endFlag =  menuUrls.length ; 
////    		console.info(  endFlag  );
//	        function getChilds( node) {
////	        	endFlag = endFlag -1 ;
//	        	var ns = node.childNodes ; 
//	        	Ext.each( ns ,function(){
//	        		var nd = this ; 
////	        		endFlag = endFlag -1 ;
//	        		if (! nd.hasChildNodes() ) {
//			        		for( var k=0 ;  k< menuUrls.length; k++	) {
////			        			 console.info(  menuUrls[k] );
////			        			 console.info(    nd.raw['label'].toLowerCase() );
//			        			 if (   nd.raw['label'].toLowerCase()  !=menuUrls[k].toLowerCase()  ) {
////			        				 temp.push( nd );
////			        				  var items = nd.getReferences().treelistRef.itemMap;
////			        				  for(var j in items) {
////			        					  items[j].destroy();
////			        				  }
//			        			 } else {
////			        				 endFlag = endFlag -1 ;
//			        				 console.info( nd );
////			        				 if (  endFlag ==)
//			        			 }
//			        		};
//	        		} else {
//	        			getChilds(nd);
//	        		}
//	        	}) ;
// 
//	        }
//	        getChilds( st.getRootNode() 	);
 
    } ,
    setActiveExample: function(className, title) {
        var examplePanel = this.getExamplePanel(),
            path, example, className;
        
        if (!title) {
            title = className.split('.').reverse()[0];
        }
        //update the title on the panel
//        examplePanel.setTitle(title);
        //remember the className so we can load up this example next time
        location.hash = title.toLowerCase().replace(' ', '-');

        //set the browser window title
        document.title = document.title.split(' - ')[0] + ' - ' + title;
        
        //create the example
        example = Ext.create(className);
 
        //remove all items from the example panel and add new example
//        examplePanel.removeAll();
//        examplePanel.add(      example )
        
        //for tabpanel
    
        var addFlag  =true ;
        var tab = null ;
        if ( examplePanel 	) {
        	if ( examplePanel.items.items.length　)
        	for( var k=0 ;k< examplePanel.items.items.length ; k++	) {
        		if (  className == examplePanel.items.items[k].items.items[0] .__proto__ .$className) {
        			addFlag = false ;
        			tab=  examplePanel.items.items[k] ;
        			break;
        		}
        	}
        }  
      
        if ( addFlag ) {
        		examplePanel.add(      		{ items: example, closable: true ,   header: false , title :title	}        	);
        		examplePanel.setActiveTab(  examplePanel.items.items.length-1 );
        		examplePanel.getActiveTab( ).getHeader().hide();
        }
        else { 
        	examplePanel.setActiveTab( tab );
        }
 
        if ( examplePanel.getHeader() ){
        	examplePanel.getHeader().hide();
        }
    },
    
    // Will be used for source file code
    // loadExample: function(path) {
    //     Ext.Ajax.request({
    //         url: path,
    //         success: function() {
    //         }
    //     });
    // },

    filePathFromRecord: function(record) {
        var parentNode = record.parentNode,
            path = record.raw['label'];
//        path = record.get('text');
        
        while (parentNode && parentNode.raw['label'] != "Root") {
//        	while (parentNode && parentNode.get('text') != "Root") {
            path = parentNode.raw['label'] + '/' + Ext.String.capitalize(path);
//            path = parentNode.get('text') + '/' + Ext.String.capitalize(path);
            parentNode = parentNode.parentNode;
        }

        return this.formatPath(path);
    },

    classNameFromRecord: function(record) {
        var path = this.filePathFromRecord(record);
	 
        path = 'KitchenSink.view.examples.' + path.replace(/\//g,".")
//        path = 'KitchenSink.view.examples.' + path.replace('/', '.');
        return path;
    },

    formatPath: function(string) {
 
        var result = string.split(' ')[0].charAt(0).toLowerCase() + string.split(' ')[0].substr(1),
            paths = string.split(' '),
            ln = paths.length,
            i;
 
        for (i = 1; i < ln; i++) {
   
//        	if (  paths[i].substring(0,1) =="/")
//        		 paths[i] =  paths[i].substring(1, paths[i].length );
        	if ( i == (ln-1))
        		result = result + Ext.String.capitalize(paths[i]);
        	else 
        		  result = result + paths[i] ;
           
        }
        return result;
    }
});
