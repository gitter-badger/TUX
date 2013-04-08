/**
 * @class Ext.tux.plugin.TouchTimeout
 * @extend Ext.Evented
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @aside example touch-timeout
 */
Ext.define('Ext.tux.plugin.TouchTimeout', {
    extend: 'Ext.Evented',
    alias: 'plugin.touchtimeout',
    requires: ['Ext.tux.progressbar.Radial'],
    config: {
    
        /**
         * @cfg {Ext.Component} component
         * The component to which this plugin is connected.
         * This will usually by set automatically when configuring the component with this plugin.
         * @accessor
         */
        component: null,
        
        /**
         * @cfg {Object} progressBar
         * The radial progressbar configuration.
         */
        progressBar: {
            ui: 'dark'
        }

    },

    /**
     * The default configuration object that
     * will be used to create the timeout ProgressBar.
     * @private
     */
    defaultProgressBarConfig: {
        showValue: false,
        cls: 'x-floating',
        hideAnimation: 'popOut',
        showAnimation: 'popIn'
    },

    /**
     * @private
     * Sets up all of the references the plugin needs
     */
    init: function(component) {
    
        component.element.on({
            taphold: 'onTaphHold',
            touchend: 'onTouchEnd',
            touchmove: 'onTouchMove',
            scope: this
        });

        this.setComponent(component);
    
    },
    
    // @private
    onTaphHold: function(event){
    
        var progressbar = this.getProgressBar();
        progressbar.show();
        progressbar.setValue(100);
        this.onTouchMove(event);
                
    },
    
    // @private
    onTouchEnd: function(){
        
        var progressbar = this.getProgressBar();

        progressbar.setValue(0);
        progressbar.hide();

    },
    
    // @private
    onTouchMove: function(event){
        
        var progressbar = this.getProgressBar(),
            box = progressbar.element.getBox(),
            top = event.pageY - (box.height / 2),
            left = event.pageX - (box.width / 2);

        progressbar.setTop(top);
        progressbar.setLeft(left);
        
    },

    /**
     * Create the radial progressbar and update the getProgressBar reference.
     * @param {Object} config The configuration used to create the progressbar.
     * @private
     */
    applyProgressBar: function(config) {
    
        Ext.applyIf(config, this.defaultProgressBarConfig);
        return Ext.factory(config, Ext.tux.progressbar.Radial, this.getProgressBar());

    },
    
    /**
     * Update the ProgressBar creating the new one and destroying
     * the old one if any.
     * @param {Ext.tux.progressbar.Radial} newProgressBar The new created progressbar.
     * @param {Ext.tux.progressbar.Radial} oldProgressBar The old progressbar that eventually already exists.
     * @private
     */
    updateProgressBar: function(newProgressBar, oldProgressBar){
    
        if(newProgressBar){
    
            newProgressBar.setTop(0);
            newProgressBar.setLeft(0);
            newProgressBar.on('complete', 'fireEvent', this);

        }

        if(oldProgressBar) {
            oldProgressBar.destroy();
        }
        
    },

    // @private
    fireEvent: function(progressbar){

        var component = this.getComponent();
        progressbar.setValue(0);
        progressbar.hide();
        component.fireEvent('timeout', this, component, progressbar);
    
    }

});
