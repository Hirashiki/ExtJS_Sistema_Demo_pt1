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
Ext.define('SistemaDemo.view.Viewport', {
	extend: 'Ext.container.Viewport',
	requires: [
		'Ext.layout.container.Border',
		'Ext.layout.container.HBox',
		'SistemaDemo.view.layout.List'
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
				align: 'stretch'
			},
			items: [
				{
					width: 250,
					bodyPadding: 5,
					xtype: 'menuList'
				},
				{
					cls: 'x-example-panel',
					flex: 1,
					id   : 'mainPanel',
					layout: {
						type: 'fit',
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
