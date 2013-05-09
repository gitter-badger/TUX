/**
 * @class Ext.tux.fx.layout.card.TimeMachine
 * @extend Ext.fx.layout.card.Style
 * @author Andrea Cammarata
 * @docauthor Andrea Cammarata
 * @aside example time-machine
 * Custom Card Layout Style that simulate the Apple Time Machine
 * effect sending the views back and forward in time.
 */
Ext.define('Ext.tux.fx.layout.card.TimeMachine', {
    extend: 'Ext.fx.layout.card.Style',
    alias: 'fx.layout.card.timemachine',
    requires: [
        'Ext.tux.fx.animation.TimeMachine'
    ],
    config: {
        inAnimation: {
            type: 'timemachine',
            easing: 'ease-out'
        },
        outAnimation: {
            type: 'timemachine',
            easing: 'ease-out',
            out: true
        }
    }
});
