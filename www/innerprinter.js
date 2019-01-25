let SunmiInnerPrinter = {
    printerInit: function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "printerInit", []);
        });
    },
    printerSelfChecking: function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "printerSelfChecking", []);
        });
    },
    getPrinterSerialNo: function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "getPrinterSerialNo", []);
        });
    },
    getPrinterVersion: function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "getPrinterVersion", []);
        });
    },
    hasPrinter: function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "hasPrinter", []);
        });
    },
    getPrintedLength: function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "getPrintedLength", []);
        });
    },
    lineWrap: function (count) {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "lineWrap", [count]);
        });
    },
    sendRAWData: function (base64Data) {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "sendRAWData", [base64Data]);
        });
    },
    setAlignment: function (alignment) {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "setAlignment", [alignment]);
        });
    },
    setFontName: function (typeface) {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "setFontName", [typeface]);
        });
    },
    setFontSize: function (fontSize) {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "setFontSize", [fontSize]);
        });
    },
    printTextWithFont: function (text, typeface, fontSize) {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "printTextWithFont", [text, typeface, fontSize]);
        });
    },
    printColumnsText: function (colsTextArr, colsWidthArr, colsAlign) {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "printColumnsText", [colsTextArr, colsWidthArr, colsAlign]);
        });
    },
    printBitmap: function (base64Data, width, height) {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "printBitmap", [base64Data, width, height]);
        });
    },
    printBarCode: function (barCodeData, symbology, width, height, textPosition) {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "printBarCode", [barCodeData, symbology, width, height, textPosition]);
        });
    },
    printQRCode: function (qrCodeData, moduleSize, errorLevel) {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "printQRCode", [qrCodeData, moduleSize, errorLevel]);
        });
    },
    printOriginalText: function (text) {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "printOriginalText", [text]);
        });
    },
    printString: function (text) {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, "SunmiInnerPrinter", "printString", [text]);
        });
    },
    printerStatusStartListener: function (onSuccess, onError) {
        cordova.exec(onSuccess, onError, "SunmiInnerPrinter", "printerStatusStartListener", []);
    },
    printerStatusStopListener: function () {
        cordova.exec(function () {
        }, function () {
        }, "SunmiInnerPrinter", "printerStatusStopListener", []);
    },
};
if (typeof module != 'undefined' && module.exports) {
    module.exports = SunmiInnerPrinter;
}