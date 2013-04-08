/**
 * @class Ext.tux.progressbar.Radial
 * @extend Ext.tux.progressbar.ProgressBar
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @aside example radial-progressbar-meteo
 * @aside example radial-progressbar-audio
 * @aside example radial-progressbar-mask
 */
Ext.define('Ext.tux.progressbar.Radial', {
    extend: 'Ext.tux.progressbar.ProgressBar',
    xtype: 'radialprogressbar',
    
    cachedConfig: {
    
        /**
         * @cfg {String} baseCls
         * @inheritdoc Ext.tux.ProgressBar#baseCls
         */
        baseCls: 'x-radial-progressbar'
    
    },

    config: {
    
        /**
         * @cfg {"small"/"medium"/"large"} scale
         * The size of the ProgressBar. Three values are allowed:
         *
         * - 'small' - Results in the progressbar element being 80px high and width.
         * - 'medium' - Results in the progressbar element being 200px high and width.
         * - 'large' - Results in the progressbar element being 300px high and width.
         */
        scale: 'medium',

        /**
         * @cfg {Number} donut
         * The inner ProgressBar donut value.
         * The maximum accepted value is 100.
         */
        donut: 60

    },

    /**
     * @property
     * @readonly
     */
    rotationDegrees: 0,

    /**
     * @private
     * An array of allowed scales.
     */
    allowedScales: ['small', 'medium', 'large'],

    /**
     * @private
     */
    deg1: 0,

    /**
     * @private
     */
    deg2: 180,

    template: [
        {
            tag: 'div',
            className: 'x-progress-inner',
            reference: 'innerElement',
            children: [
                {
                    classList: ['x-slice','x-half'],
                    children: [
                        { 
                            reference: 'slice1' 
                        }
                    ]
                },
                {
                    classList: ['x-slice','x-end'],
                    children: [
                        { 
                            reference: 'slice2'
                        }
                    ]
                }
            ]
        },
        {
            className: 'x-progress-value',
            reference: 'messageElement'
        }
    ],

    // @private
    doUpdateValue: function(value){

        var me = this,
            value = value || me.getValue(),
            animated = me.getAnimated(),
            duration = me.getDuration(),
            message = me.getMessage(),
            firstDuration = 0,
            secondDuration = 0,
            newRotationDegrees = 0,
            relativeDeg1 = 0,
            relativeDeg2 = 0,
            firstAbsoluteDeg = 0,
            secondAbsoluteDeg = 0,
            firstRelativeDeg = 0,
            secondRelativeDeg = 0,
            percent,
            first, second, 
            firstDeg, secondDeg;

        newRotationDegrees = (value * 360) / me.getMaxValue();

        percent = me.getPercentValue(newRotationDegrees);

        if(newRotationDegrees < 180) {
    
            relativeDeg1 = Math.abs(newRotationDegrees - me.deg1);
            relativeDeg2 = Math.abs(180 - me.deg2);
    
            me.deg1 = newRotationDegrees;
            me.deg2 = 180;
    
            //
            if(me.rotationDegrees <= 180){
        
                first = me.slice1;
        
                firstRelativeDeg = relativeDeg1;
                
                firstAbsoluteDeg = me.deg1;
                secondAbsoluteDeg = me.deg2;
        
            }
            else {
        
                first = me.slice2;
                second = me.slice1;
        
                firstRelativeDeg = relativeDeg2;
                secondRelativeDeg = relativeDeg1;
                
                firstAbsoluteDeg = me.deg2;
                secondAbsoluteDeg = me.deg1;
                
            }
    
    
        } else {
    
            relativeDeg1 = Math.abs(180 - me.deg1);
            relativeDeg2 = Math.abs(newRotationDegrees - me.deg2);
    
            me.deg1 = 180;
            me.deg2 = newRotationDegrees;

            //
            if(me.rotationDegrees <= 180){
    
                first = me.slice1;
                second = me.slice2;
        
                firstRelativeDeg = relativeDeg1;
                secondRelativeDeg = relativeDeg2;
        
                firstAbsoluteDeg = me.deg1;
                secondAbsoluteDeg = me.deg2;

            }
            else {
        
                first = me.slice2;
        
                firstRelativeDeg = relativeDeg2;
        
                firstAbsoluteDeg = me.deg2;
                secondAbsoluteDeg = me.deg1;
        
            }

        }

        // Calculate the animation duration of the two slices
        firstDuration = animated ? (duration * firstRelativeDeg) / Math.abs(me.rotationDegrees - newRotationDegrees) : 0;
        me.runAnimation(first, firstAbsoluteDeg, firstDuration, 0, true);

        if(second){
            secondDuration = animated ? (duration * secondRelativeDeg) / Math.abs(me.rotationDegrees - newRotationDegrees): 0;
            me.runAnimation(second, secondAbsoluteDeg, secondDuration, firstDuration + 15);
        }
        
        if(!message){
            me.messageElement.setHtml(percent);
        }

        me.checkComplete(percent);

        me.rotationDegrees = newRotationDegrees;

    },

    // @private
    updateDonut: function(value){
        this.getSlices().setStyle('border-width', 100 - value + 'px');
    },

    // @private
    applyScale: function(scale) {
    
        var me = this;

        //check if it is an allowed scale
        if (!Ext.Array.contains(me.allowedScales, scale)) {
            throw new Error('['+ Ext.getDisplayName(arguments.callee) +'] scale must be an allowed scale (' + me.allowedScales.join(', ') + ')');
        }

        return scale;

    },
    
    // @private
    updateScale: function(scale, oldScale){
    
        var me = this,
            prefix = Ext.baseCSSPrefix;
    
        if(oldScale){
            me.removeCls(prefix + oldScale)
        }
    
        if(scale){
            me.addCls(prefix + scale)
        }

    },

    // @private
    getSlices: function(){
        return this.innerElement.select('.x-slice div');
    },

    // @inheritdoc Ext.tux.ProgressBar#getPercentValue
    getPercentValue: function(value){
        return parseInt(((this.getMaxValue() * value) / 360).toFixed());
    },

    // @private
    runAnimation: function(element, degrees, duration, delay, first){

        var format = Ext.String.format;

        element.applyStyles({
            '-webkit-transition': [
                format('-webkit-transform {0}ms {1} {2}ms', duration, first ? 'ease-in' : 'ease-out', delay),
                'border 1000ms ease-in-out 0ms',
            ].join(','),
            '-webkit-transform': format('rotateZ({0}deg)', degrees)
        });

    }

});