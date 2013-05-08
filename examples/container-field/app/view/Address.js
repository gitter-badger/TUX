Ext.define('ContainerField.view.Address', {
    extend: 'Ext.form.Panel',
    xtype: 'addressview',
    requires: [
        'Ext.TitleBar',
        'Ext.tux.field.Container'
    ],
    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'User Informations',
                items: [
                    {
                        action: 'options',
                        iconCls: 'pencil',
                        text: 'Edit',
                        ui: 'action'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'About you',
                instructions: [
                    'Please provide more informations about you such as your name ',
                    'and your home address.'
                ].join(''),
                items: [
                    {
                        xtype: 'textfield',
                        label: 'First Name',
                        name: 'name'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Last Name',
                        name: 'surname'
                    },
                    {
                        xtype: 'containerfield',
                        label: 'Address',
                        name: 'address',
                        items: [
                            {
                                items: [
                                    {
                                        xtype: 'textfield',
                                        name: 'street',
                                        placeHolder: 'Street',
                                        flex: .7
                                    },
                                    {
                                        xtype: 'numberfield',
                                        name: 'civic',
                                        placeHolder: 'Civic',
                                        flex: .3
                                    }
                                ]
                            },
                            {
                                items: [
                                    {
                                        xtype: 'textfield',
                                        name: 'zip',
                                        placeHolder: 'Zip Code'
                                    },
                                    {
                                        xtype: 'selectfield',
                                        name: 'city',
                                        options: [
                                            { text: 'Turin',  value: 'turin' },
                                            { text: 'San Francisco', value: 'sfo' },
                                            { text: 'Rewood City',  value: 'redwood' }
                                        ]
                                    }
                                ]
                            },
                            {
                                items: [
                                    {
                                        xtype: 'textfield',
                                        name: 'province',
                                        placeHolder: 'Province'
                                    },
                                    {
                                        xtype: 'selectfield',
                                        name: 'country',
                                        options: [
                                            { text: 'Italy',  value: 'italy' },
                                            { text: 'California', value: 'california' }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
