/**
 * @class PhoneGap.view.SpeechRecognizer
 * @extend Ext.form.Panel
 */
Ext.define('PhoneGap.view.SpeechRecognizer', {
    extend: 'Ext.form.Panel',
    xtype: 'speechrecognizerview',
    requires: [
        'Ext.TitleBar',
        'Ext.Toolbar',
        'Ext.field.Select',
        'Ext.form.FieldSet',
        'Ext.tux.plugin.SpeechToText'
    ],
    config: {
	    
	    cls: 'x-speech-recognition-view',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'TUX PhoneGap Plugins'
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'selectfield',
                        flex: 1,
                        options: [
                        { text: 'American', value: 'en-US'   },
		                            { text: 'Spanish',  value: 'es-ES'   },
								    { text: 'Italian',  value: 'it-IT'   }
								]
				            }
				        ]
			        },
                    {
	                    xtype: 'fieldset',
	                    title: 'Personal Informations',
	                    instructions: [
	                        'Please enter all your informations to proceed',
	                        'with the registration process. You can also use your voice',
	                        'by tapping the microphone icon next to every form field.'
	                    ].join(' '),
	                    items: [
	                        {
			                    xtype: 'textfield',
		                        label: 'Name',
		                        plugins: [
						            {
							            xclass: 'Ext.tux.plugin.SpeechToText',
							            culture: 'en-US',
							            prompt: 'What\'s your name?'
						            }
						        ]
		                    },
		                    {
			                    xtype: 'textfield',
		                        label: 'Surname',
		                        plugins: [
						            {
							            xclass: 'Ext.tux.plugin.SpeechToText',
							            culture: 'en-US',
							            prompt: 'What\'s your family name?'
						            }
						        ]
		                    },
		                    {
			                    xtype: 'textareafield',
			                    placeHolder: 'Tell us more about you...',
		                        plugins: [
						            {
							            xclass: 'Ext.tux.plugin.SpeechToText',
							            culture: 'en-US',
							            prompt: 'Tell me more about you and your hobbies.'
						            }
						        ]
		                    }
	                    ]
                    }
                ]

        }
          

});
