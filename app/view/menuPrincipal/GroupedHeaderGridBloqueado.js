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
Ext.define('SistemaDemo.view.menuPrincipal.GroupedHeaderGridBloqueado', {
	extend: 'SistemaDemo.view.base.BaseContainer',
	requiredcontrollers:['SistemaDemo.controller.GroupedHeaderGrid'],
	requires: [
		'Ext.grid.Panel',
		'SistemaDemo.store.Companies'
	],
	alias:'widget.menuprincipalgroupedheadergridbloqueado',
	items: [
		{
			xtype: 'grid',
			title: 'Grouped Header Grid Bloqueado',
			frame: true,
			store: 'Companies',
			width: 640,
			height: 400,
			columnLines: true,
			columns: [
				{
					text     : 'Company',
					flex     : 1,
					sortable : false,
					dataIndex: 'company'
				},
				{
					text: 'Stock Price',
					columns: [
						{
							text     : 'Price',
							width    : 75,
							sortable : true,
							renderer : 'usMoney',
							dataIndex: 'price'
						},
						{
							text     : 'Change',
							width    : 75,
							sortable : true,
							renderer : function(val) {
								if (val > 0) {
									return '<span style="color:green;">' + val + '</span>';
								} else if (val < 0) {
									return '<span style="color:red;">' + val + '</span>';
								}
								return val;
							},
							dataIndex: 'change'
						},
						{
							text     : '% Change',
							width    : 75,
							sortable : true,
							renderer : function(val) {
								if (val > 0) {
									return '<span style="color:green;">' + val + '%</span>';
								} else if (val < 0) {
									return '<span style="color:red;">' + val + '%</span>';
								}
									return val;
								},
							dataIndex: 'pctChange'
						}
					]
				},
				{
					text     : 'Last Updated',
					width    : 95,
					sortable : true,
					renderer : Ext.util.Format.dateRenderer('m/d/Y'),
					dataIndex: 'lastChange'
				}
			]
		}
	]
});
