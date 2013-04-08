/**
 * @class RadialProgressBar.controller.Audio
 * @extend Ext.app.Controller
 * Application controller which controls the Audio
 * example application.
 */
Ext.define('RadialProgressBar.controller.Audio',{
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            audio: 'audioview audio',
            progressBar: 'audioview radialprogressbar'
        },
        control: {
            'audioview button': {
                tap: 'onButtonTap'
            },
            audio: {
                play: 'onAudioPlay',
                stop: 'onStop',
                ended: 'onStop',
                timeupdate: 'onAudioTimeUpdate',
                volumechange: 'onVolumeChange'
            }
        }
    },
    init: function(){
	    this.volume = .6;
    },
    onButtonTap: function(btn){
        
        var me = this,
            action = btn.action,
            audio = this.getAudio(),
            progressbar = this.getProgressBar();
        
        if(btn.action === 'play'){
            audio.play();
        }
        else if(btn.action === 'stop'){
            audio.stop();
        }
        else if(btn.action === 'volumedown'){
            
            me.volume -= .1;
            audio.setVolume(me.volume);        

        }
        else if(btn.action === 'volumeup'){
            
            me.volume += .1;
            audio.setVolume(me.volume);

        }
    },
    
    onAudioPlay: function(media){
        
        var progressBar = this.getProgressBar(),
            duration = media.getDuration();

        progressBar.setDuration(duration * 1000);
        progressBar.setValue(100);
        
    },
    
    onStop: function(){
        
        var progressBar = this.getProgressBar();
        
        progressBar.setDuration(2000);
        progressBar.update(0, '0s');
        
    },
    
    onAudioTimeUpdate: function(media, time){
        
        var progressBar = this.getProgressBar(),
            duration = media.getDuration(),
            total = duration - time,
            minutes, seconds;
        
        minutes = (total / 60).toFixed();
        seconds = (total % 60).toFixed();
        
        if(minutes > 0){
            progressBar.setMessage(minutes + 'm');
        }
        else {
            progressBar.setMessage(seconds + 's')
        }

    },
    
    onVolumeChange: function(audio, volume){
        this.getProgressBar().setDonut(100 - (volume * 100));
    }
    
});