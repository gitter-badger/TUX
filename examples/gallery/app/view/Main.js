Ext.define('Gallery.view.Main', {
    extend: 'Ext.tux.dataview.gallery.Gallery',
    xtype: 'mainview',
    config: {
	    title: 'Albums',
	    store: 'Photos',
	    toolbar: {
		    ui: 'black'
	    }
    }
});
