/**
 * @class ProgressBar.controller.Main
 * @extend Ext.app.Controller
 * Main application controller.
 */
Ext.define('ProgressBar.controller.Main',{
    extend: 'Ext.app.Controller',
    config: {
        routes: {
            'containers': 'showContainers',
            'messagebox': 'showMessageBox',
            'form': 'showForm',
            'toolbars': 'showToolbars'
        },
        refs: {
            mainView: 'mainview',
            tabBar: 'mainview tabbar',
            containersView: {
                xtype: 'containersview',
                autoCreate: true,
                selector: 'containersview'
            },
            messageBoxView: {
                xtype: 'messageboxview',
                autoCreate: true,
                selector: 'messageboxview'
            },
            formView: {
                xtype: 'formview',
                autoCreate: true,
                selector: 'formview'
            },
            toolbarsView: {
                xtype: 'toolbarsview',
                autoCreate: true,
                selector: 'toolbarsview'
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
    showContainers: function(){
        this.showView(this.getContainersView(), 0);
    },
    showForm: function(){
        this.showView(this.getFormView(), 2);
    },
    showToolbars: function(){
        this.showView(this.getToolbarsView(), 1);
    },
    showMessageBox: function(){
        this.showView(this.getMessageBoxView(), 3);
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