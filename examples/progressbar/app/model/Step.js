/**
 * @class ProgressBar.model.Step
 * @extend Ext.data.Model
 * Model which contains some basic info related
 * to the update simulation process.
 */
Ext.define('ProgressBar.model.Step', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'title',   type: 'string' },
            { name: 'message', type: 'string' }
        ]
    }
});