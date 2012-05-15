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
Ext.define('SistemaDemo.controller.Login', {
    extend: 'SistemaDemo.controller.base.BaseController',
    views:['form.Login', 'form.Contact'],
    init: function() {
    	console.log('init Login ' +this.getFirstTime());
    	if(!this.getFirstTime()){
    		return;
    	}
        this.control({
            'formlogin button[action=register]': {
				click: this.onRegisterClick
            },
            'formlogin button[action=login]': {
				click: this.onLoginClick
            },
            'formlogin':{
            	//afterrender: this.teste
            },
            'form':{
            	show: this.teste
            }
        });
        this.setFirstTime(false);
    },
	onRegisterClick:function(button){
		console.log('botao register do form Login clicado');
	},
	onLoginClick:function(button){
		console.log('botao login do form Login clicado');
	},
	teste:function(el){
		console.log('este foi disparado pelo afterrender');
	}
});
