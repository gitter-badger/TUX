/**
 * @class Ext.tux.layout.Stack
 * @extend Ext.layout.Default
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @private
 */
Ext.define('Ext.tux.layout.Stack', {
    extend: 'Ext.layout.Default',
    alias: 'layout.stack',
    layoutClass: 'x-layout-stack',
    itemClass: 'x-layout-stack-item',

    config: {
    
        /**
         * @cfg {Number} maxRotation
         * The max rotation degrees to randomly apply
         * to the inner elements.
         */
        maxRotation: 10,

        /**
         * @cfg {Number} maxVisibleItems
         * The max visible items to show.
         * This will improve the layout performances.
         */
        maxVisibleItems: 3
    
    },

    // @private
    setContainer: function(container) {
    
        this.callSuper(arguments);
        container.innerElement.addCls(this.layoutClass);

    },

    // @private
    updateMaxVisibleItems: function(value, oldValue){
        this.refreshItems();
    },

    // @private
    updateMaxRotation: function(value, oldValue){
        this.refreshItems();
    },

    // @private
    onItemInnerStateChange: function(item, isInner, destroying) {
        
        this.callSuper(arguments);
        this.initItem(item, isInner);
    
    },

    // @pritvate
    initItem: function(item, isInner, index){
    
        var me = this,
            rnd = Math.random,
            maxRotation = me.getMaxRotation(),
            maxVisibleItems = me.getMaxVisibleItems(),
            direction = (rnd() * 100) < 50 ? -1 : 1,
            rotation = isInner ? ((rnd() * maxRotation) * direction) : 0,
            container = me.container;

        index = index !== undefined ? index : container.innerItems.length;

        item.toggleCls(me.itemClass, isInner);
        item.setLayoutSizeFlags(isInner ? container.LAYOUT_BOTH : 0);
        
        item.element.applyStyles({
            '-webkit-transform': Ext.String.format('rotateZ({0}deg)', rotation)
        });

        item[index > maxVisibleItems ? 'hide' : 'show']();
    
    },

    /**
     * Update the inner items position to refresh
     * their position.
     * @private
     */
    refreshItems: function(){
    
        var me = this,
            container = me.container,
            items = container.innerItems;

        Ext.each(items, function(item, index){
            me.initItem(item, true, ++index);
        });
        
    }
    
});
