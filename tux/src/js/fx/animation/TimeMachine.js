/**
 * @class Ext.tux.fx.animation.TimeMachine
 * @extend Ext.fx.animation.Abstract
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @aside example time-machine
 * Custom TimeMachine animation.
 */
Ext.define('Ext.tux.fx.animation.TimeMachine', {
    extend: 'Ext.fx.animation.Abstract',
    alias: 'animation.timemachine',
    config: {
       
        /**
         * @cfg {String} direction The direction of which the slide animates
         * @accessor
         */
        direction: 'future',

        out: null

    },

    /**
     * This animation supports the "future" direction.
     * If this direction is used, the previous card will
     * be sended back in past and the new one will appears from the future.
     */
    DIRECTION_FUTURE: 'future',
    
    /**
     * This animation supports the "past" direction.
     * If this direction is used, the previous card will
     * be sended back to the future and the new one will appears from the past.
     */
    DIRECTION_PAST: 'past',
    
    // @private
    getData: function() {
    
        var from = this.getFrom(),
            to = this.getTo(),
            direction = this.getDirection(),
            out = this.getOut(),
            minScale = 0.6,
            maxScale = 1.6, 
            fromTransform = {},
            toTransform = {},
            opacity = {}
            
        if(out){
            opacity = { from: 1, to: 0 };
        }else{
            opacity = { from: 0, to: 1 };
        }

        switch (direction) {
    
            case this.DIRECTION_PAST:

                if (out) {
                    toTransform = { scaleX: maxScale, scaleY: maxScale };
                }
                else {
                    fromTransform = { scaleX: minScale, scaleY: minScale };
                }

                break;

            case this.DIRECTION_FUTURE:
            
                if (out) {
                    toTransform = { scaleX: minScale, scaleY: minScale };
                }else{
                    fromTransform = { scaleX: maxScale, scaleY: maxScale };
                }

                break;

        }

        from.set({ 
            'opacity': opacity.from,
            'transform': fromTransform
        });
    
        to.set({ 
            'opacity': opacity.to,
            'transform': toTransform
        });

        return this.callParent(arguments);
    }

});
