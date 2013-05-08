/**
 * @class Ext.tux.field.Container
 * @extend Ext.field.Field
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @aside example container-field
 */
Ext.define('Ext.tux.field.Container', {
    extend: 'Ext.field.Field',
    xtype: 'containerfield',
    config: {

        /**
         * @cfg items
         * The field rows used to contains all the fields.
         * @accessor
         */
        items: null,

        component: {
            xtype: 'container',
            cls: 'x-field-container'
        }
    },

    /**
     * @property
     * @readonly
     * The collection of all the fields handled
     * by the FieldContainer.
     */
    fields: null,

    // @private
    rowConfig: {
        cls: 'x-container-row',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        defaults: { 
            flex: 1 
        }
    },

    // @private
    initialize: function(config){
    
        var me = this,
            rows = me.getItems(),
            cmp = me.getComponent();

        // Apply the default row config to every row item
        Ext.each(rows, function(row){
            Ext.apply(row, me.rowConfig);
            cmp.add(Ext.factory(row, Ext.Container));
        });

        me.initFields();
        me.callParent(arguments);

    },

    // @private
    initFields: function(){

        var me = this;
        me.fields = new Ext.util.MixedCollection(true, me.getFieldKey);
        me.fields.addAll(Ext.ComponentQuery.query('field[name!=""]', me.getComponent()));

    },

    // @private
    getFieldKey: function(field){
        return field.getName();
    },

    /**
     * Get a FieldContainer object value.
     * @return {Object} The FieldContainer value.
     */
    getValue: function(){

        var cmp = this.getComponent(),
            value = {};

        this.fields.each(function(field){
            value[field.getName()] = field.getValue();
        });

        return value;

    },

    // @private
    applyValue: function(value){

        for(name in value){
            this.getField(name).setValue(value[name]);
        }

    },

    /**
     * Get a FieldContainer subfield.
     * @param {String} name The field name.
     * @return {Ext.field.Field} The requested field.
     */
    getField: function(name){
        return this.fields.getByKey(name);
    }

});
