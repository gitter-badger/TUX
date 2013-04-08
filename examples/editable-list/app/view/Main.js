/**
 * @class EditableList.view.Main
 * @extend Ext.Container
 * Main application view.
 */
Ext.define('EditableList.view.Main', {
    extend: 'Ext.Container',
    xtype: 'mainview',
    requires: [
        'Ext.tab.Bar'
    ],
    config: {
        layout: {
            type: 'card',
            animation: {
                type: 'fade'
            }
        },
        items: [
            {
                xtype: 'tabbar',
                docked: 'bottom',
                items: [
                    {
                        title: 'Single Edit',
                        href: 'singleedit',
                        iconCls: 'list'
                    },
                    {
                        title: 'Multi Edit',
                        href: 'multiedit',
                        iconCls: 'check'
                    },
                    {
                        title: 'Components',
                        href: 'components',
                        iconCls: 'more'
                    }
                ]
            }
        ]
    }
});
