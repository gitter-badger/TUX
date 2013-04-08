/**
 * @private
 *
 * This easing is typically used for {@link Ext.scroll.Scroller}. It's a combination of
 * {@link Ext.fx.easing.Momentum} and {@link Ext.fx.easing.Bounce}, which emulates deceleration when the animated element
 * is still within its boundary, then bouncing back (snapping) when it's out-of-bound.
 */

Ext.define('Ext.fx.easing.BoundMomentum', {
    extend: 'Ext.fx.easing.Linear',

    requires: [
        'Ext.fx.easing.Momentum',
        'Ext.fx.easing.Bounce'
    ],

    config: {
        /**
         * @cfg {Object} momentum
         * A valid config object for {@link Ext.fx.easing.Momentum}
         * @accessor
         */
        momentum: null,

        /**
         * @cfg {Object} bounce
         * A valid config object for {@link Ext.fx.easing.Bounce}
         * @accessor
         */
        bounce: null,

        minMomentumValue: 0,

        maxMomentumValue: 0
    },

    applyMomentum: function(config, currentEasing) {
        return Ext.factory(config, Ext.fx.easing.Momentum, currentEasing);
    },

    applyBounce: function(config, currentEasing) {
        return Ext.factory(config, Ext.fx.easing.Bounce, currentEasing);
    },

    updateStartTime: function(startTime) {
        this.getMomentum().setStartTime(startTime);

        this.callParent(arguments);
    },

    updateStartValue: function(startValue) {
        this.getMomentum().setStartValue(startValue);
    },

    updateEndValue: function(endValue) {
        this.getMomentum().setEndValue(endValue);
    },

    reset: function() {
        this.lastValue = null;

        this.isBouncingBack = false;

        this.isOutOfBound = false;

        return this.callParent(arguments);
    },

    getValue: function() {
        var momentum = this.getMomentum(),
            bounce = this.getBounce(),
            direction = momentum.getStartValue() - momentum.getEndValue() < 0 ? 1 : -1,
            minValue = this.getMinMomentumValue(),
            maxValue = this.getMaxMomentumValue(),
            boundedValue = (direction == 1) ? maxValue : minValue,
            lastValue = this.lastValue,
            endValue = momentum.getEndValue(),
            now = Date.now(),
            remainingDuration = momentum.getDuration() - (now - momentum.getStartTime()),
            value, velocity;

        if (!this.isOutOfBound) {
            value = momentum.getValue();

            if (momentum.isEnded) {
                this.isEnded = true;
                return value;
            }

            if (value >= minValue && value <= maxValue) {
                return value;
            }

            this.isOutOfBound = true;

            velocity = (endValue - value) / remainingDuration;

            bounce.setStartTime(now)
                  .setStartVelocity(velocity * 200)
                  .setStartValue(boundedValue);
        }

        value = bounce.getValue();

        if (!this.isEnded) {
            if (!this.isBouncingBack) {
                if (lastValue !== null) {
                    if ((direction == 1 && value < lastValue) || (direction == -1 && value > lastValue)) {
                        this.isBouncingBack = true;
                    }
                }
            }
            else {
                if (Math.round(value) == boundedValue) {
                    this.isEnded = true;
                }
            }
        }

        this.lastValue = value;

        return value;
    }
});
