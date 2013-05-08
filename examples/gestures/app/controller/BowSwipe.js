/**
 * @class Gestures.controller.BowSwipe
 * @extend Ext.app.Controller
 * Application controller which handles the BowSwipe example.
 */
Ext.define('Gestures.controller.BowSwipe',{
    extend: 'Ext.app.Controller',
    config: {
	    control: {
		    'bowswipeview': {
			    show: 'onViewShow'
		    }
	    }
	},
	onViewShow: function(view){
		
		view.element.on({
			bowswipe: 'onBowSwipe',
			scope: this
		});
		
	},
	onBowSwipe: function(opt){
		
		Ext.Msg.alert('Bow Event Fired', [
			'<b>Degrees</b>: ' + Math.ceil(opt.degrees),
			'<b>Radiants</b>: ' + opt.radiants,
			'<b>Duration</b>: ' + Math.ceil(opt.duration) + 'ms',
			'<b>Vertical Direction</b>: ' + opt.direction.vertical,
			'<b>Horizontal Direction</b>: ' + opt.direction.horizontal
		].join('<br/>'));
		
	}
});