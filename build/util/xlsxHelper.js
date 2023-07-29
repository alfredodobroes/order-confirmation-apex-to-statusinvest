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
exports.nextRow = exports.createStatusInvestImportFile = exports.setCellValue = exports.hasHeaderRow = exports.setSheet = exports.setWorkbook = exports.currentCollum = exports.currentRow = exports.sheet = exports.workbook = exports.reportPath = void 0;
const config = __importStar(require("../config"));
const path = __importStar(require("path"));
const terminal = __importStar(require("./terminalHelper"));
const XlsxPopulate = require('xlsx-populate');
exports.currentRow = 1;
exports.currentCollum = 1;
function setWorkbook(templatePath) {
    return __awaiter(this, void 0, void 0, function* () {
        exports.workbook = yield XlsxPopulate.fromFileAsync(templatePath);
        terminal.templateSelection(templatePath);
    });
}
exports.setWorkbook = setWorkbook;
function setSheet(sheetName) {
    exports.sheet = exports.workbook.sheet(sheetName);
    terminal.sheetSelection(sheetName);
}
exports.setSheet = setSheet;
function hasHeaderRow(headerRowStatus) {
    if (headerRowStatus) {
        exports.currentRow = 2;
    }
}
exports.hasHeaderRow = hasHeaderRow;
function setCellValue(value) {
    exports.sheet.cell(exports.currentRow, exports.currentCollum).value(value);
    exports.currentCollum = exports.currentCollum + 1;
}
exports.setCellValue = setCellValue;
function createStatusInvestImportFile() {
    let timestamp = Date.now();
    exports.reportPath = path.join(config.ReportsDir, 'importacao_statusinvest_' + timestamp + '.xlsx');
    exports.workbook.toFileAsync(exports.reportPath);
    terminal.fileCreation(exports.reportPath);
}
exports.createStatusInvestImportFile = createStatusInvestImportFile;
function nextRow() {
    exports.currentRow = exports.currentRow + 1;
    exports.currentCollum = 1;
}
exports.nextRow = nextRow;
