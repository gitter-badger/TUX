Ext.define('RadialProgressBar.view.Audio', {
    extend: 'Ext.Container',
    xtype: 'audioview',
    requires: [
        'Ext.TitleBar',
        'Ext.Toolbar',
        'Ext.Audio',
        'Ext.tux.progressbar.Radial'
    ],
    config: {
	    cls: 'x-audio-view',
	    layout: {
		    type: 'box',
		    pack: 'center',
		    align: 'center'
	    },
	    items: [
	        {
	            xtype: 'titlebar',
	            docked: 'top',
	            ui: 'gray',
	            title: 'Audio'
            },
            {
	            xtype: 'toolbar',
	            docked: 'top',
	            ui: 'gray',
	            defaults: {
		            flex: 1
	            },
	            items: [
	                {
		                action: 'play',
		                iconCls: 'play'
	                },
	                {
		                action: 'stop',
		                iconCls: 'stop'
	                },
	                {
		                action: 'volumedown',
		                iconCls: 'volume_mute'
	                },
	                {
		                action: 'volumeup',
		                iconCls: 'volume'
	                }
	            ]
            },
            {
	            xtype: 'radialprogressbar',
	            ui: 'alien'
            },
            {
	            xtype: 'audio',
	            hidden: true,
	            enableControls: false,
	            url: '../resources/shared/audio/crash.mp3'
            }
	    ]
	}
});