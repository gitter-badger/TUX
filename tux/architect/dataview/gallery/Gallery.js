{
    override: 'Ext.tux.dataview.gallery.Gallery',
    typeAlias: 'gallery',
    classAlias: 'widget.gallery',
    className: 'Ext.tux.dataview.gallery.Gallery',
    type: 'Ext.tux.dataview.gallery.Gallery',
    inherits: 'Ext.dataview.NestedList',
    autoName: 'TUXPhotoGallery',
    toolbox: {
        name: 'Photo Gallery',
        iconCls: 'icon-panel',
        category: 'Views',
        groups: ['Views', 'TUX']
    },
    configs: [
        {
            name: 'selectPictureText',
            type: 'string',
            initialValue: 'Select a Picture',
            merge: false
        },
        {
            name: 'selectionTextFormat',
            type: 'string',
            initialValue: '{0} Pictures Selected',
            merge: false
        },
        {
            name: 'editSelectedCls',
            type: 'string',
            initialValue: 'x-item-edit-selected',
            merge: false
        }
    ]
}