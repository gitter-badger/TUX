/**
 * @class Layouts.view.Orb
 * @extend Ext.Container
 * Ring Layout example view.
 */
Ext.define('Layouts.view.Orb', {
    extend: 'Ext.Container',
    xtype: 'orbview',
    requires: [
        'Ext.TitleBar',
        'Ext.Toolbar',
        'Ext.Spacer',
        'Ext.SegmentedButton',
        'Ext.tux.layout.Orb'
    ],
    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Orb Layout'
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                defaults: {
	                iconMask: true
                },
                items: [
                    {
                        xtype: 'button',
                        action: 'add',
                        text: 'Add',
                        iconCls: 'add'
                    },
                    {
                        xtype: 'button',
                        action: 'insert',
                        text: 'Insert',
                        iconCls: 'screens'
                    },
                    {
                        xtype: 'button',
                        action: 'remove',
                        text: 'Remove',
                        iconCls: 'delete'
                    },
                    {
                        xtype: 'button',
                        action: 'changegravity',
                        text: 'Change Gravity',
                        iconCls: 'expand'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'segmentedbutton',
                        action: 'toggleanimation',
                        align: 'right',
                        items: [
                            {
                                text: 'Static',
                                pressed: true,
                                state: 'off'
                            },
                            {
                                text: 'Animated',
                                state: 'on'
                            }
                        ]
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'segmentedbutton',
                        action: 'toggleorientation',
                        align: 'right',
                        items: [
                            {
                                text: 'Orientation',
                                pressed: true,
                                state: 'on'
                            },
                            {
                                text: 'No Orientation',
                                state: 'off'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                itemId: 'orbContainer',
                layout: {
                    type: 'orb'
                },
                defaults: {
                    width: 150,
                    height: 60
                }
            }
        ]
    }
});