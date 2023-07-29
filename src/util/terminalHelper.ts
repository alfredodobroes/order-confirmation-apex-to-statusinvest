import * as config from '../config';

export let preMessage : string = '[' + config.appName + '] ';

export function standardMessage(message : string){
    console.log(preMessage + message);
}

export function fileCreation(filePath : string){
    standardMessage('File \'' + getFileNameFromPath(filePath) + '\' was created');
}

export function templateSelection(filePath : string){
    let fileName: string = getFileNameFromPath(filePath);
    standardMessage('A new workbook was createad - Template: \'' + fileName + '\'');
}

function getFileNameFromPath(filePath: string) {
    let pathParts: string[] = filePath.split(/[\\/]/);
    let fileName: string = pathParts[pathParts.length - 1];
    return fileName;
}

export function sheetSelection(sheetName : string){
    standardMessage('Sheet \'' + sheetName + '\' was selected');
}

export function displayTransaction(tradeDate: string, ticker: string, quantity: string) {
    standardMessage('<Order> ' + tradeDate + ' - ' + ticker + ' - ' + quantity);
}