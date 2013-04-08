Ext.define('Gestures.view.BowSwipe', {
    extend: 'Ext.Container',
    xtype: 'bowswipeview',
    requires: [
       'Ext.TitleBar'
    ],
    config: {
	    items: [
	        {
		        xtype: 'titlebar',
		        title: 'BowSwipe Gesture'
	        }
	    ]
    }
});
