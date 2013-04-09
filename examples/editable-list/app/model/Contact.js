Ext.define('EditableList.model.Contact', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'firstName', type: 'string' },
            { name: 'lastName',  type: 'string' }
        ]
    }    
});