import * as fs from 'fs';
import * as config from '../config';
import * as path from 'path';
import * as formatUStoBR from './formatUStoBR';
import { TransactionInfo } from '../models/TransactionInfo';

const PDFParser = require('pdf-parse');

function getPdfNameList(folderPath : string) {
    const files = fs.readdirSync(folderPath);
    const pdfFiles: string[] = files.filter(file => path.extname(file).toLowerCase() === '.pdf');
    return pdfFiles;
};

export async function getTextFromPDFs(folderPath : string){
    let pdfNameList: string[] = getPdfNameList(folderPath);
    let pdfTextList: string[] = [];

    for (let pdfName of pdfNameList){
        const pdfBuffer = await fs.promises.readFile(folderPath + pdfName);
        const pdfData = await PDFParser(pdfBuffer);
        let pdfText = pdfData.text;
        pdfTextList.push(pdfText);
    }

    return pdfTextList;
}