/*  
    * Created on: 9 May , 2022  11:30 GMT(+6)

    * Java Code Snippet:
        String BRAND = Build.BRAND;        

    * Frida Hooking Process:
        
        * Target:
            * Java Class :   android.os.Build
            * Java Field :   public static final String BRAND
            
        
        * Hook Field:   BRAND
        * Log original Build.BRAND
        * Change Build.BRAND
    
    * Example:
        * frida -U -l BuildProperties.js -n [App Name]
        * frida -U -l BuildProperties.js -f [Package Name]
*/




Java.perform(function(){
    
    const Build = Java.use('android.os.Build');
    const BRAND = Build.BRAND;

    console.log('Original Build.BRAND: '+BRAND.value);
    BRAND.value = 'Build.Brand Hooked';
    console.log('Changed  Build.BRAND: '+BRAND.value);

});
