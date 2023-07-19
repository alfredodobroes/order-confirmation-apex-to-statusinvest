import * as formatUStoBR from './util/formatUStoBR';
import * as pdfManager from './util/pdfApexManager';

console.log(formatUStoBR.convertDate("03/21/2023"));
console.log(formatUStoBR.convertNumber('0.12345'));

let num : number = 10.5;

console.log(num);

pdfManager.getTransactionInfoFromPDFs();