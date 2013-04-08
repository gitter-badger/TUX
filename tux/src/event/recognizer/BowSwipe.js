/**
 * @class Ext.tux.event.recognizer.BowSwipe
 * @extend Ext.event.recognizer.Swipe
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @private
 * 
 * A event recognizer created to recognize bow swipe movements.
 * 
 * This is disabled by default in Sencha Touch as it has a performance impact when your application
 * has vertical scrollers, plus, in most cases it is not very useful.
 * 
 * If you wish to recognize bow swipe movements in your application, please refer to the documentation of
 * {@link Ext.event.recognizer.Recognizer} and {@link Ext#setup}.
 * 
 */
Ext.define('Ext.tux.event.recognizer.BowSwipe', {
    extend: 'Ext.event.recognizer.Swipe',

    handledEvents: ['bowswipe'],

    inheritableStatics: {
        DEGREES_NOT_ENOUGH: 0x13
    },

    config: {
        minDegrees: 40
    },

    onTouchStart: function(e) {
    
        if (this.callParent(arguments) === false) {
            return false;
        }

        var touch = e.changedTouches[0];

        this.startTime = e.time;

        this.startX = touch.pageX;
        this.startY = touch.pageY;

    },

    onTouchMove: function(e) {
    
        var touch = e.changedTouches[0],
            x = touch.pageX,
            y = touch.pageY,
            absDeltaX = Math.abs(x - this.startX),
            absDeltaY = Math.abs(y - this.startY),
            maxDuration = this.getMaxDuration(),
            maxOffset = this.getMaxOffset(),
            time = e.time;

        if (time - this.startTime > maxDuration) {
            return this.fail(this.self.MAX_DURATION_EXCEEDED);
        }

    },

    onTouchEnd: function(e) {

        if (this.onTouchMove(e) !== false) {
            var touch = e.changedTouches[0],
                x = touch.pageX,
                y = touch.pageY,
                deltaX = x - this.startX,
                deltaY = y - this.startY,
                duration = e.time - this.startTime,
                minDegrees = this.getMinDegrees(),
                v1, v2, tmpVangleRad, angleDeg, direction;

            direction = {
	            horizontal: (deltaX < 0) ? 'left' : 'right',
	            vertical: (deltaY < 0) ? 'up' : 'down'
            }; 

            v1 = { x: this.startX, y: this.startY };
            v2 = { x: x, y: y };

            angleRad = Math.acos((v1.x*v2.x + v1.y*v2.y) / (Math.sqrt(v1.x*v1.x + v1.y*v1.y) * Math.sqrt(v2.x*v2.x + v2.y*v2.y)));
            angleDeg = angleRad * 180 / Math.PI;

            if(angleDeg < minDegrees){
                return this.fail(this.self.DEGREES_NOT_ENOUGH);
            }

           this.fire('bowswipe', e, [touch], {
                touch: touch,
                direction: direction,
                duration: duration,
                radiants: angleDeg,
                degrees: angleDeg
            });

        }
    }
});
