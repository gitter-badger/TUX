Ext.data.JsonP.Ext_tux_AudioTrack({"tagname":"class","name":"Ext.tux.AudioTrack","extends":"Ext.Audio","mixins":[],"alternateClassNames":[],"aliases":{"widget":["audiotrack"]},"singleton":false,"requires":["Ext.tux.progressbar.Radial","Ext.Button"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"author":["Andrea Cammarata"],"docauthor":["Andrea Cammarata"],"aside":[{"type":"example","name":"audio-track-playlist"}]},"private":null,"id":"class-Ext.tux.AudioTrack","code_type":"ext_define","members":{"cfg":[{"name":"baseCls","tagname":"cfg","owner":"Ext.tux.AudioTrack","meta":{},"id":"cfg-baseCls"},{"name":"coverUrl","tagname":"cfg","owner":"Ext.tux.AudioTrack","meta":{},"id":"cfg-coverUrl"},{"name":"enableControls","tagname":"cfg","owner":"Ext.tux.AudioTrack","meta":{},"id":"cfg-enableControls"},{"name":"flipped","tagname":"cfg","owner":"Ext.tux.AudioTrack","meta":{},"id":"cfg-flipped"},{"name":"progressBar","tagname":"cfg","owner":"Ext.tux.AudioTrack","meta":{},"id":"cfg-progressBar"},{"name":"stopButton","tagname":"cfg","owner":"Ext.tux.AudioTrack","meta":{},"id":"cfg-stopButton"}],"property":[],"method":[{"name":"applyFlipped","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{"private":true},"id":"method-applyFlipped"},{"name":"applyProgressBar","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{"private":true},"id":"method-applyProgressBar"},{"name":"applyStopButton","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{"private":true},"id":"method-applyStopButton"},{"name":"getBaseCls","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{},"id":"method-getBaseCls"},{"name":"getCoverUrl","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{},"id":"method-getCoverUrl"},{"name":"getElementConfig","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{"private":true},"id":"method-getElementConfig"},{"name":"getEnableControls","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{},"id":"method-getEnableControls"},{"name":"getFlipped","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{},"id":"method-getFlipped"},{"name":"getProgressBar","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{},"id":"method-getProgressBar"},{"name":"getStopButton","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{},"id":"method-getStopButton"},{"name":"initialize","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{"private":true},"id":"method-initialize"},{"name":"setBaseCls","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{},"id":"method-setBaseCls"},{"name":"setCoverUrl","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{},"id":"method-setCoverUrl"},{"name":"setEnableControls","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{},"id":"method-setEnableControls"},{"name":"setFlipped","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{},"id":"method-setFlipped"},{"name":"setProgressBar","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{},"id":"method-setProgressBar"},{"name":"setStopButton","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{},"id":"method-setStopButton"},{"name":"updateCoverArtUrl","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{"private":true},"id":"method-updateCoverArtUrl"},{"name":"updateProgressBar","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{"private":true},"id":"method-updateProgressBar"},{"name":"updateStopButton","tagname":"method","owner":"Ext.tux.AudioTrack","meta":{"private":true},"id":"method-updateStopButton"}],"event":[{"name":"flippedchange","tagname":"event","owner":"Ext.tux.AudioTrack","meta":{},"id":"event-flippedchange"}],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"AudioTrack.js","href":"AudioTrack.html#Ext-tux-AudioTrack"}],"html_meta":{"author":null,"docauthor":null,"aside":["            <div class='aside example'>\n              <h4>Example</h4>\n              <p><a href='#!/example/audio-track-playlist'><img src='../examples/playlist/doc-icons/playlist.png' alt=''> Playlist</a></p>\n            </div>\n"]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Audio"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Audio<div class='subclass '><strong>Ext.tux.AudioTrack</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.Button</div><div class='dependency'><a href='#!/api/Ext.tux.progressbar.Radial' rel='Ext.tux.progressbar.Radial' class='docClass'>Ext.tux.progressbar.Radial</a></div><h4>Files</h4><div class='dependency'><a href='source/AudioTrack.html#Ext-tux-AudioTrack' target='_blank'>AudioTrack.js</a></div></pre><div class='doc-contents'>            <div class='aside example'>\n              <h4>Example</h4>\n              <p><a href='#!/example/audio-track-playlist'><img src='../examples/playlist/doc-icons/playlist.png' alt=''> Playlist</a></p>\n            </div>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-baseCls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-baseCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-cfg-baseCls' class='name expandable'>baseCls</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>Ext.baseCSSPrefix + 'audiotrack'</code></p></div></div></div><div id='cfg-coverUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-coverUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-cfg-coverUrl' class='name not-expandable'>coverUrl</a><span> : Object</span></div><div class='description'><div class='short'><p>The url of the picture used as the cover of the audio file.</p>\n</div><div class='long'><p>The url of the picture used as the cover of the audio file.</p>\n</div></div></div><div id='cfg-enableControls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-enableControls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-cfg-enableControls' class='name expandable'>enableControls</a><span> : Boolean</span></div><div class='description'><div class='short'>Hide the default browser controls because we are going\nto provide a custom UI to control the audio file. ...</div><div class='long'><p>Hide the default browser controls because we are going\nto provide a custom UI to control the audio file.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-flipped' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-flipped' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-cfg-flipped' class='name expandable'>flipped</a><span> : Boolean</span></div><div class='description'><div class='short'>False to display the front face which contains the audio track cover art,\notherwise true to display the progressbar f...</div><div class='long'><p>False to display the front face which contains the audio track cover art,\notherwise true to display the progressbar face on the front one.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-progressBar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-progressBar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-cfg-progressBar' class='name expandable'>progressBar</a><span> : Object</span></div><div class='description'><div class='short'>The radial progressbar configuration. ...</div><div class='long'><p>The radial progressbar configuration.</p>\n<p>Defaults to: <code>{showValue: false, scale: 'small'}</code></p></div></div></div><div id='cfg-stopButton' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-stopButton' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-cfg-stopButton' class='name expandable'>stopButton</a><span> : Object</span></div><div class='description'><div class='short'>The configuration for the stop button. ...</div><div class='long'><p>The configuration for the stop button.</p>\n<p>Defaults to: <code>{iconMask: true, iconCls: 'none'}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-applyFlipped' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-method-applyFlipped' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-applyFlipped' class='name expandable'>applyFlipped</a>( <span class='pre'>flipped</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Flip the card to the front / back face after\nplaying / stopping the audio file. ...</div><div class='long'><p>Flip the card to the front / back face after\nplaying / stopping the audio file.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>flipped</span> : Boolean<div class='sub-desc'><p>True to show the front cover face, otherwise\nwill be shown the back progressbar one.</p>\n</div></li></ul></div></div></div><div id='method-applyProgressBar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-method-applyProgressBar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-applyProgressBar' class='name expandable'>applyProgressBar</a>( <span class='pre'>config</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Create the radial progressbar and update the getProgressBar reference. ...</div><div class='long'><p>Create the radial progressbar and update the getProgressBar reference.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The configuration used to create the progressbar.</p>\n</div></li></ul></div></div></div><div id='method-applyStopButton' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-method-applyStopButton' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-applyStopButton' class='name expandable'>applyStopButton</a>( <span class='pre'>config</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Create the stop button and update the getStopButton reference. ...</div><div class='long'><p>Create the stop button and update the getStopButton reference.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The configuration used to create the button.</p>\n</div></li></ul></div></div></div><div id='method-getBaseCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-baseCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-getBaseCls' class='name expandable'>getBaseCls</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of baseCls. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.tux.AudioTrack-cfg-baseCls\" rel=\"Ext.tux.AudioTrack-cfg-baseCls\" class=\"docClass\">baseCls</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCoverUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-coverUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-getCoverUrl' class='name expandable'>getCoverUrl</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of coverUrl. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.tux.AudioTrack-cfg-coverUrl\" rel=\"Ext.tux.AudioTrack-cfg-coverUrl\" class=\"docClass\">coverUrl</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getElementConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-method-getElementConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-getElementConfig' class='name expandable'>getElementConfig</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getEnableControls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-enableControls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-getEnableControls' class='name expandable'>getEnableControls</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of enableControls. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.tux.AudioTrack-cfg-enableControls\" rel=\"Ext.tux.AudioTrack-cfg-enableControls\" class=\"docClass\">enableControls</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFlipped' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-flipped' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-getFlipped' class='name expandable'>getFlipped</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of flipped. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.tux.AudioTrack-cfg-flipped\" rel=\"Ext.tux.AudioTrack-cfg-flipped\" class=\"docClass\">flipped</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getProgressBar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-progressBar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-getProgressBar' class='name expandable'>getProgressBar</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of progressBar. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.tux.AudioTrack-cfg-progressBar\" rel=\"Ext.tux.AudioTrack-cfg-progressBar\" class=\"docClass\">progressBar</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getStopButton' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-stopButton' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-getStopButton' class='name expandable'>getStopButton</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of stopButton. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.tux.AudioTrack-cfg-stopButton\" rel=\"Ext.tux.AudioTrack-cfg-stopButton\" class=\"docClass\">stopButton</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Component initialization function. ...</div><div class='long'><p>Component initialization function.</p>\n</div></div></div><div id='method-setBaseCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-baseCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-setBaseCls' class='name expandable'>setBaseCls</a>( <span class='pre'>baseCls</span> )</div><div class='description'><div class='short'>Sets the value of baseCls. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.tux.AudioTrack-cfg-baseCls\" rel=\"Ext.tux.AudioTrack-cfg-baseCls\" class=\"docClass\">baseCls</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>baseCls</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setCoverUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-coverUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-setCoverUrl' class='name expandable'>setCoverUrl</a>( <span class='pre'>coverUrl</span> )</div><div class='description'><div class='short'>Sets the value of coverUrl. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.tux.AudioTrack-cfg-coverUrl\" rel=\"Ext.tux.AudioTrack-cfg-coverUrl\" class=\"docClass\">coverUrl</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>coverUrl</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setEnableControls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-enableControls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-setEnableControls' class='name expandable'>setEnableControls</a>( <span class='pre'>enableControls</span> )</div><div class='description'><div class='short'>Sets the value of enableControls. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.tux.AudioTrack-cfg-enableControls\" rel=\"Ext.tux.AudioTrack-cfg-enableControls\" class=\"docClass\">enableControls</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>enableControls</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setFlipped' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-flipped' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-setFlipped' class='name expandable'>setFlipped</a>( <span class='pre'>flipped</span> )</div><div class='description'><div class='short'>Sets the value of flipped. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.tux.AudioTrack-cfg-flipped\" rel=\"Ext.tux.AudioTrack-cfg-flipped\" class=\"docClass\">flipped</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>flipped</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setProgressBar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-progressBar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-setProgressBar' class='name expandable'>setProgressBar</a>( <span class='pre'>progressBar</span> )</div><div class='description'><div class='short'>Sets the value of progressBar. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.tux.AudioTrack-cfg-progressBar\" rel=\"Ext.tux.AudioTrack-cfg-progressBar\" class=\"docClass\">progressBar</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>progressBar</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setStopButton' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-stopButton' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-setStopButton' class='name expandable'>setStopButton</a>( <span class='pre'>stopButton</span> )</div><div class='description'><div class='short'>Sets the value of stopButton. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.tux.AudioTrack-cfg-stopButton\" rel=\"Ext.tux.AudioTrack-cfg-stopButton\" class=\"docClass\">stopButton</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>stopButton</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateCoverArtUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-method-updateCoverArtUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-updateCoverArtUrl' class='name expandable'>updateCoverArtUrl</a>( <span class='pre'>value</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Update tha audio cover art Url. ...</div><div class='long'><p>Update tha audio cover art Url.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p>The new audiotrack cover art Url.</p>\n</div></li></ul></div></div></div><div id='method-updateProgressBar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-method-updateProgressBar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-updateProgressBar' class='name expandable'>updateProgressBar</a>( <span class='pre'>newProgressBar, oldProgressBar</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Update the ProgressBar creating the new one and destroying\nthe old one if any. ...</div><div class='long'><p>Update the ProgressBar creating the new one and destroying\nthe old one if any.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newProgressBar</span> : <a href=\"#!/api/Ext.tux.progressbar.Radial\" rel=\"Ext.tux.progressbar.Radial\" class=\"docClass\">Ext.tux.progressbar.Radial</a><div class='sub-desc'><p>The new created progressbar.</p>\n</div></li><li><span class='pre'>oldProgressBar</span> : <a href=\"#!/api/Ext.tux.progressbar.Radial\" rel=\"Ext.tux.progressbar.Radial\" class=\"docClass\">Ext.tux.progressbar.Radial</a><div class='sub-desc'><p>The old progressbar that eventually already exists.</p>\n</div></li></ul></div></div></div><div id='method-updateStopButton' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-method-updateStopButton' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-method-updateStopButton' class='name expandable'>updateStopButton</a>( <span class='pre'>newButton, oldButton</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Update the Stop button creating the new one and destroying\nthe old one if any. ...</div><div class='long'><p>Update the Stop button creating the new one and destroying\nthe old one if any.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newButton</span> : Ext.Button<div class='sub-desc'><p>The new created button.</p>\n</div></li><li><span class='pre'>oldButton</span> : Ext.Button<div class='sub-desc'><p>The old button that eventually already exists.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-flippedchange' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tux.AudioTrack'>Ext.tux.AudioTrack</span><br/><a href='source/AudioTrack.html#Ext-tux-AudioTrack-cfg-flipped' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tux.AudioTrack-event-flippedchange' class='name expandable'>flippedchange</a>( <span class='pre'>this, value, oldValue, eOpts</span> )</div><div class='description'><div class='short'>Fires when the flipped configuration is changed by setFlipped. ...</div><div class='long'><p>Fires when the <a href=\"#!/api/Ext.tux.AudioTrack-cfg-flipped\" rel=\"Ext.tux.AudioTrack-cfg-flipped\" class=\"docClass\">flipped</a> configuration is changed by <a href=\"#!/api/Ext.tux.AudioTrack-method-setFlipped\" rel=\"Ext.tux.AudioTrack-method-setFlipped\" class=\"docClass\">setFlipped</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.tux.AudioTrack\" rel=\"Ext.tux.AudioTrack\" class=\"docClass\">Ext.tux.AudioTrack</a><div class='sub-desc'><p>The <a href=\"#!/api/Ext.tux.AudioTrack\" rel=\"Ext.tux.AudioTrack\" class=\"docClass\">Ext.tux.AudioTrack</a> instance.</p>\n</div></li><li><span class='pre'>value</span> : Boolean<div class='sub-desc'><p>The new value being set.</p>\n</div></li><li><span class='pre'>oldValue</span> : Boolean<div class='sub-desc'><p>The existing value.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});