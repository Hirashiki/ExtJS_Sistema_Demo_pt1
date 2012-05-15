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
Ext.define('SistemaDemo.view.layout.List', {
	extend: 'Ext.tree.Panel',
	xtype: 'menuList',
	requires: [
		'SistemaDemo.store.Menus',
		'SistemaDemo.view.base.BaseContainer',
		'SistemaDemo.view.menuPrincipal.Home'
	],
	title: 'Menu',
	rootVisible: false,
	cls: 'examples-list',
	lines: false,
	useArrows: true,
	store: 'Menus'
});
