let exec = require('cordova/exec');

let SunmiInnerPrinter = {
    printerInit: function () {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "printerInit"), "SunmiInnerPrinter", "printerInit", []);
        })
    }, printerSelfChecking: function () {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "printerSelfChecking"), "SunmiInnerPrinter", "printerSelfChecking", []);
        })
    }, getPrinterSerialNo: function () {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "getPrinterSerialNo"), "SunmiInnerPrinter", "getPrinterSerialNo", []);
        })
    }, getPrinterVersion: function () {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "getPrinterVersion"), "SunmiInnerPrinter", "getPrinterVersion", [])
        })
    }, hasPrinter: function () {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "hasPrinter"), "SunmiInnerPrinter", "hasPrinter", []);
        })
    }, getPrintedLength: function () {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "getPrintedLength"), "SunmiInnerPrinter", "getPrintedLength", []);
        })
    }, lineWrap: function (count) {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "lineWrap"), "SunmiInnerPrinter", "lineWrap", [count]);
        })
    }, sendRAWData: function (base64Data) {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "sendRAWData"), "SunmiInnerPrinter", "sendRAWData", [base64Data]);
        })
    }, setAlignment: function (alignment) {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "setAlignment"), "SunmiInnerPrinter", "setAlignment", [alignment]);
        })
    }, setFontName: function (typeface) {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "setFontName"), "SunmiInnerPrinter", "setFontName", [typeface]);
        })
    }, setFontSize: function (fontSize) {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "setFontSize"), "SunmiInnerPrinter", "setFontSize", [fontSize]);
        })
    }, printTextWithFont: function (text, typeface, fontSize) {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "printTextWithFont"), "SunmiInnerPrinter", "printTextWithFont", [text, typeface, fontSize]);
        })
    }, printColumnsText: function (colsTextArr, colsWidthArr, colsAlign) {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "printColumnsText"), "SunmiInnerPrinter", "printColumnsText", [colsTextArr, colsWidthArr, colsAlign]);
        })
    }, printBitmap: function (base64Data, width, height) {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "printBitmap"), "SunmiInnerPrinter", "printBitmap", [base64Data, width, height]);
        })
    }, printBarCode: function (symbology, width, height, textPosition) {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "printBarCode"), "SunmiInnerPrinter", "printBarCode", [symbology, width, height, textPosition]);
        })
    }, printQRCode: function (qrCodeData, moduleSize, errorLevel) {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "printQRCode"), "SunmiInnerPrinter", "printQRCode", [qrCodeData, moduleSize, errorLevel]);
        })
    }, printOriginalText: function (text) {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "printOriginalText"), "SunmiInnerPrinter", "printOriginalText", [text]);
        })
    }, printString: function (text) {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "printString"), "SunmiInnerPrinter", "printString", [text]);
        })
    }, printerStatusStartListener: function () {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "printerStatusStartListener"), "SunmiInnerPrinter", "printerStatusStartListener", []);
        })
    }, printerStatusStopListener: function () {
        return new Promise((resolve, reject) => {
            exec(resolve, this._getErrorCallback(reject, "printerStatusStopListener"), "SunmiInnerPrinter", "printerStatusStopListener", []);
        })
    },
    _getErrorCallback: function (ecb, functionName) {
        if (typeof ecb === 'function') {
            return ecb;
        } else {
            return function (result) {
                console.log("The injected error callback of '" + functionName + "' received: " + JSON.stringify(result));
            }
        }

    }
};
if (typeof module != 'undefined' && module.exports) {
    module.exports = SunmiInnerPrinter;
}