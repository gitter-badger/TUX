/**
 * The utility class to abstract different implementations to have the best performance when applying 2D translation
 * on any DOM element.
 *
 * @private
 */
Ext.define('Ext.util.Translatable', {
    requires: [
        'Ext.util.translatable.CssTransform',
        'Ext.util.translatable.ScrollPosition',
        'Ext.util.translatable.CssPosition'
    ],

    constructor: function(config) {
        var namespace = Ext.util.translatable,
            CssTransform = namespace.CssTransform,
            ScrollPosition = namespace.ScrollPosition,
            CssPosition = namespace.CssPosition,
            classReference;

        if (typeof config == 'object' && 'translationMethod' in config) {
            if (config.translationMethod === 'scrollposition') {
                classReference = ScrollPosition;
            }
            else if (config.translationMethod === 'csstransform') {
                classReference = CssTransform;
            }
            else if (config.translationMethod === 'cssposition') {
                classReference = CssPosition;
            }
        }

        if (!classReference) {
            if (Ext.browser.is.AndroidStock2 || Ext.browser.is.IE) {
                classReference = ScrollPosition;
            }
            else {
                classReference = CssTransform;
            }
        }

        return new classReference(config);
    }
});
