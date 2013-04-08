/**
 * @class Layouts.controller.Orb
 * @extend Ext.app.Controller
 * Application controller which controls the Ring Layout
 * example application.
 */
Ext.define('Layouts.controller.Orb',{
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            orbContainer: 'orbview #orbContainer'
        },
        control: {
            'orbview button[action=add]': {
                tap: 'onAdd'
            },
            'orbview button[action=insert]': {
                tap: 'onInsert'
            },
            'orbview button[action=remove]': {
                tap: 'onRemove'
            },
            'orbview button[action=changegravity]': {
                tap: 'onChangeGravity'
            },
            'orbview segmentedbutton[action=toggleanimation]': {
                toggle: 'onToggleAnimation'
            },
            'orbview segmentedbutton[action=toggleorientation]': {
                toggle: 'onToggleOrientation'
            }
        }
    },
    onAdd: function(){
        
        this.getOrbContainer().add({
            xtype: 'component',
            html: 'Component',
            cls: 'x-example-component'
        });
    
    },
    onInsert: function(){
        
        var index = this.getRandomItemIndex();
        
        this.getOrbContainer().insert(index, {
            xtype: 'button',
            text: 'Button',
            ui: 'gray',
            iconMask: true,
            iconCls: 'cloud'
        });
        
    },
    onRemove: function(){
        
        var index = this.getRandomItemIndex();

        this.getOrbContainer().removeAt(index);
        
    },
    onChangeGravity: function(){
        this.getLayout().setGravity(Math.random() * 300);
    },
    
    onToggleOrientation: function(segmentedButton, button, pressed){
        if(pressed){
            this.getLayout().setOrient(button.state === 'on' ? true : false);
        }
    },
    
    onToggleAnimation: function(segmentedButton, button, pressed){
        if(pressed){
            this.getLayout().setAnimated(button.state === 'on' ? true : false);
        }
    },
    
    getRandomItemIndex: function(){
        return parseInt((Math.random() * this.getOrbContainer().items.length).toFixed());
    },
    getLayout: function(){
        return this.getOrbContainer().getLayout();
    }
});