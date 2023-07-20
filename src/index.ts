import * as formatUStoBR from './util/formatUStoBR';
import * as pdfHelper from './util/pdfHelper';
import * as xlsxHelper from './util/xlsxHelper';
import * as config from './config';
import { ApexFiles } from './controllers/ApexFiles';


//console.log(formatUStoBR.convertDate("03/21/2023"));
//console.log(formatUStoBR.convertNumber('0.12345'));

//pdfHelper.getTransactionInfoFromPDFs();

async function foo() {
    let boo = await pdfHelper.getTextFromPDFs(config.APEXFilesDir);
    console.log(boo);
}

//foo();

async function foo2() {
    let apexFiles = new ApexFiles();
    await apexFiles.createImportFileStatusInvest();
}

foo2();

xlsxHelper.createReportFileFromTemplate();