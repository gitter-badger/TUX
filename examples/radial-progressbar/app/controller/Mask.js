/**
 * @class RadialProgressBar.controller.Mask
 * @extend Ext.app.Controller
 * Application controller which controls the Mask
 * example application.
 */
Ext.define('RadialProgressBar.controller.Mask',{
    extend: 'Ext.app.Controller',
    config: {
	    refs: {
            progressBar: 'maskview radialprogressbar'
	    },
	    control: {
            'maskview selectfield': {
	            change: 'onMaskChange'
            }
	    }
	},
	onMaskChange: function(field, value){
		
		var progressbar = this.getProgressBar(),
		    mask = value !== 'nothing';

		progressbar.setImageMask(mask);
		progressbar.setImageCls(value);

	}
});
