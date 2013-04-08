Ext.define('Gallery.model.Photo', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'id',   type: 'string' },
            { name: 'text', type: 'string' }
        ]
    }    
});