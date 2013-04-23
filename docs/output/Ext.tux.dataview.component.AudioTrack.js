Ext.data.JsonP.Ext_tux_dataview_component_AudioTrack({"subclasses":[],"statics":{"cfg":[],"method":[],"css_var":[],"property":[],"event":[],"css_mixin":[]},"inheritdoc":null,"alternateClassNames":[],"aliases":{"widget":["audiotrackdataitem"]},"tagname":"class","html_meta":{"docauthor":null,"author":null,"aside":["            <div class='aside example'>\n              <h4>Example</h4>\n              <p><a href='#!/example/audio-track-playlist'><img src='../examples/playlist/doc-icons/playlist.png' alt=''> Playlist</a></p>\n            </div>\n"]},"extends":"Ext.dataview.component.DataItem","uses":[],"superclasses":["Ext.dataview.component.DataItem"],"meta":{"docauthor":["Andrea Cammarata"],"author":["Andrea Cammarata"],"aside":[{"type":"example","name":"audio-track-playlist"}]},"files":[{"href":"AudioTrack2.html#Ext-tux-dataview-component-AudioTrack","filename":"AudioTrack.js"}],"code_type":"ext_define","requires":["Ext.tux.AudioTrack"],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.dataview.component.DataItem<div class='subclass '><strong>Ext.tux.dataview.component.AudioTrack</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.tux.AudioTrack' rel='Ext.tux.AudioTrack' class='docClass'>Ext.tux.AudioTrack</a></div><h4>Files</h4><div class='dependency'><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack' target='_blank'>AudioTrack.js</a></div></pre><div class='doc-contents'>            <div class='aside example'>\n              <h4>Example</h4>\n              <p><a href='#!/example/audio-track-playlist'><img src='../examples/playlist/doc-icons/playlist.png' alt=''> Playlist</a></p>\n            </div>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-cls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-cfg-cls' class='name expandable'>cls</a><span> : String</span></div><div class='description'><div class='short'>The component custom CSS class. ...</div><div class='long'><p>The component custom CSS class.</p>\n<p>Defaults to: <code>'x-audio-track-data-item'</code></p></div></div></div><div id='cfg-dataMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-cfg-dataMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-cfg-dataMap' class='name expandable'>dataMap</a><span> : Object</span></div><div class='description'><div class='short'>Setting up the DataMap object. ...</div><div class='long'><p>Setting up the DataMap object.</p>\n<p>Defaults to: <code>{getTrack: {setCoverArtUrl: 'cover', setUrl: 'audio'}}</code></p></div></div></div><div id='cfg-layout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-cfg-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-cfg-layout' class='name expandable'>layout</a><span> : Object</span></div><div class='description'><div class='short'>The component use an 'hbox' stretched layout. ...</div><div class='long'><p>The component use an 'hbox' stretched layout.\nIn this way the Edit Button will be placed at the\nright edge of the device screen.</p>\n<p>Defaults to: <code>{type: 'hbox', align: 'stretch'}</code></p></div></div></div><div id='cfg-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-cfg-title' class='name expandable'>title</a><span> : Ext.Component</span></div><div class='description'><div class='short'>The component used to show the Track title. ...</div><div class='long'><p>The component used to show the Track title.</p>\n<p>Defaults to: <code>{cls: 'x-track-info', tpl: ['&lt;div class=&quot;title&quot;&gt;{title}&lt;/div&gt;', '&lt;div class=&quot;artist&quot;&gt;{artist}&lt;/div&gt;']}</code></p></div></div></div><div id='cfg-track' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-cfg-track' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-cfg-track' class='name expandable'>track</a><span> : Ext.tux.AudioCover</span></div><div class='description'><div class='short'>The component that allows the user to see the track cover\nand hear a preview of the audio file. ...</div><div class='long'><p>The component that allows the user to see the track cover\nand hear a preview of the audio file.</p>\n<p>Defaults to: <code>{xtype: 'audiotrack'}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-applyTitle' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-method-applyTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-method-applyTitle' class='name expandable'>applyTitle</a>( <span class='pre'>config</span> ) : Ext.Component</div><div class='description'><div class='short'>Apply the DataView item Name component. ...</div><div class='long'><p>Apply the DataView item Name component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The configuration Object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.Component</span><div class='sub-desc'><p>The Name component.</p>\n</div></li></ul></div></div></div><div id='method-applyTrack' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-method-applyTrack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-method-applyTrack' class='name expandable'>applyTrack</a>( <span class='pre'>config</span> ) : Ext.tux.AudioCover</div><div class='description'><div class='short'>Apply the DataView Track audio component. ...</div><div class='long'><p>Apply the DataView Track audio component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The configuration Object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.tux.AudioCover</span><div class='sub-desc'><p>The new Audio track component.</p>\n</div></li></ul></div></div></div><div id='method-getCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-method-getCls' class='name expandable'>getCls</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of cls. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.tux.dataview.component.AudioTrack-cfg-cls\" rel=\"Ext.tux.dataview.component.AudioTrack-cfg-cls\" class=\"docClass\">cls</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDataMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-cfg-dataMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-method-getDataMap' class='name expandable'>getDataMap</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of dataMap. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.tux.dataview.component.AudioTrack-cfg-dataMap\" rel=\"Ext.tux.dataview.component.AudioTrack-cfg-dataMap\" class=\"docClass\">dataMap</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLayout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-cfg-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-method-getLayout' class='name expandable'>getLayout</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of layout. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.tux.dataview.component.AudioTrack-cfg-layout\" rel=\"Ext.tux.dataview.component.AudioTrack-cfg-layout\" class=\"docClass\">layout</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-method-getTitle' class='name expandable'>getTitle</a>( <span class='pre'></span> ) : Ext.Component</div><div class='description'><div class='short'>Returns the value of title. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.tux.dataview.component.AudioTrack-cfg-title\" rel=\"Ext.tux.dataview.component.AudioTrack-cfg-title\" class=\"docClass\">title</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.Component</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTrack' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-cfg-track' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-method-getTrack' class='name expandable'>getTrack</a>( <span class='pre'></span> ) : Ext.tux.AudioCover</div><div class='description'><div class='short'>Returns the value of track. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.tux.dataview.component.AudioTrack-cfg-track\" rel=\"Ext.tux.dataview.component.AudioTrack-cfg-track\" class=\"docClass\">track</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.tux.AudioCover</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onFlippedChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-method-onFlippedChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-method-onFlippedChange' class='name expandable'>onFlippedChange</a>( <span class='pre'>track, flipped, oldFlipped</span> )</div><div class='description'><div class='short'>Callback function called when an audio track changes its flip status. ...</div><div class='long'><p>Callback function called when an audio track changes its flip status.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>track</span> : Ext.tux.AudioCover<div class='sub-desc'><p>The audio track component.</p>\n</div></li><li><span class='pre'>flipped</span> : Boolean<div class='sub-desc'><p>The new flipped status.</p>\n</div></li><li><span class='pre'>oldFlipped</span> : Boolean<div class='sub-desc'><p>The old flipped status.</p>\n</div></li></ul></div></div></div><div id='method-setCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-method-setCls' class='name expandable'>setCls</a>( <span class='pre'>cls</span> )</div><div class='description'><div class='short'>Sets the value of cls. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.tux.dataview.component.AudioTrack-cfg-cls\" rel=\"Ext.tux.dataview.component.AudioTrack-cfg-cls\" class=\"docClass\">cls</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setDataMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-cfg-dataMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-method-setDataMap' class='name expandable'>setDataMap</a>( <span class='pre'>dataMap</span> )</div><div class='description'><div class='short'>Sets the value of dataMap. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.tux.dataview.component.AudioTrack-cfg-dataMap\" rel=\"Ext.tux.dataview.component.AudioTrack-cfg-dataMap\" class=\"docClass\">dataMap</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dataMap</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setLayout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-cfg-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-method-setLayout' class='name expandable'>setLayout</a>( <span class='pre'>layout</span> )</div><div class='description'><div class='short'>Sets the value of layout. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.tux.dataview.component.AudioTrack-cfg-layout\" rel=\"Ext.tux.dataview.component.AudioTrack-cfg-layout\" class=\"docClass\">layout</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layout</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-method-setTitle' class='name expandable'>setTitle</a>( <span class='pre'>title</span> )</div><div class='description'><div class='short'>Sets the value of title. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.tux.dataview.component.AudioTrack-cfg-title\" rel=\"Ext.tux.dataview.component.AudioTrack-cfg-title\" class=\"docClass\">title</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : Ext.Component<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setTrack' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-cfg-track' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-method-setTrack' class='name expandable'>setTrack</a>( <span class='pre'>track</span> )</div><div class='description'><div class='short'>Sets the value of track. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.tux.dataview.component.AudioTrack-cfg-track\" rel=\"Ext.tux.dataview.component.AudioTrack-cfg-track\" class=\"docClass\">track</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>track</span> : Ext.tux.AudioCover<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-method-updateTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-method-updateTitle' class='name expandable'>updateTitle</a>( <span class='pre'>newName, oldName</span> )</div><div class='description'><div class='short'>Update the Track title. ...</div><div class='long'><p>Update the Track title.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newName</span> : Ext.Component<div class='sub-desc'><p>The new component.</p>\n</div></li><li><span class='pre'>oldName</span> : Ext.Component<div class='sub-desc'><p>The old component.</p>\n</div></li></ul></div></div></div><div id='method-updateTrack' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.dataview.component.AudioTrack'>Ext.tux.dataview.component.AudioTrack</span><br/><a href='source/AudioTrack2.html#Ext-tux-dataview-component-AudioTrack-method-updateTrack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.dataview.component.AudioTrack-method-updateTrack' class='name expandable'>updateTrack</a>( <span class='pre'>newTrack, oldTrack</span> )</div><div class='description'><div class='short'>Update the Track audio component. ...</div><div class='long'><p>Update the Track audio component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newTrack</span> : Ext.tux.AudioCover<div class='sub-desc'><p>The new track audio component.</p>\n</div></li><li><span class='pre'>oldTrack</span> : Ext.tux.AudioCover<div class='sub-desc'><p>The old track audio component.</p>\n</div></li></ul></div></div></div></div></div></div></div>","component":false,"linenr":1,"members":{"cfg":[{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"cfg","meta":{},"name":"cls","id":"cfg-cls"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"cfg","meta":{},"name":"dataMap","id":"cfg-dataMap"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"cfg","meta":{},"name":"layout","id":"cfg-layout"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"cfg","meta":{},"name":"title","id":"cfg-title"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"cfg","meta":{},"name":"track","id":"cfg-track"}],"method":[{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"method","meta":{},"name":"applyTitle","id":"method-applyTitle"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"method","meta":{},"name":"applyTrack","id":"method-applyTrack"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"method","meta":{},"name":"getCls","id":"method-getCls"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"method","meta":{},"name":"getDataMap","id":"method-getDataMap"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"method","meta":{},"name":"getLayout","id":"method-getLayout"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"method","meta":{},"name":"getTitle","id":"method-getTitle"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"method","meta":{},"name":"getTrack","id":"method-getTrack"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"method","meta":{},"name":"onFlippedChange","id":"method-onFlippedChange"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"method","meta":{},"name":"setCls","id":"method-setCls"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"method","meta":{},"name":"setDataMap","id":"method-setDataMap"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"method","meta":{},"name":"setLayout","id":"method-setLayout"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"method","meta":{},"name":"setTitle","id":"method-setTitle"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"method","meta":{},"name":"setTrack","id":"method-setTrack"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"method","meta":{},"name":"updateTitle","id":"method-updateTitle"},{"owner":"Ext.tux.dataview.component.AudioTrack","tagname":"method","meta":{},"name":"updateTrack","id":"method-updateTrack"}],"css_var":[],"property":[],"event":[],"css_mixin":[]},"private":null,"mixedInto":[],"name":"Ext.tux.dataview.component.AudioTrack","inheritable":null,"id":"class-Ext.tux.dataview.component.AudioTrack","singleton":false,"enum":null,"override":null,"parentMixins":[],"mixins":[]});