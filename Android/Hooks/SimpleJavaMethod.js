/*  
    * Created on: 9 May , 2022  11:40 GMT(+6)

    * Java Code Snippet:
        * Package:  com.example.fridahook
        * Class  :  MainActivity
        * Method :  
                    public boolean isValid(){
                        return false;
                    }       


    * Frida Hooking Process:
        
        * Target:
            * Java Class  :   com.example.fridahook.MainActivity
            * Java Method :   public boolean isValid()
        
        * Hook Method:  isValid()
        * Log original method return value
        * Change method return value
    
    * Example:
        * frida -U -l SimpleJavaMethod.js -n [App Name]
        * frida -U -l SimpleJavaMethod.js -f [Package Name]
*/

Java.perform(()=>{
    
    const className = Java.use('com.example.fridahook.MainActivity');
    const isValid   = className.isValid;

    isValid.implementation = function(){

        let value = this.isValid();
        console.log('Original return value: '+value);
        value = true;
        console.log('Changed  return value: '+value);
        console.log('');

        return value;
    }

});