/**
 * @class Ext.tux.dataview.gallery.DetailCard
 * @extend Ext.Container
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @private
 */
Ext.define('Ext.tux.dataview.gallery.DetailCard', {
    extend: 'Ext.Container',
    xtype: 'gallerydetailcard',
    requires: [
        'Ext.Carousel',
        'Ext.dataview.DataView',
        'Ext.Img',
        'Ext.TitleBar'
    ],

    /**
     * @event photochange
     * Fires on preview Carousel active picture changes.
     * @param {Ext.tux.dataview.gallery.DetailCard} this
     * @param {Ext.Img} component The Img component associated the new active picture.
     * @param {Ext.data.Model} record The data model which holds all the picture informations.
     */

    /**
     * @event enterfullscreen
     * Fires when the component enter the fullscreen mode hiding
     * the top docked Toolbar and the bottom pictures thumbs.
     * @param {Ext.tux.dataview.gallery.DetailCard} this
     */

    /**
     * @event exitfullscreen
     * Fires when the component exit the fullscreen mode showing
     * the top docked Toolbar and the bottom pictures thumbs.
     * @param {Ext.tux.dataview.gallery.DetailCard} this
     */

    config: {
    
        /**
         * @cfg {String} layout
         * @inheritdoc Ext.Container#layout
         * @accessor
         */
        layout: 'fit',

        /**
         * @cfg {Ext.data.NodeStore} store.
         * The album pictures store.
         */
        store: null,

        /**
         * @cfg {Object / Ext.Carousel} preview
         * The object configuration for the Carousel component
         * that will be used to show the pictures preview.
         */
        preview: {
            cls: 'x-gallery-preview',
            indicator: false
        },

        /**
         * @cfg {Object / Ext.DataView} thumbs
         * The object configuration for the DataView component
         * in charge of displaying the thumbs of the same
         * album of the selected picture.
         */
        thumbs: {
            cls: 'x-gallery-thumbs',
            docked: 'bottom',
            scrollable: 'horizontal',
            inline: {
                wrap: false
            },
            itemTpl: '<div class="x-gallery-thumb" style="background-image: url({id});"></div>',
            showAnimation: {
                type: 'slideIn',
                direction: 'up',
                duration: 500
            },
            hideAnimation: {
                type: 'slideOut',
                direction: 'down',
                duration: 500
            }
        }

    },

    /**
     * @property {Boolean} isFullScreen
     * `true` if the view is in FullScreen mode.
     */
    isFullScreen: false,

    previewEvents: {
        activeitemchange: 'onPhotoChange'
    },
    
    previewElementEvents: {
        element: 'element',
        tap: 'onPhotoTap'
    },

    thumbsEvents: {
        select: 'onThumbSelect'
    },

    // @private
    applyPreview: function(config){
        return Ext.factory(config, Ext.Carousel, this.getPreview());
    },

    // @private
    updatePreview: function(carousel, oldCarousel){
    
        var me = this,
            bindEvents = Ext.apply({}, me.previewEvents, { scope: me }),
            elementBindEvents = Ext.apply({}, me.previewElementEvents, { scope: me });
        
        if(oldCarousel){
    
            oldCarousel.un(bindEvents);
            oldCarousel.un(elementBindEvents);
            this.remove(oldCarousel, true);

        }
    
        if(carousel){
    
            carousel.on(bindEvents);
            carousel.on(elementBindEvents);
            this.add(carousel);

        }
    
    },

    /**
     * Callback event called when the user tap
     * on the preview Carousel entering / exiting the
     * fullscreen mode.
     * @private
     */
    onPhotoTap: function(){
    
        var me = this,
            thumbs = me.getThumbs(),
            isFullScreen = me.isFullScreen,
            eventName;
    
        thumbs[isFullScreen ? 'show' : 'hide']();
    
        me.isFullScreen = !isFullScreen;
    
        eventName = me.isFullScreen ? 'enterfullscreen' : 'exitfullscreen';
    
        me.fireEvent(eventName, me);

    },

    // @private
    applyThumbs: function(config){
        return Ext.factory(config, Ext.DataView, this.getThumbs());
    },

    // @private
    updateThumbs: function(dataview, oldDataview){
    
        var me = this,
            bindEvents = Ext.apply({}, me.thumbsEvents, { scope: me });
        
        if(oldDataview){
            oldDataview.un(bindEvents);
            this.remove(oldDataview, true);
        }
    
        if(dataview){
            dataview.on(bindEvents);
            this.add(dataview);
        }
    
    },

    /**
     * Update the store which contains the pictures
     * of the same album of the selected on.
     * @param {Ext.data.NodeStore} store The album pictures store.
     */
    updateStore: function(store){
    
        var me = this,
            preview = me.getPreview(),
            thumbs = me.getThumbs(),
            id;

        thumbs.setStore(store);

        preview.removeAll();
    
        store.each(function(record, index){

            preview.add({
                xtype: 'img',
                itemId: index,
                src: record.getId(),
                record: record
            });

        });

    },

    /**
     * Show the preview of a new picture setting it
     * as the new active item of the Carousel.
     * @param {String} item The itemId associated to the
     * new picture to show.
     */
    showPicture: function(itemId){
        this.getPreview().setActiveItem(itemId);
    },

    // @private
    onPhotoChange: function(carousel, component){
        
        var me = this,
            thumbs = me.getThumbs(),
            record = component._record;

        thumbs.select(record, false, true);

        me.fireEvent('photochange', me, component, record);
    
    },
    
    // @private
    onThumbSelect: function(list, record){
    
        var preview = this.getPreview(),
            index = list.getStore().indexOf(record);
    
        preview.setActiveItem(index);
    
    }

});
