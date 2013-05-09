Ext.define('TimeMachine.store.News', {
    extend: 'Ext.data.Store',
    requires: [
        'TimeMachine.model.News'
    ],
    config: {
        model: 'TimeMachine.model.News',
        autoLoad: true,
        proxy: {
	        type: 'ajax',
	        url: 'history.json'
        }
    }    
});