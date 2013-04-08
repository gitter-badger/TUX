/**
 * @class Gestures.controller.TouchTimeout
 * @extend Ext.app.Controller
 * Application controller which handles the TouchTimeout example.
 */
Ext.define('Gestures.controller.TouchTimeout',{
    extend: 'Ext.app.Controller',
    config: {
	    control: {
		    'touchtimeoutview #informations': {
			    timeout: 'onTimeout'
		    }
	    }
	},
	onTimeout: function(plugin, component, progressbar){
		Ext.Msg.alert('Timeout', 'The Timeout event has been fired.');
	}
});