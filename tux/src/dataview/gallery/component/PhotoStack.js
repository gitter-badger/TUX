/**
 * @class Ext.tux.dataview.gallery.component.PhotoStack
 * @extend Ext.dataview.component.DataItem
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @private
 */
Ext.define('Ext.tux.dataview.gallery.component.PhotoStack', {
    extend: 'Ext.dataview.component.DataItem',
    xtype: 'photostackdataitem',
    requires: [
        'Ext.Img',
        'Ext.tux.layout.Stack'
    ],

    cachedConfig: {
    
        /**
         * @cfg {String} albumCls
         * The CSS class to apply to gallery albums.
         */
        albumCls: 'x-gallery-album',
    
        /**
         * @cfg {String} photoCls
         * The CSS class to apply to gallery photos.
         */
        photoCls: 'x-gallery-photo',

        /**
         * @inheritdoc xt.dataview.component.DataItem#width
         * @cfg {Number/String} width
         */
        width: 'auto'
    
    },

    config: {
        
        /**
         * @cfg {String} cls
         * @inheritdoc Ext.Component#cls
         */
        cls: 'x-img-stack-data-item',

        /**
         * @cfg {Object} layout
         * @inheritdoc Ext.Container#layout
         */
        layout: {
            type: 'vbox'
        },
        
        /**
         * @cfg {Object} stack
         * The stack container which will be used to contains
         * all the album pictures.
         */
        stack: {
            layout: 'stack',
            cls: 'x-photo-stack',
            defaultType: 'img'
        },
        
        /**
         * @cfg {Object} label
         * The Title component which will display
         * the album name.
         */
        label: {
            cls: 'x-label'
        }

    },

    // @private
    applyStack: function(config){
        return Ext.factory(config, Ext.Container, this.getStack());
    },

    // @private
    updateStack: function(stack, oldStack){

        if(oldStack){
            this.removeAt(0);
        }
    
        if(stack){
            this.insert(0, stack);
        }
    
    },

    // @private
    applyLabel: function(config){
        return Ext.factory(config, Ext.Title, this.getLabel());
    },

    // @private
    updateLabel: function(label, oldLabel){
    
        if(oldLabel){
            this.removeAt(1);
        }
    
        if(label){
            this.insert(1, label);
        }
    
    },

    // @private
    updateRecord: function(record, oldRecord){
    
        var stack = this.getStack(),
            len = record.childNodes.length;

        if(record){
    
            this.getLabel().setTitle(record.get('text') || '');

            stack.removeAll(true);
            stack.getLayout().setMaxRotation(len ? 10 : 0);

            if(len){
                record.eachChild(this.addPhoto, this, false);
            }
            else {
                this.addPhoto(record);
            }

        }

    },

    /**
     * Add a new Ext.Img component as item of the DataItem container
     * associated to the album album or photo.
     * @param {Ext.data.NodeInterface} record The record which contains
     * all the album / photo informations.
     * @private
     */
    addPhoto: function(record){
    
        var photoStack = this.getStack(),
            cls = [record.get('leaf') ? this.getPhotoCls() : this.getAlbumCls()],
            nodeCls = record.get('cls');
    
        if(nodeCls){
            cls.push(nodeCls);
        }
    
        photoStack.add({ 
            cls: cls,
            src: record.get('id') 
        });

    }

});
