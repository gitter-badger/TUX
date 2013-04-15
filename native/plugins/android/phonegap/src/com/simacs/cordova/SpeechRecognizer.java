package com.simacs.cordova;

import java.util.ArrayList;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.speech.RecognizerIntent;
import android.util.Log;

public class SpeechRecognizer extends CordovaPlugin {
    
    public static final String ACTION_LISTEN = "listen";
    
    private static final String LOG_TAG = "SpeechRecognizerPlugin";
    protected static final int RESULT_SPEECH = 1;
    
    private CallbackContext callbackContext;

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

        this.callbackContext = callbackContext;
        
        JSONObject params = args.getJSONObject(0);
        
        if (ACTION_LISTEN.equals(action)) {
            
            String culture = (String)params.get("culture");
            String prompt = (String)params.get("prompt");
            
            Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);

            intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, culture);
            intent.putExtra(RecognizerIntent.EXTRA_PROMPT, prompt);
            
            try {
                
                cordova.setActivityResultCallback(this);
                cordova.getActivity().startActivityForResult(intent, RESULT_SPEECH);
                return true;
      
            } catch (ActivityNotFoundException a) {

                callbackContext.error("Your device doesn't support Speech to Text.");
                
            }

        } 
        else {
            
            callbackContext.error("Invalid Action: " + action);
            Log.d(LOG_TAG, "Invalid action : " + action);
            
        }
        
        return false;
        
    }
    
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        
        super.onActivityResult(requestCode, resultCode, data);
 
        switch (requestCode) {
        
            case RESULT_SPEECH: {
            
                if (resultCode == Activity.RESULT_OK && null != data) {
     
                    ArrayList<String> text = data.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS);
                    this.callbackContext.success(text.get(0));
    
                }
                
                break;
    
            }
 
        }
        
    }

}
