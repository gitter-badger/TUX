/**
 * @class EditableList.controller.Main
 * @extend Ext.app.Controller
 * Main application controller.
 */
Ext.define('EditableList.controller.Main',{
    extend: 'Ext.app.Controller',
    config: {
        routes: {
            'singleedit': 'showSingleEdit',
            'multiedit': 'showMultiEdit',
            'components': 'showComponents'
        },
        refs: {
            mainView: 'mainview',
            tabBar: 'mainview tabbar',
            singleEditView: {
                xtype: 'singleeditview',
                autoCreate: true,
                selector: 'singleeditview'
            },
            multiEditView: {
                xtype: 'multieditview',
                autoCreate: true,
                selector: 'multieditview'
            },
            componentsView: {
                xtype: 'componentsview',
                autoCreate: true,
                selector: 'componentsview'
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

    showSingleEdit: function(){
        this.showView(this.getSingleEditView(), 0);
    },

    showMultiEdit: function(){
        this.showView(this.getMultiEditView(), 1);
    },

    showComponents: function(){
	    this.showView(this.getComponentsView(), 2);
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