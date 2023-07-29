"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayTransaction = exports.sheetSelection = exports.templateSelection = exports.fileCreation = exports.standardMessage = exports.preMessage = void 0;
const config = __importStar(require("../config"));
exports.preMessage = '[' + config.appName + '] ';
function standardMessage(message) {
    console.log(exports.preMessage + message);
}
exports.standardMessage = standardMessage;
function fileCreation(filePath) {
    standardMessage('File \'' + getFileNameFromPath(filePath) + '\' was created');
}
exports.fileCreation = fileCreation;
function templateSelection(filePath) {
    let fileName = getFileNameFromPath(filePath);
    standardMessage('A new workbook was createad - Template: \'' + fileName + '\'');
}
exports.templateSelection = templateSelection;
function getFileNameFromPath(filePath) {
    let pathParts = filePath.split(/[\\/]/);
    let fileName = pathParts[pathParts.length - 1];
    return fileName;
}
function sheetSelection(sheetName) {
    standardMessage('Sheet \'' + sheetName + '\' was selected');
}
exports.sheetSelection = sheetSelection;
function displayTransaction(tradeDate, ticker, quantity) {
    standardMessage('<Order> ' + tradeDate + ' - ' + ticker + ' - ' + quantity);
}
exports.displayTransaction = displayTransaction;
//
