import * as pdfHelper from '../util/pdfHelper';
import * as xlsxHelper from '../util/xlsxHelper';
import * as formatUStoBR from '../util/formatUStoBR';
import * as config from '../config';
import { TransactionInfo } from '../models/TransactionInfo';
import * as terminal from '../util/terminalHelper';

export class ApexFiles {

    public async createImportFileStatusInvestReport() {

        await xlsxHelper.setWorkbook(config.APEXTemplateFile);
        xlsxHelper.setSheet('Planilha1');
        xlsxHelper.hasHeaderRow(true);

        let pdfTextList = await pdfHelper.getTextFromPDFs(config.APEXFilesDir);
        let pdfOrderTextList = this.extractOrdersInfo(pdfTextList);
        let transactionInfoList: TransactionInfo[] = []; 

        for (let pdfOrderText of pdfOrderTextList) {
            let transactionInfo = this.translatePdfDataToTransactionInfo(pdfOrderText);
            terminal.displayTransaction(transactionInfo.tradeDate, transactionInfo.ticker, transactionInfo.quantity);
            xlsxHelper.setCellValue(transactionInfo.tradeDate);
            xlsxHelper.setCellValue(transactionInfo.type);
            xlsxHelper.setCellValue(transactionInfo.ticker);
            xlsxHelper.setCellValue(transactionInfo.operationType);
            xlsxHelper.setCellValue(transactionInfo.quantity);
            xlsxHelper.setCellValue(transactionInfo.price);
            xlsxHelper.setCellValue(transactionInfo.brokerageName);
            xlsxHelper.setCellValue(transactionInfo.brokerageFees);
            xlsxHelper.setCellValue(transactionInfo.taxGeneral);
            xlsxHelper.setCellValue(transactionInfo.taxGoverment);
            xlsxHelper.setCellValue(transactionInfo.taxIRRF);
            xlsxHelper.nextRow();
        }

        xlsxHelper.createStatusInvestImportFile()
    }

    private extractOrdersInfo(pdfTextList: string[]) {

        let pdfOrdersList: string[][] = [];

        pdfTextList.forEach((pdfText) => {

            let pdfInfoList: string[] = pdfText.split('\n');

            for (let i = 0; i < pdfInfoList.length; i++) {
                if (pdfInfoList[i] === '1' && (pdfInfoList[i + 1] === 'B' || pdfInfoList[i + 1] === 'S')) {
                    let informacaoCorretagem: string[] = pdfInfoList.slice(i, i + 28);
                    pdfOrdersList.push(informacaoCorretagem);
                }
            }

        });

        return pdfOrdersList;
    }

    private translatePdfDataToTransactionInfo(orderText: string[]) {

        let tradeDate: string = formatUStoBR.convertDate(orderText[2]);
        let type: string = 'Stock';
        if (orderText[17].includes('ETF') || orderText[18].includes('ETF')) {
            type = 'ETF\'s Internacionais';
        }
        let ticker: string = orderText[5];
        let operationType: string = 'C';
        if (orderText[1].includes('S')) {
            operationType = 'V';
        }
        
        let quantity: string = formatUStoBR.convertNumber(orderText[4]);
        let price: string = formatUStoBR.convertNumber(orderText[6]);
        let brokerageName: string = 'APEX';
        let brokerageFees: string = '0';
        let taxGeneral: string = '0';
        let taxGoverment: string = '0';
        let taxIRRF: string = '0';

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

        return transactionInfo;

    }

}