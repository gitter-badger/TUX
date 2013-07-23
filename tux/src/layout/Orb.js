/**
 * @class Ext.tux.layout.Orb
 * @extend Ext.layout.Abstract
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @aside example orb-layout
 */
Ext.define('Ext.tux.layout.Orb', {
    extend: 'Ext.layout.Abstract',
    alias: 'layout.orb',
    layoutClass: 'x-layout-orb',
    itemClass: 'x-layout-orb-item',

    config: {
        
        /**
         * @cfg {Number} gravity
         * The gravity value used to attract the items to the center
         * of the orb layout.
         */
        gravity: 200,
        
        /**
         * @cfg {Boolean} orient
         * True to auto orient all the items to point to the center
         * of the orb layout.
         */
        orient: true,

        /**
         * @cfg {Boolean} animated
         * True to enable layout's animations.
         */
        animated: false

    },

    // @private
    setContainer: function(container) {
    
        this.callSuper(arguments);

        container.addCls(this.layoutClass);
        container.onInitialized('onContainerInitialized', this);

    },

    // @private
    onContainerInitialized: function(container){
        this.arrangeItems();
    },

    // @private
    onItemRemove: function(item) {
    
        this.removeInnerItem(item);
        this.arrangeItems();

    },

    // @private
    onItemMove: function(item) {
        this.arrangeItems();
    },

    // @private
    onItemAdd: function(item){
        
        var me = this;
        
        me.insertInnerItem(item, me.container.innerIndexOf(item));
        
        item.addCls(me.itemClass);

        if(me.container.initialized){
            me.arrangeItems();
        }
        
    },

    // @private
    arrangeItems: function(center){

        var me = this,
            center = center || me.center,
            items = me.container.items,
            length = items.length,
            gravity = me.getGravity(),
            angle = 0,
            i = 0,
            item, width, height, top, left;

        for(; i < length; i++){
	
	        item = items.getAt(i);
            width = item.getWidth() / 2;
            height = item.getHeight() / 2;

            top = (gravity * -Math.cos(angle)) - height;
            left = (gravity * Math.sin(angle)) - width;

            item.setTop(top);
            item.setLeft(left);
    
            me.updateItemOrientation(item, i, length);
    
            angle += Math.PI * 2 / length;

        }
    
        me.center = center;

    },

    // @private
    updateGravity: function(value){
        if(this.container.initialized){
            this.arrangeItems();
        }
    },
    
    // @private
    updateOrient: function(value){
        if(this.container.initialized){
            this.doUpdateOrient(value);
        }
    },
    
    // @private
    updateAnimated: function(value){
        this.container[value ? 'addCls' : 'removeCls']('x-animated');
    },

    // @private
    doUpdateOrient: function(value){
        this.container.items.each(this.updateItemOrientation, this);
    },
    
    // @private
    updateItemOrientation: function(item, index, length){
        
        var orient = this.getOrient(),
            rotation;
        
        if(orient){
            rotation = 90 + (index * (360 / length));
            if(rotation > 180){
                rotation = - (360 - rotation); 
            }
        }
        
        item.element.dom.style.webkitTransform = orient ? Ext.String.format('rotateZ({0}deg)', rotation) : '';

    },
    
    // @private
    insertInnerItem: function(item, index) {
        
       var container = this.container,
            containerDom = container.innerElement.dom,
            itemDom = item.element.dom,
            nextSibling = container.getInnerAt(index + 1),
            nextSiblingDom = nextSibling ? nextSibling.element.dom : null;

        containerDom.insertBefore(itemDom, nextSiblingDom);

        return this;

    },

    // @private
    removeInnerItem: function(item) {
        item.element.detach();
    }

});