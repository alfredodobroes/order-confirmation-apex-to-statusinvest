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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexFiles = void 0;
const pdfHelper = __importStar(require("../util/pdfHelper"));
const xlsxHelper = __importStar(require("../util/xlsxHelper"));
const formatUStoBR = __importStar(require("../util/formatUStoBR"));
const config = __importStar(require("../config"));
const TransactionInfo_1 = require("../models/TransactionInfo");
const terminal = __importStar(require("../util/terminalHelper"));
class ApexFiles {
    createImportFileStatusInvestReport() {
        return __awaiter(this, void 0, void 0, function* () {
            yield xlsxHelper.setWorkbook(config.APEXTemplateFile);
            xlsxHelper.setSheet('Planilha1');
            xlsxHelper.hasHeaderRow(true);
            let pdfTextList = yield pdfHelper.getTextFromPDFs(config.APEXFilesDir);
            let pdfOrderTextList = this.extractOrdersInfo(pdfTextList);
            let transactionInfoList = [];
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
            xlsxHelper.createStatusInvestImportFile();
        });
    }
    extractOrdersInfo(pdfTextList) {
        let pdfOrdersList = [];
        pdfTextList.forEach((pdfText) => {
            let pdfInfoList = pdfText.split('\n');
            for (let i = 0; i < pdfInfoList.length; i++) {
                if (pdfInfoList[i] === '1' && (pdfInfoList[i + 1] === 'B' || pdfInfoList[i + 1] === 'S')) {
                    let informacaoCorretagem = pdfInfoList.slice(i, i + 28);
                    pdfOrdersList.push(informacaoCorretagem);
                }
            }
        });
        return pdfOrdersList;
    }
    translatePdfDataToTransactionInfo(orderText) {
        let tradeDate = formatUStoBR.convertDate(orderText[2]);
        let type = 'Stock';
        if (orderText[17].includes('ETF') || orderText[18].includes('ETF')) {
            type = 'ETF\'s Internacionais';
        }
        let ticker = orderText[5];
        let operationType = 'C';
        if (orderText[1].includes('S')) {
            operationType = 'V';
        }
        let quantity = formatUStoBR.convertNumber(orderText[4]);
        let price = formatUStoBR.convertNumber(orderText[6]);
        let brokerageName = 'APEX';
        let brokerageFees = '0';
        let taxGeneral = '0';
        let taxGoverment = '0';
        let taxIRRF = '0';
        let transactionInfo = new TransactionInfo_1.TransactionInfo(tradeDate, type, ticker, operationType, quantity, price, brokerageName, brokerageFees, taxGeneral, taxGoverment, taxIRRF);
        return transactionInfo;
    }
}
exports.ApexFiles = ApexFiles;
