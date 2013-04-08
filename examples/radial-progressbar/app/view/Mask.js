Ext.define('RadialProgressBar.view.Mask', {
    extend: 'Ext.Container',
    xtype: 'maskview',
    requires: [
        'Ext.TitleBar',
        'Ext.tux.progressbar.Radial'
    ],
    config: {
	    cls: 'x-mask-view',
	    layout: {
		    type: 'box',
		    pack: 'center',
		    align: 'center'
	    },
	    items: [
	        {
		        xtype: 'titlebar',
		        docked: 'top',
		        title: 'Masked ProgressBar',
		        ui: 'gray'
	        },
	        {
		        xtype: 'toolbar',
		        docked: 'top',
		        ui: 'gray',
		        items: [
		            {
			            xtype: 'selectfield',
			            flex: 1,
			            options: [
			                { text: 'No Mask',  value: 'nothing' },
                            { text: 'Pie',      value: 'pie'     },
						    { text: 'Alien',    value: 'alien'   },
						    { text: 'Wheel',    value: 'wheel'   },
						    { text: 'World',    value: 'world'   }
						]
		            }
		        ]
	        },
	        {
		        xtype: 'radialprogressbar',
	            itemId: 'minimum',
	            ui: 'gold',
	            value: 100,
	            donut: 10,
	            showValue: false,
	            imageMask: true
	        }
	    ]
	}
});