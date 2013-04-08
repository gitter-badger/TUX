Ext.define('EditableList.model.Puppy', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'name',     type: 'string' },
            { name: 'cuteness', type: 'number', defaultValue: 50 },
            { name: 'image',    type: 'string', convert: function(value, record){
                return 'resources/images/puppies/' + record.get('name').toLowerCase() + '.jpeg';
            }}
        ]
    }    
});