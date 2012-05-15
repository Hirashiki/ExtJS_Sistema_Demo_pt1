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
Ext.define('SistemaDemo.view.menuPrincipal.Home', {
	extend: 'SistemaDemo.view.base.BaseContainer',
	items: [
		{
			xtype: 'panel',
			title:'teste panel',
			frame:true,
			layout: {
				type: 'hbox',
				align: 'center',
				pack: 'center'
			},
			defaults: {
				width: 200,
				height: 295
			},
			items: [
				{
					xtype: 'panel',
					html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas gravida nibh, quis porttitor felis venenatis id. Nam sodales mollis quam eget venenatis. Aliquam metus lorem, tincidunt ut egestas imperdiet, convallis         lacinia tortor.'
				},
				{
					xtype: 'panel',
					title: 'Title',
					html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas gravida nibh, quis porttitor felis venenatis id. Nam sodales mollis quam eget venenatis. Aliquam metus lorem, tincidunt ut egestas imperdiet, convallis         lacinia tortor.'
				},
				{
					xtype: 'panel',
					title: 'Header Icons',
					tools: [
						{type:'pin'},
						{type:'refresh'},
						{type:'search'},
						{type:'save'}
					],
					html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas gravida nibh, quis porttitor felis venenatis id. Nam sodales mollis quam eget venenatis. Aliquam metus lorem, tincidunt ut egestas imperdiet, convallis         lacinia tortor.'
				},{
					xtype: 'panel',
					title: 'Collapsed Panel',
					collapsed: true,
					collapsible: true,
					//width: 640,
					bodyPadding: 10,
					html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas gravida nibh, quis porttitor felis venenatis id. Nam sodales mollis quam eget venenatis. Aliquam metus lorem, tincidunt ut egestas imperdiet, convallis lacinia tortor.'
				}
			]
		}
	]
});
