/*  
    * Created on: 9 May , 2022  12:00 GMT(+6)

    * Java Code Snippet:
        * Package:  com.example.fridahook
        * Class  :  MainActivity
        * Method :  
                    public int multiply(int x, int y){
                        return x*y;
                    }     


    * Frida Hooking Process:
        
        * Target:
            * Java Class  :   com.example.fridahook.MainActivity
            * Java Method :   public int multiply(int x, int y)
        
        * Hook Method:  multiply()
        * Log parameters
        * Call original method
        * Change parameters
        
    
    * Example:
        * frida -U -l JavaMethodWithParameters.js -n [App Name]
        * frida -U -l JavaMethodWithParameters.js -f [Package Name]
*/

Java.perform(()=>{
    
    const className = Java.use('com.example.fridahook.MainActivity');
    const multiply  = className.multiply;

    multiply.implementation = function(x,y){
        
        let originalReturnValue = this.multiply(x,y);

        console.log('Original First  Parameter x: ' + x);
        console.log('Original Second Parameter y: ' + y);
        console.log('Original return value: '+originalReturnValue);
        console.log('');

        x = 10, y = 15;
        let returnValueAfterParameterChange = this.multiply(x,y);

        console.log('Changed First  Parameter x: '+x);
        console.log('Changed Second Parameter y: '+y);
        console.log('Return value after parameter change: '+returnValueAfterParameterChange);
        console.log('');

        return returnValueAfterParameterChange;
    }

});