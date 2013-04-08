/**
 * @class RadialProgressBar.view.Containers
 * @extend Ext.Container
 * Main application view.
 */
Ext.define('RadialProgressBar.view.Main', {
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
                ui: 'gray',
                items: [
                    {
                        title: 'Meteo',
                        href: 'meteo',
                        iconCls: 'cloud'
                    },
                    {
                        title: 'Audio',
                        href: 'audio',
                        iconCls: 'volume'
                    },
                    {
                        title: 'Mask',
                        href: 'mask',
                        iconCls: 'browser'
                    }
                ]
            }
        ]
    }
});
