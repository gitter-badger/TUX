Ext.data.JsonP.Ext_tux_dataview_component_editable_Multi({"tagname":"class","name":"Ext.tux.dataview.component.editable.Multi","extends":"Ext.tux.dataview.component.editable.Abstract","mixins":[],"alternateClassNames":[],"aliases":{"widget":["multieditablelistitem"]},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"author":["Andrea Cammarata"],"docauthor":["Andrea Cammarata"],"aside":[{"type":"example","name":"editable-list-single-mode"},{"type":"example","name":"components"}]},"private":null,"id":"class-Ext.tux.dataview.component.editable.Multi","code_type":"ext_define","members":{"cfg":[{"name":"checkbox","tagname":"cfg","owner":"Ext.tux.dataview.component.editable.Multi","meta":{},"id":"cfg-checkbox"},{"name":"checkedCls","tagname":"cfg","owner":"Ext.tux.dataview.component.editable.Multi","meta":{},"id":"cfg-checkedCls"}],"property":[{"name":"isEditable","tagname":"property","owner":"Ext.tux.dataview.component.editable.Abstract","meta":{"private":true},"id":"property-isEditable"},{"name":"isMultiEdit","tagname":"property","owner":"Ext.tux.dataview.component.editable.Multi","meta":{"private":true},"id":"property-isMultiEdit"}],"method":[{"name":"applyCheckbox","tagname":"method","owner":"Ext.tux.dataview.component.editable.Multi","meta":{"private":true},"id":"method-applyCheckbox"},{"name":"cancelEdit","tagname":"method","owner":"Ext.tux.dataview.component.editable.Multi","meta":{"private":true},"id":"method-cancelEdit"},{"name":"deselect","tagname":"method","owner":"Ext.tux.dataview.component.editable.Multi","meta":{"private":true},"id":"method-deselect"},{"name":"edit","tagname":"method","owner":"Ext.tux.dataview.component.editable.Multi","meta":{"private":true},"id":"method-edit"},{"name":"getCheckbox","tagname":"method","owner":"Ext.tux.dataview.component.editable.Multi","meta":{},"id":"method-getCheckbox"},{"name":"getCheckedCls","tagname":"method","owner":"Ext.tux.dataview.component.editable.Multi","meta":{},"id":"method-getCheckedCls"},{"name":"onCheckBoxTap","tagname":"method","owner":"Ext.tux.dataview.component.editable.Multi","meta":{"private":true},"id":"method-onCheckBoxTap"},{"name":"select","tagname":"method","owner":"Ext.tux.dataview.component.editable.Multi","meta":{"private":true},"id":"method-select"},{"name":"setCheckbox","tagname":"method","owner":"Ext.tux.dataview.component.editable.Multi","meta":{},"id":"method-setCheckbox"},{"name":"setCheckedCls","tagname":"method","owner":"Ext.tux.dataview.component.editable.Multi","meta":{},"id":"method-setCheckedCls"},{"name":"updateCheckbox","tagname":"method","owner":"Ext.tux.dataview.component.editable.Multi","meta":{"private":true},"id":"method-updateCheckbox"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Multi.js","href":"Multi.html#Ext-tux-dataview-component-editable-Multi"}],"html_meta":{"author":null,"docauthor":null,"aside":["            <div class='aside example'>\n              <h4>Example</h4>\n              <p><a href='#!/example/editable-list-single-mode'><img src='../examples/editable-list/doc-icons/singleedit.png' alt=''> Single Edit Mode</a></p>\n            </div>\n","            <div class='aside example'>\n              <h4>Example</h4>\n              <p><a href='#!/example/components'><img src='../examples/editable-list/doc-icons/components.png' alt=''> Custom Dataview Components</a></p>\n            </div>\n"]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.dataview.component.ListItem","Ext.tux.dataview.component.editable.Abstract"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.dataview.component.ListItem<div class='subclass '><a href='#!/api/Ext.tux.dataview.component.editable.Abstract' rel='Ext.tux.dataview.component.editable.Abstract' class='docClass'>Ext.tux.dataview.component.editable.Abstract</a><div class='subclass '><strong>Ext.tux.dataview.component.editable.Multi</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Multi.html#Ext-tux-dataview-component-editable-Multi' target='_blank'>Multi.js</a></div></pre><div class='doc-contents'>            <div class='aside example'>\n              <h4>Example</h4>\n              <p><a href='#!/example/editable-list-single-mode'><img src='../examples/editable-list/doc-icons/singleedit.png' alt=''> Single Edit Mode</a></p>\n            </div>\n            <div class='aside example'>\n              <h4>Example</h4>\n              <p><a href='#!/example/components'><img src='../examples/editable-list/doc-icons/components.png' alt=''> Custom Dataview Components</a></p>\n            </div>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-checkbox' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.editable.Multi'>Ext.tux.dataview.component.editable.Multi</span><br/><a href='source/Multi.html#Ext-tux-dataview-component-editable-Multi-cfg-checkbox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.editable.Multi-cfg-checkbox' class='name expandable'>checkbox</a><span> : Ext.Component</span></div><div class='description'><div class='short'>The component which emulate the selection checkbox\nwhich allows users to mask a list item as selected or deselected. ...</div><div class='long'><p>The component which emulate the selection checkbox\nwhich allows users to mask a list item as selected or deselected.</p>\n<p>Defaults to: <code>{cls: 'x-list-checkbox', hidden: true, showAnimation: {type: 'slideIn', direction: 'right'}, hideAnimation: {type: 'slideOut', direction: 'left'}}</code></p></div></div></div><div id='cfg-checkedCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.editable.Multi'>Ext.tux.dataview.component.editable.Multi</span><br/><a href='source/Multi.html#Ext-tux-dataview-component-editable-Multi-cfg-checkedCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.editable.Multi-cfg-checkedCls' class='name expandable'>checkedCls</a><span> : String</span></div><div class='description'><div class='short'>The CSS class applied to the checkbox\nwhen this list item has been checked. ...</div><div class='long'><p>The CSS class applied to the checkbox\nwhen this list item has been checked.</p>\n<p>Defaults to: <code>'x-checked'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-isEditable' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.tux.dataview.component.editable.Abstract' rel='Ext.tux.dataview.component.editable.Abstract' class='defined-in docClass'>Ext.tux.dataview.component.editable.Abstract</a><br/><a href='source/Abstract.html#Ext-tux-dataview-component-editable-Abstract-property-isEditable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.editable.Abstract-property-isEditable' class='name expandable'>isEditable</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-isMultiEdit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.editable.Multi'>Ext.tux.dataview.component.editable.Multi</span><br/><a href='source/Multi.html#Ext-tux-dataview-component-editable-Multi-property-isMultiEdit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.editable.Multi-property-isMultiEdit' class='name expandable'>isMultiEdit</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p><p>Overrides: <a href='#!/api/Ext.tux.dataview.component.editable.Abstract-property-isMultiEdit' rel='Ext.tux.dataview.component.editable.Abstract-property-isMultiEdit' class='docClass'>Ext.tux.dataview.component.editable.Abstract.isMultiEdit</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-applyCheckbox' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.editable.Multi'>Ext.tux.dataview.component.editable.Multi</span><br/><a href='source/Multi.html#Ext-tux-dataview-component-editable-Multi-method-applyCheckbox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.editable.Multi-method-applyCheckbox' class='name expandable'>applyCheckbox</a>( <span class='pre'>checkbox</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>checkbox</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-cancelEdit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.editable.Multi'>Ext.tux.dataview.component.editable.Multi</span><br/><a href='source/Multi.html#Ext-tux-dataview-component-editable-Multi-method-cancelEdit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.editable.Multi-method-cancelEdit' class='name expandable'>cancelEdit</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href='#!/api/Ext.tux.dataview.component.editable.Abstract-method-cancelEdit' rel='Ext.tux.dataview.component.editable.Abstract-method-cancelEdit' class='docClass'>Ext.tux.dataview.component.editable.Abstract.cancelEdit</a></p></div></div></div><div id='method-deselect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.editable.Multi'>Ext.tux.dataview.component.editable.Multi</span><br/><a href='source/Multi.html#Ext-tux-dataview-component-editable-Multi-method-deselect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.editable.Multi-method-deselect' class='name expandable'>deselect</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href='#!/api/Ext.tux.dataview.component.editable.Abstract-method-deselect' rel='Ext.tux.dataview.component.editable.Abstract-method-deselect' class='docClass'>Ext.tux.dataview.component.editable.Abstract.deselect</a></p></div></div></div><div id='method-edit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.editable.Multi'>Ext.tux.dataview.component.editable.Multi</span><br/><a href='source/Multi.html#Ext-tux-dataview-component-editable-Multi-method-edit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.editable.Multi-method-edit' class='name expandable'>edit</a>( <span class='pre'>start</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>start</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.tux.dataview.component.editable.Abstract-method-edit' rel='Ext.tux.dataview.component.editable.Abstract-method-edit' class='docClass'>Ext.tux.dataview.component.editable.Abstract.edit</a></p></div></div></div><div id='method-getCheckbox' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.editable.Multi'>Ext.tux.dataview.component.editable.Multi</span><br/><a href='source/Multi.html#Ext-tux-dataview-component-editable-Multi-cfg-checkbox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.editable.Multi-method-getCheckbox' class='name expandable'>getCheckbox</a>( <span class='pre'></span> ) : Ext.Component</div><div class='description'><div class='short'>Returns the value of checkbox. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.tux.dataview.component.editable.Multi-cfg-checkbox\" rel=\"Ext.tux.dataview.component.editable.Multi-cfg-checkbox\" class=\"docClass\">checkbox</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.Component</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCheckedCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.editable.Multi'>Ext.tux.dataview.component.editable.Multi</span><br/><a href='source/Multi.html#Ext-tux-dataview-component-editable-Multi-cfg-checkedCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.editable.Multi-method-getCheckedCls' class='name expandable'>getCheckedCls</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of checkedCls. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.tux.dataview.component.editable.Multi-cfg-checkedCls\" rel=\"Ext.tux.dataview.component.editable.Multi-cfg-checkedCls\" class=\"docClass\">checkedCls</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onCheckBoxTap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.editable.Multi'>Ext.tux.dataview.component.editable.Multi</span><br/><a href='source/Multi.html#Ext-tux-dataview-component-editable-Multi-method-onCheckBoxTap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.editable.Multi-method-onCheckBoxTap' class='name expandable'>onCheckBoxTap</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-select' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.editable.Multi'>Ext.tux.dataview.component.editable.Multi</span><br/><a href='source/Multi.html#Ext-tux-dataview-component-editable-Multi-method-select' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.editable.Multi-method-select' class='name expandable'>select</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href='#!/api/Ext.tux.dataview.component.editable.Abstract-method-select' rel='Ext.tux.dataview.component.editable.Abstract-method-select' class='docClass'>Ext.tux.dataview.component.editable.Abstract.select</a></p></div></div></div><div id='method-setCheckbox' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.editable.Multi'>Ext.tux.dataview.component.editable.Multi</span><br/><a href='source/Multi.html#Ext-tux-dataview-component-editable-Multi-cfg-checkbox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.editable.Multi-method-setCheckbox' class='name expandable'>setCheckbox</a>( <span class='pre'>checkbox</span> )</div><div class='description'><div class='short'>Sets the value of checkbox. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.tux.dataview.component.editable.Multi-cfg-checkbox\" rel=\"Ext.tux.dataview.component.editable.Multi-cfg-checkbox\" class=\"docClass\">checkbox</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>checkbox</span> : Ext.Component<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setCheckedCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.editable.Multi'>Ext.tux.dataview.component.editable.Multi</span><br/><a href='source/Multi.html#Ext-tux-dataview-component-editable-Multi-cfg-checkedCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.editable.Multi-method-setCheckedCls' class='name expandable'>setCheckedCls</a>( <span class='pre'>checkedCls</span> )</div><div class='description'><div class='short'>Sets the value of checkedCls. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.tux.dataview.component.editable.Multi-cfg-checkedCls\" rel=\"Ext.tux.dataview.component.editable.Multi-cfg-checkedCls\" class=\"docClass\">checkedCls</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>checkedCls</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateCheckbox' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.editable.Multi'>Ext.tux.dataview.component.editable.Multi</span><br/><a href='source/Multi.html#Ext-tux-dataview-component-editable-Multi-method-updateCheckbox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.editable.Multi-method-updateCheckbox' class='name expandable'>updateCheckbox</a>( <span class='pre'>checkbox, oldCheckbox</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>checkbox</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>oldCheckbox</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});