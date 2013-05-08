/**
 * @class ContainerField.view.Main
 * @extend Ext.Container
 * Main application view.
 */
Ext.define('ContainerField.view.Main', {
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
                        title: 'Address',
                        href: 'address',
                        iconCls: 'locate'
                    }
                ]
            }
        ]
    }
});
