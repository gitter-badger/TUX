/**
 * @class Ext.tux.MessageBox
 * @extend Ext.MessageBox
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @aside example progressbar-messagebox
 */
Ext.define('Ext.tux.MessageBox', {
    extend: 'Ext.MessageBox',
    requires: ['Ext.tux.progressbar.ProgressBar'],
    config: {
    
        /**
         * @cfg {Object} progressBar
         * The configuration to be passed if you want an {@link Ext.tux.ProgressBar}
         * in your {@link Ext.tux.MessageBox}.
         */
        progressBar: null

    },

    constructor: function(config) {
    
        this.callParent([config]);
        this.defaultAllowedConfig['progressBar'] = this.defaultConfig['progressBar'];

    },

    /**
     * Show a messagebox which also display an activity progressbar.
     * @param {String} title The title bar text.
     * @param {String} message The message box body text.
     * @param {Function} fn A callback function which is called when the dialog is dismissed by clicking on the configured buttons.
     * @param {String} fn.buttonId The `itemId` of the button pressed, in this case can be only 'cancel'.
     * @param {String} fn.value Value of the input field if either `prompt` or `multiLine` option is `true`.
     * @param {Object} fn.opt The config object passed to show.
     * @param {Object} config The PorgressBar configuration.
     * @param {Object} scope The scope (`this` reference) in which the callback is executed.
     */
    progress: function(title, message, config, fn, scope){
    
        var me = this,
            cancelable = config.cancelable;

        var message = me.show({
            title: title || null,
            message: message || null,
            progressBar: config || {},
            buttons: cancelable ? Ext.MessageBox.CANCEL : false,
            scope: scope,
            fn: function(){
                if(fn){
                    fn.apply(scope, arguments);
                }
            }
        });

        me.buttonsToolbar[cancelable ? 'show' : 'hide']();

        return message;

    },

    // @private
    applyProgressBar: function(progressbar, oldProgressBar){
        return Ext.factory(progressbar, Ext.tux.progressbar.ProgressBar, this.getProgressBar());
    },

    // @private
    updateProgressBar: function(newProgressBar, oldProgressBar){
    
        if(oldProgressBar) {
            this.remove(oldProgressBar);
        }

        if(newProgressBar) {
            this.add(newProgressBar);
        }

    }

}, function(MessageBox){
    
    Ext.onSetup(function() {
        
        delete Ext.Msg;
        Ext.Msg = new MessageBox;

    });
    
});
