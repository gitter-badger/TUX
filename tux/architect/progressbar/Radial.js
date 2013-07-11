{
    override: 'Ext.tux.progressbar.Radial',
    typeAlias: 'radialprogressbar',
    classAlias: 'widget.radialprogressbar',
    className: 'Ext.tux.progressbar.Radial',
    type: 'Ext.tux.progressbar.Radial',
    inherits: 'Ext.tux.progressbar.ProgressBar',
    autoName: 'TUXRadialProgressBar',
    toolbox: {
        name: 'RadialProgressBar',
        iconCls: 'icon-panel',
        category: 'Components',
        groups: ['Activity Indicators', 'TUX']
    },
    configs: [
        {
            name: 'donut',
            type: 'number',
            initialValue: 60,
            merge: false
        },
        {
            name: 'scale',
            type: 'auto',
            editor: 'combo',
            initialValue: 'medium',
            merge: false,
            options: ['small', 'medium', 'large']
        }
    ],
    listeners: [
        {
            name: 'complete',
            fn: 'onComplete'
        }
    ]
}