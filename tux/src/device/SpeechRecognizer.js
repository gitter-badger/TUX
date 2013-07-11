/**
 * @class Ext.tux.device.speechrecognizer.SpeechRecognizer
 */
Ext.define('Ext.tux.device.SpeechRecognizer', {
    
    singleton: true,

    requires: [
        'Ext.device.Communicator',
        'Ext.tux.device.speechrecognizer.PhoneGap',
        'Ext.tux.device.speechrecognizer.Sencha'
    ],

    constructor: function() {
        
        var browserEnv = Ext.browser.is;

        // TODO: it seems there is a bug with touch2.2.0 where PhoneGap is not detected

        //if (Ext.os.is.Android && browserEnv.PhoneGap) {
            return Ext.create('Ext.tux.device.speechrecognizer.PhoneGap');
        //}
        //else {
        //    return Ext.create('Ext.tux.device.speechrecognizer.Sencha');
        //}
    
    }

});