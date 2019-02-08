# cordova-sunmi-inner-printer

Private cordova sunmi inner printer modified by Magma17
<br>Original at https://github.com/labibramadhan/cordova-sunmi-inner-printer

# Installation

Ionic cordova plugin add https://github.com/KiengKnot/cordova-sunmi-inner-printer.git

If you have exist other cordova-sunmi-inner-print plugin install, please remove it first.

# Sample

Since this is cordova plugin and I dont have any wrapper for this plugin. Thus, we need to use this plugin as cordova except you create ionic wrapper of this plugin on your own.

First. declare this cordova plugin above `IonicPage` or `Injectable`

declare let SunmiInnerPrinter: any;

Then in your print function

```
let instance = this;
    SunmiInnerPrinter.printerInit().then(
      async function() {
        await instance.delay(56);
        SunmiInnerPrinter.printerStatusStartListener();
        await instance.delay(56);
        SunmiInnerPrinter.setFontSize(20);
        await instance.delay(56);
        SunmiInnerPrinter.lineWrap(1);
        await instance.delay(56);
        SunmiInnerPrinter.printOriginalText("Hello there!");
      },
      e => {
        console.log("PRINTER IS UNAVAILABLE");
        alert("No Printer available");
        console.log(e);
      }
    );
```

```
  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
```
I use `await instance.delay(56);` since the printer need a little time for printing the text out.

# Acknowledgement

I have no plan to either modified nor update this cordova plugin.
But I will support installation and how to use this plugin only.

Thank you the original author! <b>labibramadhan</b>

Magma!
