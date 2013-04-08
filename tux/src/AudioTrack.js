/**
 * @class Ext.tux.AudioTrack
 * @extend Ext.Audio
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @aside example audio-track-playlist
 */
Ext.define('Ext.tux.AudioTrack', {
    extend: 'Ext.Audio',
    xtype: 'audiotrack',
    requires: [
        'Ext.tux.progressbar.Radial',
        'Ext.Button'
    ],

    eventedConfig: {

        /**
         * @cfg {Boolean} flipped
         * False to display the front face which contains the audio track cover art,
         * otherwise true to display the progressbar face on the front one.
         * @accessor
         * @evented
         */
        flipped: false
    
    },

    cachedConfig: {

        /**
         * @cfg {String} baseCls
         * @inheritdoc Ext.Component#baseCls
         */
        baseCls: Ext.baseCSSPrefix + 'audiotrack',

        /**
         * @cfg enableControls
         * Hide the default browser controls because we are going
         * to provide a custom UI to control the audio file.
         * @accessor
         */
        enableControls: false
    
    },

    config: {
    
        /**
         * @cfg coverUrl
         * The url of the picture used as the cover of the audio file.
         * @accessor
         */
        coverArtUrl: null,

        /**
         * @cfg {Object} stopButton
         * The configuration for the stop button.
         */
        stopButton: {
            iconMask: true,
            iconCls: 'none'
        },

        /**
         * @cfg {Object} progressBar
         * The radial progressbar configuration.
         */
        progressBar: {
            showValue: false,
            scale: 'small'
        }

    },

    // @private
    getElementConfig: function() {
    
        var config = this.callParent();

        config.children.push({
            cls: Ext.baseCSSPrefix + 'flip-card',
            reference: 'cardElement',
            children: [
                {
                    classList: ['x-face','x-front'],
                    reference: 'coverElement'
                },
                {
                    classList: ['x-face','x-back'],
                    reference: 'progressbarElement'
                }
            ]
        });
    
        return config;
    
    },

    /**
     * Component initialization function.
     * @private
     */
    initialize: function(){

        var me = this;

        me.on('ended', Ext.bind(me.setFlipped, me, [false]));
        me.coverElement.on('tap', Ext.bind(me.setFlipped, me, [true]));

        me.callParent(arguments);
    
    },

    /**
     * Flip the card to the front / back face after
     * playing / stopping the audio file.
     * @param {Boolean} flipped True to show the front cover face, otherwise
     * will be shown the back progressbar one.
     * @private
     */
    applyFlipped: function(flipped){

        var me = this,
            progressBar = me.getProgressBar();

        if(me.rendered){

            progressBar.setDuration(flipped ? me.getDuration() * 1000: 1000);
            progressBar.setValue(flipped ? 100: 0);
    
            me[flipped ? 'play' : 'stop']();
            me.cardElement.setStyle('-webkit-transform', Ext.String.format('rotateY({0}deg)', flipped ? 180 : 0));
    
        }

        return flipped;

    },

    /**
     * Create the stop button and update the getStopButton reference.
     * @param {Object} config The configuration used to create the button.
     * @private
     */
    applyStopButton: function(config) {
        return Ext.factory(config, Ext.Button, this.getStopButton());
    },
    
    /**
     * Update the Stop button creating the new one and destroying
     * the old one if any.
     * @param {Ext.Button} newButton The new created button.
     * @param {Ext.Button} oldButton The old button that eventually already exists.
     * @private
     */
    updateStopButton: function(newButton, oldButton){

        var me = this;        

        if(newButton){
            newButton.renderTo(me.progressbarElement);
            newButton.on('tap', Ext.bind(me.setFlipped, me, [false]));
        }
        else if (oldButton) {
            oldButton.destroy();
        }
        
    },

    /**
     * Create the radial progressbar and update the getProgressBar reference.
     * @param {Object} config The configuration used to create the progressbar.
     * @private
     */
    applyProgressBar: function(config) {
        return Ext.factory(config, Ext.tux.progressbar.Radial, this.getProgressBar());
    },
    
    /**
     * Update the ProgressBar creating the new one and destroying
     * the old one if any.
     * @param {Ext.tux.progressbar.Radial} newProgressBar The new created progressbar.
     * @param {Ext.tux.progressbar.Radial} oldProgressBar The old progressbar that eventually already exists.
     * @private
     */
    updateProgressBar: function(newProgressBar, oldProgressBar){
    
        if(newProgressBar) {
            newProgressBar.renderTo(this.progressbarElement);
        }
        else if(oldProgressBar) {
            oldProgressBar.destroy();
        }
        
    },

    /**
     * Update tha audio cover art Url.
     * @param {String} value The new audiotrack cover art Url.
     * @private
     */
    updateCoverArtUrl: function(value){
        this.coverElement.setStyle('background', Ext.String.format('url({0})', value));
    }

});