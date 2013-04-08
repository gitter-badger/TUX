/**
 * @class Ext.tux.dataview.component.editable.Single
 * @extend Ext.tux.dataview.component.editable.Abstract
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @aside example editable-list-single-mode
 */
Ext.define('Ext.tux.dataview.component.editable.Single', {
    extend: 'Ext.tux.dataview.component.editable.Abstract',
    requires: ['Ext.Button'],
    xtype: 'singleeditablelistitem',

    cachedConfig: {
    
        /**
         * @cfg {String} selectedCls
         * The CSS class applied to the deleteIcon
         * when this list item has been marked as editable selected.
         */
        selectedCls: 'x-selected'
    
    },

    config: {

        /**
         * @cfg {Ext.Component} deleteIcon
         * The component which emulate the delete icon
         * which is shown on the left of the list item and that,
         * when pressed, will show the delete button.
         */
        deleteIcon: {
            cls: 'x-list-delete-icon',
            hidden: true,
            showAnimation: {
                type: 'slideIn',
                direction: 'right'
            },
            hideAnimation: {
                type: 'slideOut',
                direction: 'left'
            }
        },
        
        /**
         * @cfg {Ext.Button} deleteButton
         * The button which allows to delete this
         * list item associated record from the bounded store.
         */
        deleteButton: {
            cls: 'x-delete-button',
            ui: 'delete',
            text: 'Delete',
            hidden: true,
            showAnimation: {
                type: 'slideIn',
                direction: 'left'
            },
            hideAnimation: {
                type: 'slideOut',
                direction: 'right'
            }
        }
    
    },

    // @private
    applyDeleteIcon: function(icon){
    
        if(icon && !icon.isComponent){
            icon = Ext.factory(icon, Ext.Component, this.getDeleteIcon());
        }

        return icon;

    },

    // @private
    updateDeleteIcon: function(icon, oldIcon){
    
        if(icon){
            icon.element.on('tap', 'onIconTap', this);
            this.insert(0, icon);
        }
        else if (oldIcon){
            oldIcon.destroy();
        }

    },

    // @private
    applyDeleteButton: function(button){
    
        if(button && !button.isComponent){
            button = Ext.factory(button, Ext.Button, this.getDeleteButton());
        }

        return button;

    },

    // @private
    updateDeleteButton: function(button, oldButton){
    
        if(button){
            button.on('tap', 'onDeleteTap', this);
            this.add(button);
        }
        else if (oldButton){
            oldButton.destroy();
        }

    },

    onIconTap: function(){
    
        var me = this,
            element = me.getDeleteIcon().element,
            cls = me.getSelectedCls(),
            selected;

        element.toggleCls(cls);
        selected = element.hasCls(cls);
        me.getDeleteButton()[selected ? 'show' : 'hide']();
        me.dataview[selected ? 'selectItem' : 'deselectItem'](me);

        if(selected){
            me.toggleSelectedItem();
        }

    },

    onDeleteTap: function(button){
        this.dataview.onDelete();
    },

    toggleSelectedItem: function(){
    
        var me = this,
            dataview = me.dataview,
            selection = dataview.editSelection,
            selectedItem = dataview.selectedItem;
    
        if(selectedItem){
            selectedItem.deselect(true);
            selection.clear();
        }

        me.dataview.selectedItem = me;
        selection.add(me.getRecord());
    
    },

    edit: function(){
        this.getDeleteIcon().show();
    },

    cancelEdit: function(){
    
        this.getDeleteIcon().hide();
        this.getDeleteButton().hide();

    },

    select: function(animated){
        
        this.getDeleteIcon().element.addCls(this.getSelectedCls());
        this.getDeleteButton().show(animated ? undefined : false);
    
    },

    deselect: function(animated){
    
        this.getDeleteIcon().element.removeCls(this.getSelectedCls());
        this.getDeleteButton().hide(animated ? undefined : false);
    
    }
    
});
