Ext.define('Gestures.view.TouchTimeout', {
    extend: 'Ext.Container',
    xtype: 'touchtimeoutview',
    requires: [
       'Ext.TitleBar',
       'Ext.tux.plugin.TouchTimeout'
    ],
    config: {
	    cls: 'x-touch-timeout-view',
	    items: [
	        {
		        xtype: 'titlebar',
		        title: 'Touch Timeout Plugin'
	        },
	        {
		        xtype: 'container',
		        itemId: 'informations',
		        cls: 'x-info-box',
		        centered: true,
		        width: 320,
		        html: [
		            'Tap and hold your finger for a couple of seconds',
		            'on this rectangle. Once the ProgressBar is shown',
		            'it will follows your finger movements.',
		            'Raise your finger to cancel the Timeout event.'
		        ].join(' '),
		        plugins: [
		            {
			            xclass: 'Ext.tux.plugin.TouchTimeout',
			            progressBar: {
				            ui: 'white'
			            }
		            }
		        ]
	        }
	    ]
    }
});
