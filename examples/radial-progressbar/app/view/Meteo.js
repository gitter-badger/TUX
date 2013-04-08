Ext.define('RadialProgressBar.view.Meteo', {
    extend: 'Ext.Container',
    xtype: 'meteoview',
    requires: [
        'Ext.TitleBar',
        'Ext.Toolbar',
        'Ext.tux.progressbar.Radial'
    ],
    config: {
	    cls: 'x-meteo-view',
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
	            title: 'Meteo'
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
		                text: 'Simulate Cold Day',
		                iconCls: 'lightning',
		                season: 'winter'
	                },
	                {
		                text: 'Simulate Hot Day',
		                iconCls: 'favorites',
		                season: 'summer'
	                }
	            ]
            },
            {
	            layout: 'vbox',
	            items: [
	                {
			            xtype: 'radialprogressbar',
			            itemId: 'minimum',
			            ui: 'cold',
			            value: 30
		            },
		            {
			            cls: 'x-info-box',
					    html: 'Temperature Min.'
		            }
	            ]
            },
            {
	            layout: 'vbox',
	            cls: 'x-max-box',
	            items: [
	                {
			            xtype: 'radialprogressbar',
					    itemId: 'maximum',
					    ui: 'hot',
					    value: 80
		            },
		            {
			            cls: 'x-info-box',
					    html: 'Temperature Max.'
		            }
	            ]
            }
        ]
    }
});