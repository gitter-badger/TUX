Ext.define('EditableList.view.Components', {
    extend: 'Ext.tux.EditableList',
    xtype: 'componentsview',
    requires: [
        'EditableList.view.PuppyListItem'
    ],
    config: {
	    cls: 'x-puppies-list',
        store: 'Puppies',
        itemTpl: '{name}',
        defaultType: 'puppylistitem'
    }
});
