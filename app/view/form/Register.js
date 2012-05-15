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
Ext.define('SistemaDemo.view.form.Register', {
    extend: 'SistemaDemo.view.base.BaseContainer',
    requiredcontrollers:['SistemaDemo.controller.Register'],
    requires: [
        'Ext.form.FieldSet',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'SistemaDemo.store.States'
    ],
	alias:'widget.formregister',
    items: [{
        xtype: 'form',

        frame: true,
        title: 'Register',
        bodyPadding: 13,
        autoScroll:true,

        fieldDefaults: {
            labelAlign: 'right',
            labelWidth: 115,
            msgTarget: 'side'
        },

        items: [{
            xtype: 'fieldset',
            title: 'User Info',
            defaultType: 'textfield',
            defaults: {
                width: 300
            },
            items: [
                { allowBlank:false, fieldLabel: 'User ID', name: 'user', emptyText: 'user id' },
                { allowBlank:false, fieldLabel: 'Password', name: 'pass', emptyText: 'password', inputType: 'password' },
                { allowBlank:false, fieldLabel: 'Verify', name: 'pass', emptyText: 'password', inputType: 'password' }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Contact Information',
            defaultType: 'textfield',
            defaults: {
                width: 300
            },
            items: [{
                fieldLabel: 'First Name',
                emptyText: 'First Name',
                name: 'first'
            },
            {
                fieldLabel: 'Last Name',
                emptyText: 'Last Name',
                name: 'last'
            },
            {
                fieldLabel: 'Company',
                name: 'company'
            },
            {
                fieldLabel: 'Email',
                name: 'email',
                vtype: 'email'
            },
            {
                xtype: 'combobox',
                fieldLabel: 'State',
                name: 'state',
                store: Ext.create('SistemaDemo.store.States'),
                valueField: 'abbr',
                displayField: 'state',
                typeAhead: true,
                queryMode: 'local',
                emptyText: 'Select a state...'
            },
            {
                xtype: 'datefield',
                fieldLabel: 'Date of Birth',
                name: 'dob',
                allowBlank: false,
                maxValue: new Date()
            }]
        }],

        buttons: [{
            text: 'Register',
            disabled: true,
            formBind: true,
            action:'register'
        }]

    }]
});
