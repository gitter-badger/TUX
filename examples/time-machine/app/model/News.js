Ext.define('TimeMachine.model.News', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'year',    type: 'int'    },
            { name: 'content', type: 'string' }
        ]
    }
});