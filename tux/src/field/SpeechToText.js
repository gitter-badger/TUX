/**
 * @class Ext.tux.field.SpeechToText
 * @extend Ext.field.Text
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 */
Ext.define('Ext.tux.field.SpeechToText', {
    extend: 'Ext.field.Text',
    xtype: 'speechtotextfield',
    requires: [
        'Ext.tux.device.SpeechRecognizer'
    ]
});