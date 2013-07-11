/**
* @class Ext.tux.dataview.component.AudioTrack
* @extend Ext.dataview.component.DataItem
* @author Andrea Cammarata
* @docauthor Andrea Cammarata
* @aside example audio-track-playlist
*/
Ext.define('Ext.tux.dataview.component.AudioTrack', {
    extend: 'Ext.dataview.component.DataItem',
    xtype: 'audiotrackdataitem',
    requires: ['Ext.tux.AudioTrack'],
    config: {
        
        /**
         * The component custom CSS class.
         */
        cls: 'x-audio-track-data-item',
    
        /**
         * Setting up the DataMap object.
         */
        dataMap: {
    
            getTrack: {
                setCoverArtUrl: 'cover',
                setUrl: 'audio'
            }

        },

        /**
         * @cfg {Ext.tux.AudioCover} track
         * The component that allows the user to see the track cover
         * and hear a preview of the audio file.
         */
        track: {
            xtype: 'audiotrack'
        },
    
        /**
         * @cfg {Ext.Component} title
         * The component used to show the Track title.
         */
        title: {
            cls: 'x-track-info',
            tpl: [ 
                '<div class="title">{title}</div>',
                '<div class="artist">{artist}</div>'
            ]
        },

        /**
         * The component use an 'hbox' stretched layout.
         * In this way the Edit Button will be placed at the
         * right edge of the device screen. */
        layout: {
            type: 'hbox',
            align: 'stretch'
        }

    },

    /**
     * Apply the DataView item Name component.
     * @param {Object} config The configuration Object.
     * @return {Ext.Component} The Name component.
     */
    applyTitle: function(config) {
        return Ext.factory(config, Ext.Component, this.getTitle());
    },

    /**
     * Update the Track title.
     * @param {Ext.Component} newName The new component.
     * @param {Ext.Component} oldName The old component.
     */
    updateTitle: function(newTitle, oldTitle) {
    
        // Get the associated record
        var track = this.getRecord();
    
        /* If is defined a new name component this is added
         * to this DataView component.
         */
        if (oldTitle) {
            this.remove(oldTitle);
        }

        //If is already defined a name component this is removed
        if (newTitle) {
    
            // Apply the track informations
            newTitle.setData({
                title: track.get('title'),
                artist: track.get('artist')
            });
    
            this.add(newTitle);
        }

    },

    /**
     * Apply the DataView Track audio component.
     * @param {Object} config The configuration Object.
     * @return {Ext.tux.AudioCover} The new Audio track component.
     */
    applyTrack: function(config) {
        return Ext.factory(config, Ext.tux.AudioCover, this.getTrack());
    },

    /**
     * Update the Track audio component.
     * @param {Ext.tux.AudioCover} newTrack The new track audio component.
     * @param {Ext.tux.AudioCover} oldTrack The old track audio component.
     */
    updateTrack: function(newTrack, oldTrack) {
    
        /* If is already defined a Track component this
         * will be removed. */
        if (oldTrack) {
            this.remove(oldTrack);
        }
    
        /* If is defined a new Track component this will be added
         * to this DataView component after setting all the required 
         * handlers. */
        if (newTrack) {
    
            newTrack.on({
                flippedchange: 'onFlippedChange',
                scope: this
            });
        
            this.add(newTrack);
        }

    },

    /**
     * Callback function called when an audio track changes its flip status.
     * @param {Ext.tux.AudioCover} track The audio track component.
     * @param {Boolean} flipped The new flipped status.
     * @param {Boolean} oldFlipped The old flipped status.
     */
    onFlippedChange: function(track, flipped, oldFlipped){

        //Getting the dataview
        var dataview = this.getDataview(),

            // Get the eventually already playing track
            playingTrack = dataview.playingTrack;

        if(flipped){

            /* If there is an already playing track, then this
             * needs to be stopped and show back the cover face. */
            if(playingTrack){
                playingTrack.setFlipped(false);
            }

            // Caching the current playing audio track
            dataview.playingTrack = track;
    
        }
        else {
        
            delete dataview.playingTrack;
        
        }
    
    }

});
