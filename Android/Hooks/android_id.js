/*  
    * Created on: 9 May , 2022  11:00 GMT(+6)

    * Java Code Snippet:
        String android_id = Settings.Secure.getString(getContentResolver(), Settings.Secure.ANDROID_ID);
        String android_id = Settings.Secure.getString(getContentResolver(), "android_id");

    * Frida Hooking Process:
        
        * Target:
            * Java Class :   android.provider.Settings$Secure [ Secure is an inner class ]
            * Java Method:   public static String getString(ContentResolver resolver, String name)
            
        
        * Hook Method:   getString()
        * Check for desired name,in this case "android_id" and return desired value
        * Or, return original function value
    
    * Example:
        * frida -U -l android_id.js -n [App Name]
        * frida -U -l android_id.js -f [Package Name]
*/




Java.perform(function(){
    
    const Secure    = Java.use('android.provider.Settings$Secure');
    const getString = Secure.getString;

    getString.implementation = function(resolver, name){

        console.log('Called method: Settings.Secure.getString()');
        
        if ( name === 'android_id' ){

            let android_id = this.getString(resolver, name);
            console.log('Original android_id: '+android_id);
            android_id = 'android_id_hooked';
            console.log('Changed  android_id: '+android_id);
            console.log('');
            return android_id;
        }
        else{
            return this.getString(resolver,name);
        }
    }

});
