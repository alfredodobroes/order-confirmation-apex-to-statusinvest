"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertNumber = exports.convertDate = void 0;
function convertDate(americanDate) {
    let dateElementsList = americanDate.split('/');
    let brazilianDate = dateElementsList[1] + '/' + dateElementsList[0] + '/' + dateElementsList[2];
    return brazilianDate;
}
exports.convertDate = convertDate;
function convertNumber(americanNumber) {
    let brazilianNumber = americanNumber.replace('.', ',');
    return brazilianNumber;
}
exports.convertNumber = convertNumber;
