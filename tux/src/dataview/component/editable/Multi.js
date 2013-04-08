/**
 * @class Ext.tux.dataview.component.editable.Multi
 * @extend Ext.tux.dataview.component.editable.Abstract
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @aside example editable-list-single-mode
 * @aside example components
 */
Ext.define('Ext.tux.dataview.component.editable.Multi', {
    extend: 'Ext.tux.dataview.component.editable.Abstract',
    xtype: 'multieditablelistitem',

    cachedConfig: {
    
        /**
         * @cfg {String} checkedCls
         * The CSS class applied to the checkbox
         * when this list item has been checked.
         */
        checkedCls: 'x-checked'
    
    },

    config: {
    
        /**
         * @cfg {Ext.Component} checkbox
         * The component which emulate the selection checkbox
         * which allows users to mask a list item as selected or deselected.
         */
        checkbox: {
            cls: 'x-list-checkbox',
            hidden: true,
            showAnimation: {
                type: 'slideIn',
                direction: 'right'
            },
            hideAnimation: {
                type: 'slideOut',
                direction: 'left'
            }
        }
    
    },

    isMultiEdit: true,

    // @private
    applyCheckbox: function(checkbox){
    
        if(checkbox && !checkbox.isComponent){
            checkbox = Ext.factory(checkbox, Ext.Component, this.getCheckbox());
        }

        return checkbox;

    },

    // @private
    updateCheckbox: function(checkbox, oldCheckbox){
    
        if(checkbox){
            checkbox.element.on('tap', 'onCheckBoxTap', this);
            this.insert(0, checkbox);
        }
        else if (oldCheckbox){
            oldCheckbox.destroy();
        }

    },

    // @private
    onCheckBoxTap: function(){
    
        var me = this,
            element = me.getCheckbox().element,
            record = me.getRecord(),
            cls = me.getCheckedCls();

        element.toggleCls(cls);
        me.dataview[element.hasCls(cls) ? 'selectItem' : 'deselectItem'](me);
    
    },

    // @private
    edit: function(start){
        this.getCheckbox().show();
    },
    
    cancelEdit: function(){
        this.getCheckbox().hide();
    },

    select: function(){
        this.getCheckbox().element.addCls(this.getCheckedCls());
    },

    deselect: function(){
        this.getCheckbox().element.removeCls(this.getCheckedCls());
    }

});
