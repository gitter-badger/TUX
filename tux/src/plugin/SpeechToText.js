/**
 * @class Ext.tux.plugin.SpeechToText
 * @extend Ext.Evented
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 */
Ext.define('Ext.tux.plugin.SpeechToText', {
    extend: 'Ext.Evented',
    alias: 'plugin.speechtotext',
    requires: [
        'Ext.tux.device.SpeechRecognizer'
    ],
    config: {
    
        /**
         * @cfg {String} prompt
         * The default text prompt to show to users when asking
         * to start speaking.
         */
        prompt: null
    
    },

    /**
     * @property {Ext.Component} component
     * The component to which this plugin is binded to.
     * @accessor
     */
    component: null,

    /**
     * @private
     * Sets up all of the references the plugin needs
     */
    init: function(component) {
        
        var me = this,
            element = component.element,
            fieldInputEl;
    
        if(!Ext.tux.device.SpeechRecognizer){
            Ext.Logger.error('Not in a native environment.');
        }
    
        if(component.xtype === 'textfield' || component.xtype === 'textareafield'){
        
            element.addCls(Ext.baseCSSPrefix + 'field-speech');
        
            fieldInputEl = Ext.get(component.element.query('.x-field-input')[0]);
        
            me.speechIcon = fieldInputEl.createChild({
                cls: 'x-speech-icon'
            });
        
            me.speechIcon.on('tap', 'onSpeechIconTap', me);
        
        }

        me.component = component;
    
    },

    // @private
    onSpeechIconTap: function(e) {
        this.fireAction('speechicontap', [this, e], 'doSpeechIconTap');
    },

    // @private
    doSpeechIconTap: function(me, e) {
    
        var prompt = me.getPrompt();
    
        Ext.tux.device.SpeechRecognizer.listen({
            prompt: prompt,
            scope: me,
            success: me.onRecognizmentSuccess,
            failure: me.onRecognizmentFailure
        });

    },

    // @private
    onRecognizmentSuccess: function(text){
        this.component.setValue(text);
    },

    // @private
    onRecognizmentFailure: function(text){
        this.component.setValue('');
    }

});
