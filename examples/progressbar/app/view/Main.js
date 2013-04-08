/**
 * @class ProgressBar.view.Containers
 * @extend Ext.Container
 * Main application view.
 */
Ext.define('ProgressBar.view.Main', {
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
                        title: 'Containers',
                        href: 'containers',
                        iconCls: 'screens'
                    },
                    {
                        title: 'Toolbars',
                        href: 'toolbars',
                        iconCls: 'minus2'
                    },
                    {
                        title: 'Form Fields',
                        href: 'form',
                        iconCls: 'list'
                    },
                    {
                        title: 'Message Box',
                        href: 'messagebox',
                        iconCls: 'warning_black'
                    }
                ]
            }
        ]
    }
});
