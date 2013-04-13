/**
 * @class Ext.tux.device.speechrecognizer.Sencha
 * @extend Ext.tux.device.speechrecognizer.Abstract
 * @private
 */
Ext.define('Ext.tux.device.speechrecognizer.Sencha', {
    
    extend: 'Ext.tux.device.speechrecognizer.Abstract',

    listen: function(options){
    
        var me = this,
            defaults = me.defaults;
    
        Ext.device.Communicator.send({
            command: 'SpeechRecognizer#listen',
            callbacks: {
                success: options.success,
                failure: options.failure
            },
            scope: options.scope,
            culture: options.culture || defaults.culture,
            prompt: options.prompt || defaults.prompt
        });
    
    }
    
});