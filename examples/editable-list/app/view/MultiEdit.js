Ext.define('EditableList.view.MultiEdit', {
    extend: 'Ext.tux.EditableList',
    xtype: 'multieditview',
    requires: [
        'Examples.store.Contacts'
    ],
    config: {
        store: 'Contacts',
        itemTpl: '{firstName} {lastName}',
        defaultType: 'multieditablelistitem'
    }
});
