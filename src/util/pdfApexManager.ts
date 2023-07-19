import * as fs from 'fs';
import * as path from 'path';
import * as formatUStoBR from './formatUStoBR';
import { TransactionInfo } from '../models/TransactionInfo';

const PDFParser = require('pdf-parse');
let directoryPath: string = path.join(__dirname, '../../processing-files/receipts/');

function getPdfOrders(pdfInfoList: string[]) {

    let pdfOrdersList: string[][] = [];

    pdfInfoList.forEach((pdfInfo, index) => {
        if (pdfInfoList[index] === '1' && pdfInfoList[index + 1] === 'B') {
            let informacaoCorretagem: string[] = pdfInfoList.slice(index, index + 28);
            pdfOrdersList.push(informacaoCorretagem);
        }
    });

    return pdfOrdersList;
}

export function getTransactionInfoFromPDFs() {

    let pdfNameList: string[] = getPdfNameList();

    pdfNameList.forEach(async (pdfName) => {
        const pdfBuffer = await fs.promises.readFile(directoryPath + pdfName);
        const pdfData = await PDFParser(pdfBuffer);
        let pdfText = pdfData.text;

        translatePdfDataToTransactionInfoList(pdfText);
    });
}

function getPdfNameList() {
    const files = fs.readdirSync(directoryPath);
    const pdfFiles: string[] = files.filter(file => path.extname(file).toLowerCase() === '.pdf');
    return pdfFiles;
};

function translatePdfDataToTransactionInfoList(pdfText: string) {
    let transactionInfoList: TransactionInfo[] = [];
    let pdfInfoList: string[] = pdfText.split('\n');
    let pdfOrdersList: string[][] = getPdfOrders(pdfInfoList);

    pdfOrdersList.forEach((orderInfo) => {

        let tradeDate: string = formatUStoBR.convertDate(orderInfo[2]);
        let type: string = 'Stock';
        if (orderInfo[17].includes('ETF') || orderInfo[18].includes('ETF')) {
            type = 'ETF\'s Internacionais';
        }
        let ticker: string = orderInfo[5];
        let operationType: string = 'C';
        if (orderInfo[1].includes('S')) {
            operationType = 'V';
        }
        let quantity: number = formatUStoBR.convertNumber(orderInfo[4]);
        let price: number = formatUStoBR.convertNumber(orderInfo[6]);
        let brokerageName: string = 'APEX';
        let brokerageFees: number = 0;
        let taxGeneral: number = 0;
        let taxGoverment: number = 0;
        let taxIRRF: number = 0;

        let transactionInfo: TransactionInfo = new TransactionInfo(
            tradeDate,
            type,
            ticker,
            operationType,
            quantity,
            price,
            brokerageName,
            brokerageFees,
            taxGeneral,
            taxGoverment,
            taxIRRF
        );

        transactionInfoList.push(transactionInfo);

    });

    console.log(transactionInfoList);

}