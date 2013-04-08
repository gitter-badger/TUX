/**
 * @class Ext.tux.dataview.component.editable.Abstract
 * @extend Ext.dataview.component.ListItem
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 */
Ext.define('Ext.tux.dataview.component.editable.Abstract', {
    extend: 'Ext.dataview.component.ListItem',

    isEditable: true,

    isMultiEdit: false,

    edit: function() { },

    cancelEdit: function() { },

    select: function(animated) { },

    deselect: function(animated) { }

});
