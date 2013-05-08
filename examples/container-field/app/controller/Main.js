/**
 * @class ContainerField.controller.Main
 * @extends Ext.app.Controller
 * Main application controller.
 */
Ext.define('ContainerField.controller.Main',{
    extend: 'Ext.app.Controller',
    config: {
        routes: {
            'address': 'showAddress'
        },
        refs: {
            mainView: 'mainview',
            tabBar: 'mainview tabbar',
            addressView: {
                xtype: 'addressview',
                autoCreate: true,
                selector: 'addressview'
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

    showAddress: function(){
        this.showView(this.getAddressView(), 0);
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