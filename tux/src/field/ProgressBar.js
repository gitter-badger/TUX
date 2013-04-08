/**
 * @class Ext.tux.field.ProgressBar
 * @extend Ext.field.Field
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @aside example progressbar-form
 */
Ext.define('Ext.tux.field.ProgressBar', {
    extend: 'Ext.field.Field',
    xtype: 'progressbarfield',
    requires: ['Ext.tux.progressbar.ProgressBar'],
    alternateClassName: 'Ext.form.ProgressBar',
    config: {
    
        /**
         * @cfg {String} progressbarUi
         * @inheritdoc Ext.tux.ProgressBar#ui
         */
        progressbarUi: 'dark',
    
        component: {
            xtype: 'progressbar'
        }

    },
    proxyConfig: {

        /**
         * @inheritdoc Ext.tux.ProgressBar#animated
         * @cfg {boolean} animated
         */
        animated: true,

        /**
         * @inheritdoc Ext.tux.ProgressBar#animateOnPaint
         * @cfg {boolean} animateOnPaint
         */
        animateOnPaint: true,

        /**
         * @inheritdoc Ext.tux.ProgressBar#duration
         * @cfg {Number} duration
         */
        duration: 2000,

        /**
         * @inheritdoc Ext.tux.ProgressBar#message
         * @cfg {String} message
         */
        message: null,

        /**
         * @inheritdoc Ext.tux.ProgressBar#maxValue
         * @cfg {Number} maxValue
         */
        maxValue: 100,

        /**
         * @inheritdoc Ext.tux.ProgressBar#value
         * @cfg {Number} value
         */
        value: 0,

        /**
         * @inheritdoc Ext.tux.ProgressBar#imageMask
         * @cfg {boolean} imageMask
         */
        imageMask: false,

        /**
         * @inheritdoc Ext.tux.ProgressBar#imageMaskCls
         * @cfg {String} imageMaskCls
         */
        imageMaskCls: Ext.baseCSSPrefix + 'image-mask',

        /**
         * @inheritdoc Ext.tux.ProgressBar#imageCls
         * @cfg {String} imageCls
         */
        imageCls: null,

        /**
         * @inheritdoc Ext.tux.ProgressBar#showValue
         * @cfg {boolean} showValue
         */
        showValue: true

    },

    // @inheritdoc Ext.tux.ProgressBar#update
    update: function(percentage, message){
        this.getComponent().update(percentage, message);
    },

    // @private
    updateProgressbarUi: function(value){
        this.getComponent().setUi(value);
    }
    
});