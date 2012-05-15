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
Ext.define('SistemaDemo.view.form.Login', {
    extend: 'SistemaDemo.view.base.BaseContainer',
    requiredcontrollers:['SistemaDemo.controller.Login'],
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text'
    ],
    alias: 'widget.formlogin',

    items: [
        {
            xtype: 'form',
            
            title: 'Login',
            frame:true,
            bodyPadding: 13,
            height: null,
            
            defaultType: 'textfield',
            defaults: { anchor: '100%' },
            
            items: [
                { allowBlank:false, fieldLabel: 'User ID', name: 'user', emptyText: 'user id' },
                { allowBlank:false, fieldLabel: 'Password', name: 'pass', emptyText: 'password', inputType: 'password' },
                { xtype:'checkbox', fieldLabel: 'Remember me', name: 'remember' }
            ],
            
            buttons: [
                {text:'Register', action:'register'},
                {text:'Login', action:'login'}
            ]
        }
    ]
});
