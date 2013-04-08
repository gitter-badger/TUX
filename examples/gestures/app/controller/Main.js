/**
 * @class Gestures.controller.Main
 * @extend Ext.app.Controller
 * Main application controller.
 */
Ext.define('Gestures.controller.Main',{
    extend: 'Ext.app.Controller',
    config: {
        routes: {
	        'bowswipe': 'showBowSwipe',
	        'touchtimeout': 'showTouchTimeout'
        },
        refs: {
            mainView: 'mainview',
            tabBar: 'mainview tabbar',
            bowSwipeView: {
                xtype: 'bowswipeview',
                autoCreate: true,
                selector: 'bowswipeview'
            },
            touchTimeoutView: {
                xtype: 'touchtimeoutview',
                autoCreate: true,
                selector: 'touchtimeoutview'
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
    showTouchTimeout: function(){
	    this.showView(this.getTouchTimeoutView(), 0);
    },
    showBowSwipe: function(){
        this.showView(this.getBowSwipeView(), 1);
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