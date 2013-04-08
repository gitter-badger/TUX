/**
 * @class RadialProgressBar.controller.Main
 * @extend Ext.app.Controller
 * Main application controller.
 */
Ext.define('RadialProgressBar.controller.Main',{
    extend: 'Ext.app.Controller',
    config: {
        routes: {
	        'audio': 'showAudio',
            'meteo': 'showMeteo',
            'mask': 'showMask'
        },
        refs: {
            mainView: 'mainview',
            tabBar: 'mainview tabbar',
            audioView: {
                xtype: 'audioview',
                autoCreate: true,
                selector: 'audioview'
            },
            meteoView: {
                xtype: 'meteoview',
                autoCreate: true,
                selector: 'meteoview'
            },
            maskView: {
                xtype: 'maskview',
                autoCreate: true,
                selector: 'maskview'
            }
        },
        control: {
            tabBar: {
                activetabchange: 'activeTabChange'
            }
        }
    },
    launch: function(){
    
        if(location.hash === ''){
            this.getTabBar().setActiveTab(0);
        }
    
    },
    showMeteo: function(){
        this.showView(this.getMeteoView(), 0);
    },
    showAudio: function(){
	    this.showView(this.getAudioView(), 1);
    },
    showMask: function(){
	    this.showView(this.getMaskView(), 2);
    },
    showView: function(view, tabIndex){

        this.routing = true;
        this.getMainView().setActiveItem(view);
        this.getTabBar().setActiveTab(tabIndex);
    
    },
    activeTabChange: function(tabbar, item){
    
        if(!this.routing){
            this.redirectTo(item.href);
        }
        else {
            delete this.routing;
        }
    
    }
});