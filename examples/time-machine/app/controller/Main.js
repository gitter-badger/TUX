/**
 * @class TimeMachine.controller.Main
 * @extend Ext.app.Controller
 * Main application controller.
 */
Ext.define('TimeMachine.controller.Main',{
    extend: 'Ext.app.Controller',
    config: {
         refs: {
            view: 'mainview',
            titlebar: 'mainview titlebar',
            previousButton: 'button[action=previous]',
            nextButton: 'button[action=next]'
        },
        control: {
            previousButton: {
                tap: 'timeJump'
            },
            nextButton: {
                tap: 'timeJump'
            }
        }
    },
    
    cardIndex: 0,
    
    launch: function(){
        
        var view = this.getView(),
            store = Ext.getStore('News');

        store.on('load', function(store, records){
            
            Ext.each(records, function(news){
                
                view.add({
                    cls: 'news-view',
                    tpl: [ 
                        '<div class="image" style="background-image: url(resources/images/{year}.jpg)"></div>',
                        '<div class="year">{year}</div>',
                        '<div class="text">{content}</div>',
                    ].join(''),
                    data: news.getData(),
                });
        
            });
    
        });

    },
    
    timeJump: function(btn){
        
        var me = this,
            direction = btn.direction,
            index = direction === 'past' ? --me.cardIndex : ++me.cardIndex,
            view = me.getView(),
            store = Ext.getStore('News'),
            prevButton = me.getPreviousButton(),
            nextButton = me.getNextButton();
  
        /* Updating the NewsContainer direction animation to simulate
         * the Apple TimeMachine effect. */
        view.getLayout().setAnimation({
            type: 'timemachine',
            direction: direction,
            duration: 1000
        });
        
        view.setActiveItem(me.cardIndex);
        
        prevButton.setHidden(index == 0);
        nextButton.setHidden(index == store.getCount() - 1);
        
    }
    
});