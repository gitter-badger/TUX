/**
 * @class Connect.store.Steps
 * @extend Ext.data.ArrayStore
 * Store which contains all the update simulation steps.
 */
Ext.define('ProgressBar.store.Steps',{
    extend: 'Ext.data.ArrayStore',
    requires: ['ProgressBar.model.Step'],
    config: {
        model: 'ProgressBar.model.Step',
        data: [
            ['Initialization','Initializing the update Process.'],
            ['Connection','Connecting to the server.'],
            ['Fetching Data','Searching for profile updates.'],
            ['Downloading','Updates found!<br/>Downloading user profile updates.'],
            ['Installation','Profile update in progress.<br/>Please wait...']
        ]
    }
});