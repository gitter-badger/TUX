Ext.define('EditableList.view.SingleEdit', {
    extend: 'Ext.tux.EditableList',
    xtype: 'singleeditview',
    requires: [
        'EditableList.store.Contacts'
    ],
    config: {
        store: 'Contacts',
        itemTpl: '{firstName} {lastName}'
    }
});
