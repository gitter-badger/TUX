Ext.define('Gestures.view.Main', {
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
                        title: 'Touch Timeout',
                        href: 'touchtimeout',
                        iconCls: 'time'
                    },
                    {
                        title: 'Bow Swipe',
                        href: 'bowswipe',
                        iconCls: 'network'
                    }
                ]
            }
        ]
    }
});
