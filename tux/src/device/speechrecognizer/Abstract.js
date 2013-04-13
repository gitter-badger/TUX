/**
 * @class Ext.tux.device.speechrecognizer.Abstract
 * @private
 */
Ext.define('Ext.tux.device.speechrecognizer.Abstract', {
    
    /**
     * @property defaults
     * The default options used for Speech to text recognition.
     */
    defaults: {
        culture: 'en-US',
        prompt: ''
    },

    /**
     * Allows you to capture your voice and get
     * back your speech as a text string.
     * @param {String} culture The culture on which the user
     * is going to talk.
     * @param {String} prompt Optional text prompt to show to the user
     * when asking them to speak. */
    listen: Ext.emptyFn
    
});