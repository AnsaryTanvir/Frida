# Frida Scripts

Frida is a dynamic instrumentation toolkit for developers, reverse-engineers, and security researchers.

## Android: 
* Hook android_id
* Hook build properties
* Hook simple java method
* Hook java method with parameters

# Prerequisites:

* Root permission is must.
* Frida server must be running in the device.

# Usage:
     frida -U -l android_id.js -n [App Name]
     frida -U -l android_id.js -f [Package Name]
