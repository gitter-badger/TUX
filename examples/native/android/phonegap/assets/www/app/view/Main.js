/**
 * @class PhoneGap.view.Main
 * @extend Ext.tab.Panel
 * Main Application View.
 */
Ext.define('PhoneGap.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'PhoneGap.view.SpeechRecognizer'
    ],
    config: {
        cls: 'x-speech-recognition-view',
        tabBarPosition: 'bottom',
        items: [
            {
                xtype: 'speechrecognizerview',
                title: 'Speech',
                iconCls: 'volume'
            }
        ]
    }
});
