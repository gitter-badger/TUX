/**
 * @class ProgressBar.view.Toolbars
 * @extend Ext.Container
 * View which show how the ProgressBar component
 * appears when docked inside a Toolbar. 
 */
Ext.define('ProgressBar.view.Toolbars', {
    extend: 'Ext.Container',
    xtype: 'toolbarsview',
    requires: [
        'Ext.Toolbar',
        'Ext.TitleBar',
        'Ext.tux.progressbar.ProgressBar'
    ],
    config: {
        items: [
            {
                xtype: 'titlebar',
                dock: 'top',
                title: 'Toolbars'
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                ui: 'dark',
                items: [
                    {
                        xtype: 'progressbar',
                        ui: 'dark',
                        value: 50
                    },
                    {
                        xtype: 'button',
                        action: 'cancel',
                        ui: 'plain',
                        iconCls: 'delete_black1'
                    }
                ]
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                ui: 'light',
                items: [
                    {
                        xtype: 'button',
                        ui: 'plain',
                        iconCls: 'arrow_left'
                    },
                    {
                        xtype: 'progressbar',
                        ui: 'light',
                        value: 30
                    }
                ]
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                ui: 'orange',
                defaults: {
                    ui: 'plain'
                },
                items: [
                    {
                        xtype: 'button',
                        iconCls: 'arrow_left'
                    },
                    {
                        xtype: 'progressbar',
                        ui: 'orange',
                        value: 80
                    },
                    {
                        xtype: 'button',
                        iconCls: 'locate'
                    },
                    {
                        xtype: 'button',
                        iconCls: 'trash'
                    }
                ]
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                ui: 'green',
                items: [
                    {
                        xtype: 'progressbar',
                        ui: 'green',
                        animated: false,
                        value: 90
                    }
                ]
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                ui: 'black',
                items: [
                    {
                        xtype: 'progressbar',
                        ui: 'black',
                        value: 40,
                        message: 'Updating your profile...'
                    }
                ]
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                ui: 'red',
                items: [
                    {
                        xtype: 'progressbar',
                        ui: 'red',
                        value: 100,
                        message: 'Operation Successfull Complete!'
                    }
                ]
            },
            {
                docked: 'top',
                xtype: 'toolbar',
                ui: 'white',
                items: [
                    {
                        xtype: 'progressbar',
                        ui: 'white',
                        value: 60,
                        message: 'Please wait...'
                    }
                ]
            }
        ]
    }
});