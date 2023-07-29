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
const XlsxPopulate = require('xlsx-populate');
const config = __importStar(require("./config"));
const ApexFiles_1 = require("./controllers/ApexFiles");
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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let workbook = yield XlsxPopulate.fromFileAsync(config.APEXTemplateFile);
        console.log("terminou");
        let value = workbook.sheet("Planilha1").cell("A2").value("Foi");
        console.log(value);
        let timestamp = Date.now();
        workbook.toFileAsync("./out" + timestamp + ".xlsx");
    });
}
//main();
function main2() {
    return __awaiter(this, void 0, void 0, function* () {
        let apex = new ApexFiles_1.ApexFiles();
        apex.createImportFileStatusInvestReport();
    });
}
main2();
