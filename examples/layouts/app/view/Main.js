/**
 * @class Layouts.view.Containers
 * @extend Ext.Container
 * Main application view.
 */
Ext.define('Layouts.view.Main', {
    extend: 'Ext.Container',
    xtype: 'mainview',
    requires: [
        'Ext.tab.Bar'
    ],
    config: {
        layout: {
            type: 'card',
            animation: {
                type: 'fade'
            }
        },
        items: [
            {
                xtype: 'tabbar',
                docked: 'bottom',
                items: [
                    {
                        title: 'Orb',
                        href: 'orb',
                        iconCls: 'expand'
                    }
                ]
            }
        ]
    }
});
