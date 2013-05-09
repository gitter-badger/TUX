Ext.define('TimeMachine.view.Main', {
    extend: 'Ext.Container',
    xtype: 'mainview',
    requires: [
        'Ext.Button',
        'Ext.TitleBar',
        'Ext.tux.fx.layout.card.TimeMachine'
    ],
    config: {
	    layout: {
            type: 'card',
            animation: {
                type: 'timemachine',
                direction: 'future',
                duration: 1000
            }
        },
        items: [
            {
                xtype: 'titlebar',
                title: 'Time Machine',
                docked: 'top',
                items: [
                    {
                        action: 'previous',
                        direction: 'past',
                        ui: 'plain',
                        iconCls: 'arrow_left',
                        hidden: true
                    },
                    {
                        action: 'next',
                        direction: 'future',
                        ui: 'plain',
                        iconCls: 'arrow_right',
                        align: 'right'
                    }
                ]
            }
        ]
    }
});
