{
    override: 'Ext.tux.progressbar.ProgressBar',
    typeAlias: 'progressbar',
    classAlias: 'widget.progressbar',
    className: 'Ext.tux.progressbar.ProgressBar',
    type: 'Ext.tux.progressbar.ProgressBar',
    inherits: 'Ext.Component',
    autoName: 'TUXProgressBar',
    toolbox: {
        name: 'ProgressBar',
        iconCls: 'icon-panel',
        category: 'Containers',
        groups: ['Activity Indicators', 'TUX', 'Third Party UX']
    },
	configs: [
	    {
		    name: 'animated',
	        type: 'boolean',
	        initialValue: true,
	        merge: false
	    },
	    {
		    name: 'animateOnPaint',
	        type: 'boolean',
	        initialValue: false,
	        merge: false
	    },
	    {
		    name: 'duration',
	        type: 'number',
	        initialValue: 2000,
	        merge: false
	    },
	    {
		    name: 'message',
	        type: 'string',
	        initialValue: null,
	        merge: false
	    },
	    {
		    name: 'maxValue',
	        type: 'number',
	        initialValue: 100,
	        merge: false
	    },
	    {
		    name: 'value',
	        type: 'number',
	        initialValue: 0,
	        merge: false
	    },
	    {
		    name: 'imageMask',
	        type: 'boolean',
	        initialValue: false,
	        merge: false
	    },
	    {
		    name: 'showValue',
	        type: 'boolean',
	        initialValue: true,
	        merge: false
	    },
	    {
		    name: 'ui',
	        type: 'auto',
	        editor: 'combo',
	        initialValue: 'dark',
	        merge: true,
	        options: ['light', 'dark']
	    }
	],
    listeners: [
        {
	        name: 'complete',
	        fn: 'onComplete'
        }
    ]
}