/**
 * Cordova Speech Recognizer plugin for Android.
 */
cordova.define("cordova/plugin/speechrecognizer",
  function(require, exports, module) {
    var exec = require("cordova/exec");

    var SpeechRecognizer = function() {};
    
    /**
    * @param {Object} argument The json object which contains the arguments that should be used
    * to initialize the speech recognition process.
    * @param {Function} successCallback The callback which will be called when listen is successful.
    * @param {Function} failureCallback The callback which will be called when listen encouters an error.
    */
    SpeechRecognizer.prototype.listen = function(argument, successCallback, failureCallback) {
        exec(successCallback, failureCallback, 'SpeechRecognizer', 'listen', [argument]);
    };

    var speechRecognizer = new SpeechRecognizer();
    module.exports = speechRecognizer;

});


if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.speechRecognizer) {
    window.plugins.speechRecognizer = cordova.require("cordova/plugin/speechrecognizer");
}

if (!navigator.speechRecognizer) {
    navigator.speechRecognizer = window.plugins.speechRecognizer;
}