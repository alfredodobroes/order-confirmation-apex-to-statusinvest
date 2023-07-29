const XlsxPopulate = require('xlsx-populate');
import * as config from './config';
import { ApexFiles } from './controllers/ApexFiles';

/**
XlsxPopulate.fromBlankAsync()
    .then(function(workbook : any) {
        // Modify the workbook.
        workbook.sheet("Sheet1").cell("A1").value("This is neat!");
 
        // Write to file.
        return workbook.toFileAsync("./out.xlsx");
    });

    // Load an existing workbook
    XlsxPopulate.fromFileAsync("./processing-files/reports/importacao_statusinvest_1690038764918.xlsx")
        .then(function(workbook : any) {
            // Modify the workbook.
            let value = workbook.sheet("Planilha1").cell("A1").value("José");
            console.log(value);
  
            return workbook.toFileAsync("./out3.xlsx");
        });
 */

async function main(){
    let workbook : any = await XlsxPopulate.fromFileAsync(config.APEXTemplateFile);
    console.log("terminou");
    let value = workbook.sheet("Planilha1").cell("A2").value("Foi");
    console.log(value);
    let timestamp = Date.now();
    workbook.toFileAsync("./out" + timestamp + ".xlsx");
}

//main();

async function main2(){
    let apex : ApexFiles = new ApexFiles();
    apex.createImportFileStatusInvestReport();

}

main2();