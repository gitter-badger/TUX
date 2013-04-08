Ext.define('Playlist.view.Main', {
    extend: 'Ext.DataView',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.tux.dataview.component.AudioTrack'
    ],
    config: {
	    cls: 'x-playlist-view',
	    store: 'Tracks',
	    useComponents: true,
        defaultType: 'audiotrackdataitem',
        items: [
            {
	            xtype: 'titlebar',
	            dock: 'top',
	            title: 'Playlist'
            }
        ]
    }
});
