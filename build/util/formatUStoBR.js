"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.converterData = void 0;
function converterData(dataAmericana) {
    let dateElementsList = dataAmericana.split('/');
    let dataBrasileira = dateElementsList[1] + '/' + dateElementsList[0] + '/' + dateElementsList[2];
    return dataBrasileira;
}
exports.converterData = converterData;
