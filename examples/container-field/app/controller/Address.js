/**
 * @class ContainerField.controller.Address
 * @extends Ext.app.Controller
 * Application controller which handles all the address
 * axample functionalities.
 */
Ext.define('ContainerField.controller.Address',{
    extend: 'Ext.app.Controller',
    config: {
        views: [
            'Address'
        ],
        refs: {
            form: 'addressview',
            field: 'addressview containerfield'
        },
        control: {
            'addressview button[action=options]': {
                tap: 'showOptions'
            },
            'actionsheet button[action=getvalue]': {
                tap: 'getValue'
            },
            'actionsheet button[action=setvalue]': {
                tap: 'setValue'
            }
        }
    },
    
    getValue: function(){
        
        var me = this,
            form = this.getForm(),
            field = me.getField();
        
        // Log the form values
        console.log('---- Form Values:');
        console.log(form.getValues());

        // Log the FieldContainer value
        console.log('---- Container Field Value: ');
        console.log(field.getValue());

        Ext.Msg.alert('Get Values', 'Check your browser console to see the Form and the Container Field values.')

        me.sheet.hide();
        
    },
    
    setValue: function(){
        
        var form = this.getForm();
        
        form.setValues({
            name: 'Andrea',
            surname: 'Cammarata',
            address: {
                street: 'Test Route',
                civic: '84',
                city: 'turin',
                zip: '10151',
                province: 'TO',
                country: 'italy'
            }
        });

        this.sheet.hide();
        
    },

    showOptions: function(){
    
        var sheet = this.sheet;
    
        if(!sheet){
    
            sheet = Ext.create('Ext.ActionSheet', {
                defaults: {
                    height: 50
                },
                items: [
                    {
                        text: 'Get Values',
                        action: 'getvalue'
                    },
                    {
                        text: 'Load Record',
                        action: 'setvalue',
                        ui: 'action'
                    }
                ]
            });
            
            this.sheet = sheet;
            
        }

        Ext.Viewport.add(sheet);
        sheet.show();
    
    }
    
});