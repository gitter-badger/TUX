/**
 * @class ProgressBar.view.MessageBox
 * @extend Ext.Container
 * View which show the new Ext.Msg.progress method which
 * show a PregressBar component docked inside a MessageBox.
 */
Ext.define('ProgressBar.view.MessageBox', {
    extend: 'Ext.Container',
    xtype: 'messageboxview',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        cls: 'x-messages-view',
        scrollable: 'vertical',
        layout: {
	        type: 'vbox',
	        pack: 'center',
	        align: 'center'
        },
        defaults: {
	        ui: 'action',
	        width: '90%'
        },
        items: [
            {
                xtype: 'titlebar',
                ui: 'dark',
                docked: 'top',
                title: 'MessageBox',
                width: '100%'
            },
            {
                xtype: 'button',
                action: 'cancelable',
                text: 'Cancelable',
                iconCls: 'delete'
            },
            {
                xtype: 'button',
                action: 'notcancelable',
                text: 'Not Cancelable',
                iconCls: 'forbidden'
            },
            {
                xtype: 'button',
                action: 'simplesimulation',
                text: 'Simple Simulation',
                iconCls: 'refresh2'
            },
            {
                xtype: 'button',
                action: 'detailedsimulation',
                text: 'Advanced Simulation',
                iconCls: 'info'
            }
        ]
    }
});
