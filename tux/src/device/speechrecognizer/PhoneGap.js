/**
 * @class Ext.tux.device.speechrecognizer.PhoneGap
 * @extend Ext.tux.device.speechrecognizer.Abstract
 * @private
 */
Ext.define('Ext.tux.device.speechrecognizer.PhoneGap', {

    extend: 'Ext.tux.device.speechrecognizer.Abstract',

    listen: function(args){
    
        var me = this,
            defaults = me.defaults,
            onSuccess = args.success,
            onError = args.failure,
            scope = args.scope,
            culture = args.culture || defaults.culture,
            prompt = args.prompt || defaults.prompt,
            options = {};

        if (scope) {
            onSuccess = Ext.Function.bind(onSuccess, scope);
            onError = Ext.Function.bind(onError, scope);
        }

        Ext.apply(options, {
            culture: culture,
            prompt: prompt
        });

        try {
            navigator.speechRecognizer.listen(options, onSuccess, onError);
        }
        catch (e) {
            alert(e);
        }
    
    }

});
