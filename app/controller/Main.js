/**
 *
 * Sistema Demo utilizando ExtJS
 * Desenvolvido por Ricardo Hirashiki
 * Publicado em: http://www.sitedoricardo.com.br
 * Data: Mai/2012
 *
 * Baseado no exemplo disponível no framework do sencha 4.1.0 "kitchensink"
 * http://http://dev.sencha.com/deploy/ext-4.1.0-gpl/examples/kitchensink/index.html
 *
 */
Ext.define('SistemaDemo.controller.Main', {
    extend: 'SistemaDemo.controller.base.BaseController',
    requires:[
    	'Ext.window.MessageBox',
    	'Ext.tip.*'
	],
    stores: [
        'Menus'//,
        //'Companies',
        //'States'
    ],
    views: [
        'Viewport',
        'layout.Header'
    ],
    refs: [
        {
            ref: 'mainPanel',
            selector: '#mainPanel'
        },
        {
            ref: 'menuList',
            selector: 'menuList'
        }
    ],

    init: function() {
    	console.log('init main ' +this.getFirstTime());
    	if(!this.getFirstTime()){
    		return;
    	}
        this.control({
            'viewport menuList': {
                'select': function(me, record, item, index, e) {
                    if (!record.isLeaf()) {
                        return;
                    }
                    this.setActiveExample(this.classNameFromRecord(record), record.get('text'));
                },
                afterrender: function(){
                    var me = this,
                        className, menuList, name, record;

                    setTimeout(function(){
                        className = location.hash.substring(1);
                        menuList = me.getMenuList();

                        if (className) {
                            name = className.replace('-', ' ');
                            record = menuList.view.store.find('text', name);     
                        } else {
							record = menuList.view.store.find('text', 'Home');
						}
                        menuList.view.select(record);
                    }, 0);
                }
            }
        });
		this.setFirstTime(false);
    },

    setActiveExample: function(className, title) {
    	var me = this;
        var mainPanel = this.getMainPanel(),
            path, mypanel, className;
        
        if (!title) {
            title = className.split('.').reverse()[0];
        }
        
        //remember the className so we can load up this example next time
        location.hash = title.toLowerCase().replace(' ', '-');

        //set the browser window title
        document.title = document.title.split(' - ')[0] + ' - ' + title;
        
        //Implementação 1 - Segurança
        if (className=='SistemaDemo.view.menuPrincipal.GroupedHeaderGridBloqueado'){
        	mypanel = Ext.create('SistemaDemo.view.base.GenericPanel');
        	mypanel.down('panel').setTitle('Permiss&atilde;o Negada: ' + title);
        	mypanel.down('panel').update('<p>Voc&ecirc; n&atilde;o tem permiss&atilde;o para acessar esta fun&ccedil;&atilde;o.</p>');
        		
        }else{
			this.searchForRequiredControllers(className);
        	mypanel = Ext.create(className);
        }
        
        //remove all items from the example panel and add new example

        mainPanel.removeAll();
        mainPanel.add(mypanel);
    },
    

    filePathFromRecord: function(record) {
        var parentNode = record.parentNode,
            path = record.get('text');
        while (parentNode && parentNode.get('text') != "Root") {
            path = parentNode.get('text') + '/' + Ext.String.capitalize(path);

            parentNode = parentNode.parentNode;
        }

        return this.formatPath(path);
    },

    classNameFromRecord: function(record) {
        var path = this.filePathFromRecord(record);

        path = 'SistemaDemo.view.' + path.replace('/', '.');
        return path;
    },

    formatPath: function(string) {
        var result = string.split(' ')[0].charAt(0).toLowerCase() + string.split(' ')[0].substr(1),
            paths = string.split(' '),
            ln = paths.length,
            i;

        for (i = 1; i < ln; i++) {
            result = result + Ext.String.capitalize(paths[i]);
        }

        return result;
    },
    
    searchForRequiredControllers: function (className){
    	var me = this;
		//Verifico se a classe foi Criada
		if (!Ext.ClassManager.isCreated(className)){
			//Crio a Classe
			Ext.syncRequire(className);
		}
		//Verifico a propriedade requiredcontrollers para verificar se h� controllers ligados � esta view
		var requiredcontrollers = Ext.ClassManager.get(className).prototype.requiredcontrollers;
		console.log(requiredcontrollers);
		if(requiredcontrollers){
		       requiredcontrollers.forEach(function(element){
				//var requiredClassName = Ext.ClassManager.getName(element);
				var requiredClassName = element;
				//Verifica se a classe controller pertence � Aplica��o
				var ret = requiredClassName.search('SistemaDemo.controller.');
				if (ret==0){
					console.log('esta e uma classe controller:' + requiredClassName);
					//Crio dinamicamente o controller
					var tmpController = me.getController(requiredClassName);
					//Se for a primeira execu��o, chamo o m�todo init
					if (tmpController.getFirstTime()){
						tmpController.init();
					}
	
				}
			});
		}
    }
});
