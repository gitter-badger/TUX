Ext.data.JsonP.Ext_tux_plugin_SpeechToText({"tagname":"class","name":"Ext.tux.plugin.SpeechToText","extends":"Ext.Evented","mixins":[],"alternateClassNames":[],"aliases":{"plugin":["speechtotext"]},"singleton":false,"requires":["Ext.tux.device.SpeechRecognizer"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"author":["Andrea Cammarata"],"docauthor":["Andrea Cammarata"]},"private":null,"id":"class-Ext.tux.plugin.SpeechToText","code_type":"ext_define","members":{"cfg":[{"name":"prompt","tagname":"cfg","owner":"Ext.tux.plugin.SpeechToText","meta":{},"id":"cfg-prompt"}],"property":[{"name":"component","tagname":"property","owner":"Ext.tux.plugin.SpeechToText","meta":{},"id":"property-component"}],"method":[{"name":"doSpeechIconTap","tagname":"method","owner":"Ext.tux.plugin.SpeechToText","meta":{"private":true},"id":"method-doSpeechIconTap"},{"name":"getPrompt","tagname":"method","owner":"Ext.tux.plugin.SpeechToText","meta":{},"id":"method-getPrompt"},{"name":"init","tagname":"method","owner":"Ext.tux.plugin.SpeechToText","meta":{"private":true},"id":"method-init"},{"name":"onRecognizmentFailure","tagname":"method","owner":"Ext.tux.plugin.SpeechToText","meta":{"private":true},"id":"method-onRecognizmentFailure"},{"name":"onRecognizmentSuccess","tagname":"method","owner":"Ext.tux.plugin.SpeechToText","meta":{"private":true},"id":"method-onRecognizmentSuccess"},{"name":"onSpeechIconTap","tagname":"method","owner":"Ext.tux.plugin.SpeechToText","meta":{"private":true},"id":"method-onSpeechIconTap"},{"name":"setPrompt","tagname":"method","owner":"Ext.tux.plugin.SpeechToText","meta":{},"id":"method-setPrompt"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"SpeechToText.js","href":"SpeechToText2.html#Ext-tux-plugin-SpeechToText"}],"html_meta":{"author":null,"docauthor":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Evented"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Evented<div class='subclass '><strong>Ext.tux.plugin.SpeechToText</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.tux.device.SpeechRecognizer</div><h4>Files</h4><div class='dependency'><a href='source/SpeechToText2.html#Ext-tux-plugin-SpeechToText' target='_blank'>SpeechToText.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-prompt' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.plugin.SpeechToText'>Ext.tux.plugin.SpeechToText</span><br/><a href='source/SpeechToText2.html#Ext-tux-plugin-SpeechToText-cfg-prompt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.plugin.SpeechToText-cfg-prompt' class='name not-expandable'>prompt</a><span> : String</span></div><div class='description'><div class='short'><p>The default text prompt to show to users when asking\nto start speaking.</p>\n</div><div class='long'><p>The default text prompt to show to users when asking\nto start speaking.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-component' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.plugin.SpeechToText'>Ext.tux.plugin.SpeechToText</span><br/><a href='source/SpeechToText2.html#Ext-tux-plugin-SpeechToText-property-component' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.plugin.SpeechToText-property-component' class='name not-expandable'>component</a><span> : Ext.Component</span></div><div class='description'><div class='short'><p>The component to which this plugin is binded to.</p>\n</div><div class='long'><p>The component to which this plugin is binded to.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-doSpeechIconTap' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.plugin.SpeechToText'>Ext.tux.plugin.SpeechToText</span><br/><a href='source/SpeechToText2.html#Ext-tux-plugin-SpeechToText-method-doSpeechIconTap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.plugin.SpeechToText-method-doSpeechIconTap' class='name expandable'>doSpeechIconTap</a>( <span class='pre'>me, e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>me</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPrompt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.plugin.SpeechToText'>Ext.tux.plugin.SpeechToText</span><br/><a href='source/SpeechToText2.html#Ext-tux-plugin-SpeechToText-cfg-prompt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.plugin.SpeechToText-method-getPrompt' class='name expandable'>getPrompt</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of prompt. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.tux.plugin.SpeechToText-cfg-prompt\" rel=\"Ext.tux.plugin.SpeechToText-cfg-prompt\" class=\"docClass\">prompt</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.plugin.SpeechToText'>Ext.tux.plugin.SpeechToText</span><br/><a href='source/SpeechToText2.html#Ext-tux-plugin-SpeechToText-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.plugin.SpeechToText-method-init' class='name expandable'>init</a>( <span class='pre'>component</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Sets up all of the references the plugin needs ...</div><div class='long'><p>Sets up all of the references the plugin needs</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRecognizmentFailure' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.plugin.SpeechToText'>Ext.tux.plugin.SpeechToText</span><br/><a href='source/SpeechToText2.html#Ext-tux-plugin-SpeechToText-method-onRecognizmentFailure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.plugin.SpeechToText-method-onRecognizmentFailure' class='name expandable'>onRecognizmentFailure</a>( <span class='pre'>text</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRecognizmentSuccess' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.plugin.SpeechToText'>Ext.tux.plugin.SpeechToText</span><br/><a href='source/SpeechToText2.html#Ext-tux-plugin-SpeechToText-method-onRecognizmentSuccess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.plugin.SpeechToText-method-onRecognizmentSuccess' class='name expandable'>onRecognizmentSuccess</a>( <span class='pre'>text</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onSpeechIconTap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.plugin.SpeechToText'>Ext.tux.plugin.SpeechToText</span><br/><a href='source/SpeechToText2.html#Ext-tux-plugin-SpeechToText-method-onSpeechIconTap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.plugin.SpeechToText-method-onSpeechIconTap' class='name expandable'>onSpeechIconTap</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPrompt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.plugin.SpeechToText'>Ext.tux.plugin.SpeechToText</span><br/><a href='source/SpeechToText2.html#Ext-tux-plugin-SpeechToText-cfg-prompt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.plugin.SpeechToText-method-setPrompt' class='name expandable'>setPrompt</a>( <span class='pre'>prompt</span> )</div><div class='description'><div class='short'>Sets the value of prompt. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.tux.plugin.SpeechToText-cfg-prompt\" rel=\"Ext.tux.plugin.SpeechToText-cfg-prompt\" class=\"docClass\">prompt</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prompt</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});