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
Ext.define('SistemaDemo.view.form.Contact', {
    extend: 'SistemaDemo.view.base.BaseContainer',
    requiredcontrollers:['SistemaDemo.controller.Contact'],
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Ext.layout.container.Anchor',
        'Ext.layout.container.HBox'
    ],
	alias:'widget.formcontact',
    items: [{
        xtype: 'form',
        
        title: 'Contact Us',
        frame: true,
        autoScroll:true,
        height: 400,
        width: 400,
        layout: 'anchor',
        border: false,
        bodyPadding: 10,
        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 100,
            labelStyle: 'font-weight:bold'
        },
        defaults: {
            anchor: '100%',
            margins: '0 0 10 0'
        },
        items: [{
            xtype: 'fieldcontainer',
            fieldLabel: 'Your Name',
            labelStyle: 'font-weight:bold;padding:0',
            layout: 'hbox',
            defaultType: 'textfield',
            fieldDefaults: {
                labelAlign: 'top'
            },
            items: [{
                flex: 1,
                name: 'firstName',
                fieldLabel: 'First',
                allowBlank: false
            },
            {
                width: 30,
                name: 'middleInitial',
                fieldLabel: 'MI',
                margins: '0 0 0 5'
            },
            {
                flex: 2,
                name: 'lastName',
                fieldLabel: 'Last',
                allowBlank: false,
                margins: '0 0 0 5'
            }]
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Your Email Address',
            vtype: 'email',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Subject',
            allowBlank: false
        },
        {
            xtype: 'textareafield',
            fieldLabel: 'Message',
            labelAlign: 'top',
            flex: 1,
            margins: '0',
            allowBlank: false
        }],
        buttons: [{
            text: 'Cancel',
            action: 'cancel'
            
        },
        {
            text: 'Send',
            action: 'send'
        }]
    }]
});
