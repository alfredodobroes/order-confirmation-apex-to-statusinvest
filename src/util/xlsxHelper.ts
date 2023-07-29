import * as config from '../config';
import * as path from 'path';
import * as fs from 'fs';
import * as terminal from './terminalHelper';

const XlsxPopulate = require('xlsx-populate');

export let reportPath : string;
export let workbook : any;
export let sheet : any;
export let currentRow : number = 1;
export let currentCollum : number = 1;

export async function setWorkbook(templatePath : string){
  workbook = await XlsxPopulate.fromFileAsync(templatePath);
  terminal.templateSelection(templatePath);
}

export function setSheet(sheetName : string){
  sheet = workbook.sheet(sheetName);
  terminal.sheetSelection(sheetName);
}

export function hasHeaderRow(headerRowStatus: boolean){
  if (headerRowStatus){
    currentRow = 2;
  }
}

export function setCellValue(value : any){
  sheet.cell(currentRow, currentCollum).value(value);
  currentCollum = currentCollum + 1;
}

export function createStatusInvestImportFile(){
  let timestamp = Date.now();
  reportPath = path.join(config.ReportsDir, 'importacao_statusinvest_' + timestamp + '.xlsx');
  workbook.toFileAsync(reportPath);
  terminal.fileCreation(reportPath);
}

export function nextRow(){
  currentRow = currentRow + 1;
  currentCollum = 1;
}