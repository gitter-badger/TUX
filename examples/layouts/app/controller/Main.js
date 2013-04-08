/**
 * @class Layouts.controller.Main
 * @extend Ext.app.Controller
 * Main application controller.
 */
Ext.define('Layouts.controller.Main',{
    extend: 'Ext.app.Controller',
    config: {
        routes: {
	        'orb': 'showOrb'
        },
        refs: {
            mainView: 'mainview',
            tabBar: 'mainview tabbar',
            orbView: {
                xtype: 'orbview',
                autoCreate: true,
                selector: 'orbview'
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
    showOrb: function(){
        this.showView(this.getOrbView(), 0);
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