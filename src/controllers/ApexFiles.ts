import * as pdfHelper from '../util/pdfHelper';
import * as formatUStoBR from '../util/formatUStoBR';
import * as config from '../config';
import { TransactionInfo } from '../models/TransactionInfo';

export class ApexFiles {

    public async createImportFileStatusInvest() {
        let pdfTextList = await pdfHelper.getTextFromPDFs(config.APEXFilesDir);
        let pdfOrderTextList = this.extractOrdersInfo(pdfTextList);
        let transactionInfoList: TransactionInfo[] = [];

        for (let pdfOrderText of pdfOrderTextList) {
            transactionInfoList.push(this.translatePdfDataToTransactionInfo(pdfOrderText));
        }

        return pdfTextList.length;
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
        let quantity: number = formatUStoBR.convertNumber(orderText[4]);
        let price: number = formatUStoBR.convertNumber(orderText[6]);
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

        return transactionInfo;

    }

}