/**
 * @class RadialProgressBar.controller.Meteo
 * @extend Ext.app.Controller
 * Application controller which controls the Meteo
 * example application.
 */
Ext.define('RadialProgressBar.controller.Meteo',{
    extend: 'Ext.app.Controller',
    config: {
	    refs: {
		    minimum: 'meteoview #minimum',
		    maximum: 'meteoview #maximum'
	    },
	    control: {
		    'meteoview button': {
			    tap: 'onSimulate'
		    }
	    }
	},
	onSimulate: function(btn){
	    
	    var season = btn.season,
	        minBar = this.getMinimum(),
	        maxBar = this.getMaximum(),
	        rangeMin = season === 'winter' ? 0 : 30,
	        rangeMax = season === 'winter' ? 0 : 50,
	        interval = 5000,
	        minValue, maxValue, swapValue;

        if(this.simulation){
	        clearInterval(this.simulation);
        }        

        this.simulation = setInterval(function(){
	
	        minValue = Math.floor(Math.random() * 50) + rangeMin;
	        maxValue = Math.floor(Math.random() * 50) + rangeMax;
	
	        if(minValue > maxValue){
		        swapValue = maxValue;
		        maxValue = minValue;
		        minValue = swapValue;
	        }
	        
	        minBar.setValue(minValue);
	        maxBar.setValue(maxValue);
	
	        minBar.setUi(minValue <= 50 ? 'cold' : 'hot');
	        maxBar.setUi(maxValue <= 50 ? 'cold' : 'hot');
	
        }, interval); 

		
	}
});