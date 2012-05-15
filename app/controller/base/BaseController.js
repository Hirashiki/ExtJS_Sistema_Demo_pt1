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
Ext.define('SistemaDemo.controller.base.BaseController', {
    extend: 'Ext.app.Controller',
    firstTime:true,
	init:function(){
			console.log('init Base ' + this.getFirstTime());
	},
	getFirstTime: function(){
		return this.firstTime;
	},
	setFirstTime:function(value){
		this.firstTime=value;
	}
});
