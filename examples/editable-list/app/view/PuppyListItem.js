Ext.define('EditableList.view.PuppyListItem', {
    extend: 'Ext.tux.dataview.component.editable.Multi',
    xtype: 'puppylistitem',
    requires: [    
        'Ext.tux.progressbar.ProgressBar',
        'Ext.Img'
    ],

    config: {
	
        /**
         * Setting up the DataMap object.
         */
        dataMap: {
    
            getPicture: {
                setSrc: 'image'
            },
    
            getProgressBar: {
                setValue: 'cuteness'
            }

        },
    
        /**
         * @cfg {Ext.Img} image
         * The image component used to display,
         * the puppet picture.
         */
        picture: {
            width: 120,
            height: 80
        },

        /**
         * @cfg {Ext.tux.ProgressBar} progressbar
         * The progressbar component used to display,
         * the puppet picture.
         */
        progressBar: {
	        duration: 0,
            width: 200
        }

    },

    // @private
    applyPicture: function(picture){
    
        if(picture && !picture.isComponent){
            picture = Ext.factory(picture, Ext.Img, this.getPicture());
        }

        return picture;

    },

    // @private
    updatePicture: function(picture, oldPicture){
    
        if(picture){
            this.insert(1, picture);
        }
        else if (oldPicture){
            oldPicture.destroy();
        }

    },

    // @private
    applyProgressBar: function(progressBar){
    
        if(progressBar && !progressBar.isComponent){
            progressBar = Ext.factory(progressBar, Ext.tux.ProgressBar, this.getProgressBar());
        }

        return progressBar;

    },

    // @private
    updateProgressBar: function(progressBar, oldProgressBar){
    
        if(progressBar){
            this.add(progressBar);
        }
        if (oldProgressBar){
            oldProgressBar.destroy();
        }

    }

});