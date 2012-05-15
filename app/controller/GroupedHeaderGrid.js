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
Ext.define('SistemaDemo.controller.GroupedHeaderGrid', {
    extend: 'SistemaDemo.controller.base.BaseController',
    views:['menuPrincipal.GroupedHeaderGrid','menuPrincipal.GroupedHeaderGridBloqueado'],
    stores: ['Companies'],
    init: function() {
    	console.log('init Register ' +this.getFirstTime());
    	if(!this.getFirstTime()){
    		return;
    	}
        this.control({
            'formregister button[action=register]': {
				click: this.onRegisterClick
            }
        });
        this.setFirstTime(false);
    },
	onRegisterClick:function(button){
		console.log('botao Register do form Register clicado');
	}
});
