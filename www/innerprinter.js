function SunmiInnerPrinter() {
}

SunmiInnerPrinter.prototype.printerInit = function (successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "printerInit"), "SunmiInnerPrinter", "printerInit", []);
};

SunmiInnerPrinter.prototype.printerSelfChecking = function (successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "printerSelfChecking"), "SunmiInnerPrinter", "printerSelfChecking", []);
};

SunmiInnerPrinter.prototype.getPrinterSerialNo = function (successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "getPrinterSerialNo"), "SunmiInnerPrinter", "getPrinterSerialNo", []);
};

SunmiInnerPrinter.prototype.getPrinterVersion = function (successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "getPrinterVersion"), "SunmiInnerPrinter", "getPrinterVersion", []);
};

SunmiInnerPrinter.prototype.hasPrinter = function (successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "hasPrinter"), "SunmiInnerPrinter", "hasPrinter", []);
};

SunmiInnerPrinter.prototype.getPrintedLength = function (successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "getPrintedLength"), "SunmiInnerPrinter", "getPrintedLength", []);
};

SunmiInnerPrinter.prototype.lineWrap = function (count, successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "lineWrap"), "SunmiInnerPrinter", "lineWrap", [count]);
};

SunmiInnerPrinter.prototype.sendRAWData = function (base64Data, successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "sendRAWData"), "SunmiInnerPrinter", "sendRAWData", [base64Data]);
};

SunmiInnerPrinter.prototype.setAlignment = function (alignment, successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "setAlignment"), "SunmiInnerPrinter", "setAlignment", [alignment]);
};

SunmiInnerPrinter.prototype.setFontName = function (typeface, successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "setFontName"), "SunmiInnerPrinter", "setFontName", [typeface]);
};

SunmiInnerPrinter.prototype.setFontSize = function (fontSize, successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "setFontSize"), "SunmiInnerPrinter", "setFontSize", [fontSize]);
};

SunmiInnerPrinter.prototype.printTextWithFont = function (text, typeface, fontSize, successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "printTextWithFont"), "SunmiInnerPrinter", "printTextWithFont", [text, typeface, fontSize]);
};

SunmiInnerPrinter.prototype.printColumnsText = function (colsTextArr, colsWidthArr, colsAlign, successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "printColumnsText"), "SunmiInnerPrinter", "printColumnsText", [colsTextArr, colsWidthArr, colsAlign]);
};

SunmiInnerPrinter.prototype.printBitmap = function (base64Data, width, height, successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "printBitmap"), "SunmiInnerPrinter", "printBitmap", [base64Data, width, height]);
};

SunmiInnerPrinter.prototype.printBarCode = function (symbology, width, height, textPosition, successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "printBarCode"), "SunmiInnerPrinter", "printBarCode", [symbology, width, height, textPosition]);
};

SunmiInnerPrinter.prototype.printQRCode = function (qrCodeData, moduleSize, errorLevel, successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "printQRCode"), "SunmiInnerPrinter", "printQRCode", [qrCodeData, moduleSize, errorLevel]);
};

SunmiInnerPrinter.prototype.printOriginalText = function (text, successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "printOriginalText"), "SunmiInnerPrinter", "printOriginalText", [text]);
};

SunmiInnerPrinter.prototype.printString = function (text, successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "printString"), "SunmiInnerPrinter", "printString", [text]);
};

SunmiInnerPrinter.prototype.printerStatusStartListener = function (successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "printerStatusStartListener"), "SunmiInnerPrinter", "printerStatusStartListener", []);
};
SunmiInnerPrinter.prototype.printerStatusStopListener = function (successCallback, errorCallback) {
    cordova.exec(resolve, this._getErrorCallback(errorCallback, "printerStatusStopListener"), "SunmiInnerPrinter", "printerStatusStopListener", []);
};


SunmiInnerPrinter.prototype._getErrorCallback = function (ecb, functionName) {
    if (typeof ecb === 'function') {
        return ecb;
    } else {
        return function (result) {
            console.log("The injected error callback of '" + functionName + "' received: " + JSON.stringify(result));
        }
    }
};