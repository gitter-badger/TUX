/**
 * @class ProgressBar.view.Containers
 * @extend Ext.Container
 * Application view which show how the ProgressBar component
 * fits inside standard Containers.
 */
Ext.define('ProgressBar.view.Containers', {
    extend: 'Ext.Container',
    xtype: 'containersview',
    requires: [
        'Ext.TitleBar',
        'Ext.tux.progressbar.ProgressBar'
    ],
    config: {
        defaults: {
            value: 50
        },
        items: [
            {
                xtype: 'titlebar',
                dock: 'top',
                title: 'Containers'
            },
            {
                xtype: 'progressbar',
                ui: 'dark'
            },
            {
                xtype: 'progressbar',
                ui: 'light',
                fillAnimationSpeed: 3000
            },
            {
                xtype: 'progressbar',
                ui: 'orange',
                fillAnimationSpeed: 4000
            },
            {
                xtype: 'progressbar',
                ui: 'green',
                fillAnimationSpeed: 5000
            },
            {
                xtype: 'progressbar',
                ui: 'black',
                value: 80,
                message: 'Getting the products list...'
            }
        ]
    }
});