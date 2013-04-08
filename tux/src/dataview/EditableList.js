/**
 * @class Ext.tux.dataview.EditableList
 * @extend Ext.dataview.List
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @aside example editable-list-single-mode
 * @aside example editable-list-multi-mode
 * @aside example components
 */
Ext.define('Ext.tux.dataview.EditableList', {
    alternateClassName: 'Ext.tux.EditableList',
    extend: 'Ext.dataview.List',
    xtype: 'editablelist',
    requires: [
        'Ext.TitleBar',
        'Ext.Button',
        'Ext.tux.dataview.component.editable.Multi',
        'Ext.tux.dataview.component.editable.Single'
    ],

    /**
     * @event editselectionchange
     * Fires when the edit selection changes.
     * @param {Ext.tux.dataview.EditableList} this
     * @param {Ext.data.Model[]} records The records whose edit selection has changed.
     */

    /**
     * @event delete
     * Fires when some records has been deleted.
     * @param {Ext.tux.dataview.EditableList} this
     * @param {Ext.data.Model[]} records The deleted records.
     */

    cachedConfig: {
	
        /**
         * @cfg {Boolean} useComponents
         * @inheritdoc Ext.dataview.DataView#useComponents
         */
        useComponents: true

    },

    config: {
    
        /**
         * @cfg {String} defaultType
         * The xtype used for the component based editable List.
         * Valid values are `'singleeditablelistitem'`, `'multieditablelistitem'`, or
         * whatever editable list item which is an extension of
         * {@link Ext.tux.dataview.component.editable.Abstract}.
         */
        defaultType: 'singleeditablelistitem',

        /**
         * @cfg {Object / Ext.TitleBar} toolbar
         * The top docked toolbar which contains the
         * Edit and Delete buttons.
         */
        toolbar: {
            docked: 'top'
        },
    
        /**
         * @cfg {Object / Ext.Button} editButton
         * The Edit Button / configurations.
         */
        editButton: {
            action: 'toggleedit',
            text: 'Edit'
        },
    
        /**
         * @cfg {Object / Ext.Button} deleteButton
         * The Delete Button / configurations.
         */
        deleteButton: {
            action: 'delete',
            ui: 'decline',
            align: 'right',
            iconMask: true,
            iconCls: 'trash',
            showAnimation: 'popIn',
            hideAnimation: 'popOut',
            hidden: true
        }

    },

    // @private
    constructor: function() {
        
        var me = this,
            defaultType, item;
        
        me.editSelection = new Ext.util.MixedCollection();
        me.editSelection.on({
            add: 'onSelectionChange',
            remove: 'onSelectionChange',
            scope: me
        });

        me.callParent(arguments);

        defaultType = me.getDefaultType();

        if(defaultType){
    
            item = Ext.factory({ xtype: defaultType });
            if(!item.isEditable || !Ext.isDefined(item.isMultiEdit)){
                Ext.Logger.error('The defaultType for EditableList must always be an editable item.');
            }
            me.isMultiEdit = item.isMultiEdit;

        }

    },

    // @private
    applyToolbar: function(toolbar){
    
        if(toolbar && !toolbar.isComponent){
            toolbar = Ext.factory(toolbar, Ext.TitleBar, this.getToolbar());
        }

        return toolbar;

    },

    // @private
    updateToolbar: function(toolbar, oldToolbar){
    
        if(toolbar){
            this.add(toolbar);
        }
        else if (oldToolbar){
            oldToolbar.destroy();
        }

    },

    // @private
    applyEditButton: function(button){
    
        if(button && !button.isComponent){
            button = Ext.factory(button, Ext.Button, this.getEditButton());
        }

        return button;

    },

    // @private
    updateEditButton: function(button, oldButton){
    
        var toolbar = this.getToolbar();

        if(button){
            button.on('tap', 'onToggleEdit', this);
            toolbar.add(button);
        }
        else if (oldToolbar){
            toolbar.remove(oldButton, true);
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
    
        var toolbar = this.getToolbar();

        if(button){
            button.on('tap', 'onDelete', this);
            toolbar.add(button);
        }
        else if (oldToolbar){
            toolbar.remove(oldButton, true);
        }

    },

    // @private
    onToggleEdit: function(btn){
    
        if(this.isEditing){
            btn.setText('Edit');
            this.runItemsAction('cancelEdit');
            Ext.defer(this.clearEditableSelection, 500, this);
        }
        else {
            btn.setText('Cancel');
            this.runItemsAction('edit');
        }
    
        this.isEditing = !this.isEditing;
    
    },

    // @private
    onDelete: function(btn){
    
        var me = this,
            selection = me.editSelection,
            records = selection.getRange();

        me.getStore().remove(records);
        selection.clear();
        me.getDeleteButton().hide();
    
        me.fireEvent('delete', me, records);
    
    },

    // @private
    runItemsAction: function(action){
    
        Ext.each(this.listItems, function(item){
            item[action]();
        });
    
    },

    // @private
    updateListItem: function(item, index, info) {
    
        var record = info.store.getAt(index);

        if (this.isEditableSelected(record)) {
            item.select();
        }
        else {
            item.deselect();
        }

        this.callParent(arguments);
    
    },

    // @private
    clearEditableSelection: function(){
    
        this.runItemsAction('deselect');
        this.editSelection.clear();
    
    },

    // @private
    isEditableSelected: function(record){
    
        var record = Ext.isNumber(record) ? this.getStore().getAt(record) : record;
        return this.editSelection.indexOf(record) !== -1;
        
    },

    // @private
    selectItem: function(item){
        this.editSelection.add(item.getRecord());
    },

    // @private
    deselectItem: function(item){
        this.editSelection.remove(item.getRecord());
    },

    // @private
    onSelectionChange: function(){
        
        var me = this,
            selection = me.editSelection,
            count = selection.getCount(),
            deleteButton = me.getDeleteButton(),
            records = selection.getRange();

        if(me.isMultiEdit){
        
            if(count > 0){
                deleteButton.show();
                deleteButton.setText(count + ' Items');
            }
            else {
                deleteButton.hide();
            }
        
        }

        me.fireEvent('editselectionchange', me, records);
    
    }

});