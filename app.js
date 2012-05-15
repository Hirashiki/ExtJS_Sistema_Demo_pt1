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
Ext.Loader.setConfig({
  enabled : true,
  paths   : {SistemaDemo:'app'}
});
var aplicacao=Ext.application({
    name: 'SistemaDemo',

    autoCreateViewport: true,

    controllers: [
        'Main'
    ]
});
