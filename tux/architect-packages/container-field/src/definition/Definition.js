{
    override: 'Ext.ux.field.Container',
    typeAlias: 'containerfield',
    classAlias: 'widget.containerfield',
    className: 'Ext.ux.field.Container',
    type: 'Ext.ux.field.Container',
    inherits: 'Ext.field.Field',
    autoName: 'TUXContainerField',
    toolbox: {
        name: 'ContainerField',
        iconCls: 'icon-panel',
        category: 'Containers',
        groups: ['Containers', 'Forms', 'TUX', 'Third Party UX']
    },
	configs: [
	    {
		    name: 'items',
	        type: 'array',
	        initialValue: null,
	        merge: false
	    }
	],
    evts: []
}