Ext.define('Playlist.store.Tracks', {
    extend: 'Ext.data.Store',
    requires: ['Playlist.model.Track'],
    config: {
	    model: 'Playlist.model.Track',
	    autoLoad: true,
	    proxy: {
		    type: 'ajax',
		    url: 'app/music.json'
	    }
    }	
});