/**
 * @class PhoneGap.controller.SpeechRecognizer
 * @extend Ext.app.Controller
 * Application controller which controls the SpeechRecognizer View.
 */
Ext.define('PhoneGap.controller.SpeechRecognizer',{
    extend: 'Ext.app.Controller',
    config: {
	    control: {
            'speechrecognizerview selectfield': {
	            change: 'onCultureChange'
            }
	    }
	},
	onCultureChange: function(field, value){
		
		var speechRecognizer = Ext.tux.device.SpeechRecognizer;
		
		if(speechRecognizer){
			speechRecognizer.culture = value;
		}

	}
});
