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
exports.getTransactionInfoFromPDFs = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const formatUStoBR = __importStar(require("./formatUStoBR"));
const TransactionInfo_1 = require("../models/TransactionInfo");
const PDFParser = require('pdf-parse');
let directoryPath = path.join(__dirname, '../../processing-files/receipts/');
function getPdfOrders(pdfInfoList) {
    let pdfOrdersList = [];
    pdfInfoList.forEach((pdfInfo, index) => {
        if (pdfInfoList[index] === '1' && pdfInfoList[index + 1] === 'B') {
            let informacaoCorretagem = pdfInfoList.slice(index, index + 28);
            pdfOrdersList.push(informacaoCorretagem);
        }
    });
    return pdfOrdersList;
}
function getTransactionInfoFromPDFs() {
    let pdfNameList = getPdfNameList();
    pdfNameList.forEach((pdfName) => __awaiter(this, void 0, void 0, function* () {
        const pdfBuffer = yield fs.promises.readFile(directoryPath + pdfName);
        const pdfData = yield PDFParser(pdfBuffer);
        let pdfText = pdfData.text;
        translatePdfDataToTransactionInfoList(pdfText);
    }));
}
exports.getTransactionInfoFromPDFs = getTransactionInfoFromPDFs;
function getPdfNameList() {
    const files = fs.readdirSync(directoryPath);
    const pdfFiles = files.filter(file => path.extname(file).toLowerCase() === '.pdf');
    return pdfFiles;
}
;
function translatePdfDataToTransactionInfoList(pdfText) {
    let transactionInfoList = [];
    let pdfInfoList = pdfText.split('\n');
    let pdfOrdersList = getPdfOrders(pdfInfoList);
    pdfOrdersList.forEach((orderInfo) => {
        let tradeDate = formatUStoBR.convertDate(orderInfo[2]);
        let type = 'Stock';
        if (orderInfo[17].includes('ETF') || orderInfo[18].includes('ETF')) {
            type = 'ETF\'s Internacionais';
        }
        let ticker = orderInfo[5];
        let operationType = 'C';
        if (orderInfo[1].includes('S')) {
            operationType = 'V';
        }
        let quantity = formatUStoBR.convertNumber(orderInfo[4]);
        let price = formatUStoBR.convertNumber(orderInfo[6]);
        let brokerageName = 'APEX';
        let brokerageFees = 0;
        let taxGeneral = 0;
        let taxGoverment = 0;
        let taxIRRF = 0;
        let transactionInfo = new TransactionInfo_1.TransactionInfo(tradeDate, type, ticker, operationType, quantity, price, brokerageName, brokerageFees, taxGeneral, taxGoverment, taxIRRF);
        transactionInfoList.push(transactionInfo);
    });
    console.log(transactionInfoList);
}
