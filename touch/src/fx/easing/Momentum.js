/**
 * @private
 */
Ext.define('Ext.fx.easing.Momentum', {

    extend: 'Ext.fx.easing.Linear',

    config: {
        duration: 3000
    },

    getEasingValue: function() {
        var deltaTime = Date.now() - this.getStartTime(),
            duration = this.getDuration(),
            maxEasingValue = 0.99,
            easingValue = 1 - Math.exp(-deltaTime / (1 + duration / 6));

        if (deltaTime >= duration || easingValue >= maxEasingValue) {
            this.isEnded = true;
            return maxEasingValue;
        }

        return easingValue;
    },

    getValue: function() {
        var startValue = this.getStartValue();

        return startValue + this.getEasingValue() * (this.getEndValue() - startValue);
    }
});
