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
Ext.define('SistemaDemo.controller.Contact', {
    extend: 'SistemaDemo.controller.base.BaseController',
    views:['form.Contact'],
    init: function() {
    	console.log('init Contact ' +this.getFirstTime());
    	if(!this.getFirstTime()){
    		return;
    	}
        this.control({
            'formcontact button[action=send]': {
				click: this.onSendClick
            },
            'formcontact button[action=cancel]': {
				click: this.onCancelClick
            }
        });
        this.setFirstTime(false);
    },
	onSendClick:function(button){
		console.log('botao Send do form Contact clicado');
	},
	onCancelClick:function(button){
		console.log('botao Cancel do form Contact clicado');
	}
});
