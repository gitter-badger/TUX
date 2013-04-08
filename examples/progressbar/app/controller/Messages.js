/**
 * @class ProgressBar.controller.Messages
 * @extend Ext.app.Controller
 * Controller which handles the functionalities related
 * to the MessageBox view.
 */
Ext.define('ProgressBar.controller.Messages',{
    extend: 'Ext.app.Controller',
    config: {
        control: {
            'messageboxview button[action=cancelable]': {
                tap: 'onShowCancelableMessageBox'
            },
            'messageboxview button[action=notcancelable]': {
                tap: 'onShowNotCancelableMessageBox'
            },
            'messageboxview button[action=simplesimulation]': {
                tap: 'onStartSimulation'
            },
            'messageboxview button[action=detailedsimulation]': {
                tap: 'onStartSimulation'
            }
        }
    },
    onShowCancelableMessageBox: function(){
    
        this.showMessage({
            value: 60,
            maxValue: 100,
            cancelable: true,
            ui: 'green'
        });

    },

    onShowNotCancelableMessageBox: function(){
    
        var alert = this.showMessage({
            value: 70, 
            maxValue: 100,
            ui: 'orange'
        });
    
        setTimeout(function(){
            alert.hide();
        }, 5000);

    },
    
    onStartSimulation: function(btn){
    
        var me = this,
            action = btn.action,
            store = Ext.getStore('Steps'),
            total = store.getCount(),
            index = 0,
            step = store.getAt(index),
            alert, step, config;
    
        config = {
	        ui: 'light',
            maxValue: total, 
            cancelable: true, 
            fillAnimationSpeed: 1000
        };
    
        me.simulation = setInterval(function(){
	
	        config.value = index;
	
            if(index < total){
                step = store.getAt(index);
                if(action === 'simplesimulation'){
                    alert = me.showMessage(config);
                }
                else {
	                alert = me.showMessage(config, step.get('title'), step.get('message'));
                }
  
            }
            else if(index === total){
	            alert = me.showMessage(config, 'Success', 'Your profile is now updated.');
            }
            else { 
                alert.hide();
                me.cancelSimulation();
            }

            index++;

        }, 3000);
    
    },

    showMessage: function(config, title, message){
    
        var title = title || 'Updating',
            message = message || 'Profile update in progress.<br/>Please wait...';

        return Ext.Msg.progress(title, message, config, function(btn){ 
            this.cancelSimulation(true);
        }, this);
    },

    cancelSimulation: function(showMessage){
    
        var me = this;
    
        if(showMessage){
            Ext.Msg.alert('Operation Canceled', 'The update process has been aborted.');
        }
        if(me.simulation){
            clearInterval(me.simulation);
            delete me.simulation;
        }
    }
});