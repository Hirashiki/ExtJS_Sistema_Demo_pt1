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
Ext.define('SistemaDemo.store.Menus', {
    extend: 'Ext.data.TreeStore',

    root: {
        expanded: true,
        children: [
            {
                text: 'Menu Principal',
                expanded: true,
                children: [
                    { leaf: true, text: 'Home'             },
                    { leaf: true, text: 'GroupedHeaderGrid' },
                    { leaf: true, text: 'GroupedHeaderGridBloqueado' }
                ]
            },
            {
                text: 'form',
                expanded: true,
                children: [
                    { leaf: true, text: 'Login'             },
                    { leaf: true, text: 'Contact' },
                    { leaf: true, text: 'Register' }
                ]
            }
        ]
    }
});
