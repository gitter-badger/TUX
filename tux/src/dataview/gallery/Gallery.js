/**
 * @class Ext.tux.dataview.gallery.Gallery
 * @extend Ext.dataview.NestedList
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @aside example gallery
 */
Ext.define('Ext.tux.dataview.gallery.Gallery', {
    extend: 'Ext.dataview.NestedList',
    xtype: 'gallery',
    requires: [
        'Ext.tux.dataview.gallery.DetailCard',
        'Ext.tux.dataview.gallery.component.PhotoStack'
    ],

    config: {
    
        /**
         * @cfg {Ext.Container/Object} detailCard
         * @inheritdoc Ext.dataview.NestedList#detailCard
         * @accessor
         */
        detailCard: {
            xtype: 'gallerydetailcard'
        },

        /**
         * @cfg {Ext.Toolbar/Object/Boolean} toolbar
         * @inheritdoc Ext.dataview.NestedList#toolbar
         * @accessor
         */
        toolbar: {
            docked: 'top',
            xtype: 'titlebar',
            ui: 'light',
            inline: true,
            showAnimation: {
                type: 'slideIn',
                direction: 'down',
                duration: 500
            },
            hideAnimation: {
                type: 'slideOut',
                direction: 'up',
                duration: 500
            }
        },

        /**
         * @cfg {Object / Ext.Button} actionButton
         * The button which enable the pictures actions.
         */
        actionButton: {
            iconMask: true,
            iconCls: 'action',
            align: 'right'
        },
    
        /**
         * @cfg {Object / Ext.Button} cancelButton
         * The button which disable the pictures actions.
         */
        cancelButton: {
            text: 'Cancel',
            ui: 'action',
            align: 'right',
            hidden: true
        },

        /**
         * @cfg {String} selectPictureText
         * The text used to ask users to select a picture.
         */
        selectPictureText: 'Select a Picture',
    
        /**
         * @cfg {String} selectionTextFormat
         * The text format that will display the selection information
         * reporting the number of the selected pictures replacing the {0} text.
         */
        selectionTextFormat: '{0} Pictures Selected',

        /**
         * @cfg {String} editSelectedCls
         * The CSS class that will be applied to the items
         * selected while in edit mode.
         */
        editSelectedCls: 'x-item-edit-selected'
    
    },

    detailCardEvents: {
        photochange: 'onPhotoChange',
        enterfullscreen: 'onEnterFullScreen',
        exitfullscreen: 'onExitFullScreen'
    },

    /**
     * @property {Boolean} isEditing
     * `true` if the user has enabled the photo selection.
     */
    isEditing: false,

    updateDetailCard: function(container, oldContainer){
    
        var me = this,
            toolbar = me.getToolbar(),
            bindEvents = Ext.apply({}, me.detailCardEvents, { scope: me });

        if(oldContainer){
            oldContainer.un(bindEvents);
        }

        if(container){
            container.on(bindEvents);
        }
    
    },

    // @private
    applyActionButton: function(button){
    
        if(button && !button.isComponent){
            button = Ext.factory(button, Ext.Button, this.getActionButton());
        }

        return button;

    },

    // @private
    updateActionButton: function(button, oldButton){
    
        var toolbar = this.getToolbar();

        if(button){
            button.on('tap', 'onEnableSelection', this);
            toolbar.add(button);
        }
        else if (oldToolbar){
            toolbar.remove(oldButton, true);
        }

    },

    // @private
    applyCancelButton: function(button){
    
        if(button && !button.isComponent){
            button = Ext.factory(button, Ext.Button, this.getCancelButton());
        }

        return button;

    },

    // @private
    updateCancelButton: function(button, oldButton){
    
        var toolbar = this.getToolbar();

        if(button){
            button.on('tap', 'onCancelSelection', this);
            toolbar.add(button);
        }
        else if (oldToolbar){
            toolbar.remove(oldButton, true);
        }

    },

    onEnableSelection: function(btn){
    
        var me = this,
            toolbar = me.getToolbar(),
            backButton = me.getBackButton(),
            cancelButton = me.getCancelButton(),
            title = me.getSelectPictureText();
    
        me._oldTitle = toolbar.getTitle();
        toolbar.setTitle(title);
    
        btn.hide();
        backButton.hide();
        cancelButton.show();

        me.isEditing = true;
    
    },

    onCancelSelection: function(btn){
    
        var me = this,
            dataview = me.getActiveItem(),
            toolbar = me.getToolbar(),
            backButton = me.getBackButton(),
            actionButton = me.getActionButton();

        dataview.deselectAll();
    
        toolbar.setTitle(me._oldTitle);
        delete me._oldTitle;
    
        btn.hide();
        
        backButton.show();
        actionButton.show();

        me.isEditing = false;
    
    },

    // @private
    goToLeaf: function (node) {
    
        if(this.isEditing){
            return;
        }

        if (!node.isLeaf()) {
            throw new Error('goToLeaf: passed a node which is not a leaf.');
        }

        var me = this,
            card = me.getDetailCard(node),
            container = me.getDetailContainer(),
            sharedContainer = container == this,
            layout = me.getLayout(),
            animation = (layout) ? layout.getAnimation() : false,
            store = me.getStoreFromNode(me.getLastNode()),
            index = store.indexOf(node);

        if (card) {
    
            card.setStore(store);
            card.showPicture(index);
    
            if (container.getItems().indexOf(card) === -1) {
                container.add(card);
            }
            if (sharedContainer) {
                if (me.getActiveItem() instanceof Ext.dataview.DataView) {
                    me.setLastActiveList(me.getActiveItem());
                }
                me.setLastNode(node);
            }
            if (animation) {
                animation.setReverse(false);
            }
            container.setActiveItem(card);
            me.syncToolbar();
        }

    },

    // @private
    syncToolbar: function(forceDetail){
    
        var me = this,
            node = me.getLastNode(),
            leaf = node.get('leaf');

        me.callParent(arguments);
    
        me.getActionButton()[leaf ? 'hide' : 'show']();
    
    },
    
    // @private
    goToNode: function (node) {
    
        if(this.isEditing){
            return;
        }

        this.callParent(arguments);
    
    },

    /**
     * @private
     * Returns the list config for a specified node.
     * @param {HTMLElement} node The node for the list config.
     */
    getList: function (node) {
    
        var me = this,
            store = me.getStoreFromNode(node);

        return Ext.Object.merge({
            xtype: 'dataview',
            cls: 'x-gallery-page',
            pressedDelay: 250,
            autoDestroy: true,
            store: store,
            useComponents: true,
            defaultType: 'photostackdataitem',
            inline: true,
            scrollable: 'vertical',
            mode: 'MULTI',
            listeners: [
                { event: 'itemtap', fn: 'onItemTap', scope: me },
                { event: 'select', fn: 'onSelect', order: 'before', scope: me },
                { event: 'deselect', fn: 'onDeselect', order: 'before', scope: me }
            ]
        }, this.getListConfig());

    },

    getStoreFromNode: function(node){
    
        var store = Ext.create('Ext.data.NodeStore', {
            recursive: false,
            node: node,
            rootVisible: false,
            model: this.getStore().getModel()
        });

        node.expand();

        return store;
    
    },

    // @private
    onSelect: function(dataview, record){
        this.updateItemSelection(dataview, record, true);
    },

    // @private
    onDeselect: function(dataview, record){
        this.updateItemSelection(dataview, record, false);
    },

    // @private
    onPhotoChange: function(detailCard, component, record){
    
        var toolbar = this.getToolbar();
        toolbar.setTitle(record.get('text'));
    
    },

    // @private
    onEnterFullScreen: function(detailCard){
        this.getToolbar().hide();
    },

    // @private
    onExitFullScreen: function(detailCard){
        this.getToolbar().show();
    },

    // @private
    updateItemSelection: function(dataview, record, selected){
    
        if(!this.isEditing || !record.get('leaf')){
            return;
        }
    
        var me = this,
            item = dataview.getItemAt(dataview.getStore().indexOf(record));

        if (Ext.isElement(item)) {
            item = Ext.get(item);
        }

        item.toggleCls(me.getEditSelectedCls(), selected);

        me.updateSelectionInfo();
    
    },

    /**
     * Update the Toolbar with the selection info.
     * @private
     */
    updateSelectionInfo: function(){
    
        var me = this,
            toolbar = me.getToolbar(),
            dataview = me.getActiveItem(),
            len = dataview.getSelectionCount(),
            title = me.getSelectPictureText(),
            selectionFormat = me.getSelectionTextFormat();

        toolbar.setTitle(len > 0 ? Ext.String.format(selectionFormat, len) : title);

    }

});
