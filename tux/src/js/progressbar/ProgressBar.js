/**
 * @class Ext.tux.progressbar.ProgressBar
 * @extend Ext.Component
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @aside example progressbar-containers
 * @aside example progressbar-toolbars
 */
Ext.define('Ext.tux.progressbar.ProgressBar', {
    alternateClassName: 'Ext.tux.ProgressBar',
    extend: 'Ext.Component',
    xtype: 'progressbar',

    /**
     * @event complete
     * Fires when the progressbar percentual value reach 100%
     * @param {Ext.tux.ProgressBar} this
     */
    
    cachedConfig: {
    
        /**
         * @cfg {String} baseCls
         * The base CSS class to apply to this component's element.
         * This will also be prepended to other elements within this component.
         */
        baseCls: Ext.baseCSSPrefix + 'progressbar',
    
        /**
         * @cfg {String} imageMaskCls
         * @private
         * The CSS class to add to the progressbar as allowed by {@link #imageMask}.
         * @accessor
         */
        imageMaskCls: Ext.baseCSSPrefix + 'image-mask',

        /**
         * @cfg {String} imageCls
         * Optional CSS class to add to the inner element. This is useful if you want to use a CSS
         * background image to personalize the progressbar look.
         * @accessor
         */
        imageCls: null
    
    },

    config: {

        /**
         * @cfg {boolean} animated
         * Tells the progressbar if the fill element brackground
         * should be animated or not.
         */
        animated: true,

        /**
         * @cfg {boolean} animateOnPaint
         * Tells the progressbar if it needs to be immediately rendered
         * with the value set, or if we want to bring it to the value
         * using an animation.
         */
        animateOnPaint: true, 

        /**
         * @cfg {Number} duration
         * The animation duration in milliseconds used to fill the progressbar
         * with the new percent value.
         */
        duration: 2000,

        /**
         * @cfg {String} message
         * The message to display instead of the percent value.
         */
        message: null,

        /**
         * @cfg {Number} maxValue
         * The maximum ProgressBar value.
         */
        maxValue: 100,

        /**
         * @cfg {Number} value
         * The current ProgressBar value.
         */
        value: 0,

        /**
         * @cfg {boolean} imageMask
         * Whether or not to mask the progressbar with the maskCls configuration.
         * This is needed if you want to use any of the bundled mask images.
         */
        imageMask: false,

        /**
         * @cfg {boolean} showValue
         * Whether or not to to show the progressbar value or message.
         */
        showValue: true

    },
    template: [
        {
            tag: 'span',
            className: 'x-progress-value',
            reference: 'messageElement'
        },
        {
            tag: 'div',
            className: 'x-progress-inner',
            reference: 'innerElement'
        }
    ],

    initialize: function(){
    
        var me = this;

        if(me.getAnimated() && me.getAnimateOnPaint()){
            me.on('painted', 'onPainted', me);
        }
    
    },

    // @private
    onPainted: function(){

        this.doUpdateValue();
        this.un('painted', 'onPainted', this);
    
    },

    /**
     * Update the progressbar with a new value
     * and an information message.
     * @param {Number} value The new value.
     * @param {String} message The information message to show.
     */
    update: function(value, message){
    
        this.setMessage(message);
        this.setValue(value);

    },

    // @private
    updateValue: function(value){

        if(this.getAnimateOnPaint() && this.getAnimated() && !this.isPainted()){
            return;
        }

        this.doUpdateValue(value);

    },

    // @private
    doUpdateValue: function(value) {

        var me = this,
            value = value || me.getValue(),
            duration = me.getDuration(),
            maxValue = this.getMaxValue(),
            message = me.getMessage(),
            percent;

        percent = me.getPercentValue(value);

        if(duration > 0){
            me.runAnimation(percent, duration);
        }
        else {
            me.innerElement.setStyle('width', percent + '%');
        }

        if(!message){
            me.messageElement.setHtml(percent + '%');
        }

        me.checkComplete(percent);

    },

    /**
     * Convert the value into a percentual number.
     * @param {Number} value The number to be converted.
     * @return {Number} The percentual value.
     * @private
     */
    getPercentValue: function(value){
    
        var maxValue = this.getMaxValue();
    
        if (value < 0) {
            value = 0;
        }
        else if(value > maxValue) {
            value = maxValue;
        }

        return ((value * 100) / maxValue).toFixed();
    
    },

    // @private
    updateMessage: function(value){
        this.messageElement.setHtml(value);
    },

    // @private
    updateAnimated: function(value){
        this[value ? 'addCls' : 'removeCls']('x-animated');
    },

    // @private
    updateImageCls: function(imageCls, oldImageCls){
        this.replaceCls(oldImageCls, imageCls);
    },

    // @private
    updateImageMask: function(imageMask){
        this[imageMask ? 'addCls' : 'removeCls'](this.getImageMaskCls());
    },

    // @private
    updateImageMaskCls: function(maskCls, oldMaskCls){
    
        if (this.getImageMask()) {
            this.replaceCls(oldMaskCls, maskCls);
        }
    
    },

    // @private
    updateShowValue: function(value){
        this.messageElement[value ? 'removeCls' : 'addCls']('x-hidden');
    },

    // @private
    checkComplete: function(percent){
    
        var me = this,
            animated = me.getAnimated(),
            duration = me.getDuration();

	    if(me.timeout){
            clearTimeout(me.timeout);
            delete me.timeout;
        }
    
        if(percent === 100){
            me.timeout = setTimeout(function(){
                me.onComplete();
            }, animated ? duration : 0);
        }
    
    },

    // @private
    onComplete: function(){
        this.fireEvent('complete', this);
    },

    /**
     * Run the fill animation to simulate the progress.
     * @param {Number} percent The new percentual fill value.
     * @param {Number} duration The fill animation duration.
     * @private
     */
    runAnimation: function(percent, duration){

        this.innerElement.applyStyles({
            '-webkit-transition': Ext.String.format('width {0}ms {1}', duration, 'ease-in-out'),
            'width': percent + '%'
        });

    }
    
});
