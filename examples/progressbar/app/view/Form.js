/**
 * @class ProgressBar.view.Containers
 * @extend Ext.form.Panel
 * Application view which show the ProgressBar how
 * is possibible to integrate the ProgressBar component inside Forms.
 */
Ext.define('ProgressBar.view.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'formview',
    requires: [
        'Ext.tux.field.ProgressBar'
    ],
    config: {
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Form Fields'
            },
            {
                xtype: 'fieldset',
                title: 'Forums Stats',
                instructions: 'Sencha Forum statistics for year 2012',
                items: [
                    {
                        xtype: 'progressbarfield',
                        label: 'Forum Posts',
                        value: 50
                    },
                    {
                        xtype: 'progressbarfield',
                        progressbarUi: 'green',
                        label: 'Answered Questions',
                        value: 80
                    },
                    {
                        xtype: 'progressbarfield',
                        progressbarUi: 'orange',
                        label: 'Up Votes',
                        value: 40
                    }
                ]
            }
        ]
    }
});