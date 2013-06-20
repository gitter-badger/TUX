{
    override: 'Ext.tux.field.Container',
    typeAlias: 'containerfield',
    classAlias: 'widget.containerfield',
    className: 'Ext.tux.field.Container',
    type: 'Ext.tux.field.Container',
    inherits: 'Ext.field.Field',
    autoName: 'TUXContainerField',
    toolbox: {
        name: 'ContainerField',
        iconCls: 'icon-panel',
        category: 'Form Fields',
        groups: ['Containers', 'Forms', 'TUX']
    },
    configs: [
        {
            name: 'items',
            type: 'array',
            initialValue: null,
            merge: false
        }
    ],
    listeners: []
}