Ext.define('Gallery.store.Photos', {
    extend: 'Ext.data.TreeStore',
    requires: ['Gallery.model.Photo'],
    config: {
        model: 'Gallery.model.Photo',
        proxy: {
            type: 'ajax',
            url: 'photos.json'
        },
        root: {
            expanded: true
        }
    }
});