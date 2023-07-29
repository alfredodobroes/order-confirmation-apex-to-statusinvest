"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionInfo = void 0;
class TransactionInfo {
    constructor(tradeDate, type, ticker, operationType, quantity, price, brokerageName, brokerageFees, taxGeneral, taxGoverment, taxIRRF) {
        this._tradeDate = tradeDate;
        this._type = type;
        this._ticker = ticker;
        this._operationType = operationType;
        this._quantity = quantity;
        this._price = price;
        this._brokerageName = brokerageName;
        this._brokerageFees = brokerageFees;
        this._taxGeneral = taxGeneral;
        this._taxGoverment = taxGoverment;
        this._taxIRRF = taxIRRF;
    }
    /**
     * Getter tradeDate
     * @return {string}
     */
    get tradeDate() {
        return this._tradeDate;
    }
    /**
     * Getter type
     * @return {string}
     */
    get type() {
        return this._type;
    }
    /**
     * Getter ticker
     * @return {string}
     */
    get ticker() {
        return this._ticker;
    }
    /**
     * Getter operationType
     * @return {string}
     */
    get operationType() {
        return this._operationType;
    }
    /**
     * Getter quantity
     * @return {string}
     */
    get quantity() {
        return this._quantity;
    }
    /**
     * Getter price
     * @return {string}
     */
    get price() {
        return this._price;
    }
    /**
     * Getter brokerageName
     * @return {string}
     */
    get brokerageName() {
        return this._brokerageName;
    }
    /**
     * Getter brokerageFees
     * @return {string}
     */
    get brokerageFees() {
        return this._brokerageFees;
    }
    /**
     * Getter taxGeneral
     * @return {string}
     */
    get taxGeneral() {
        return this._taxGeneral;
    }
    /**
     * Getter taxGoverment
     * @return {string}
     */
    get taxGoverment() {
        return this._taxGoverment;
    }
    /**
     * Getter taxIRRF
     * @return {string}
     */
    get taxIRRF() {
        return this._taxIRRF;
    }
    /**
     * Setter tradeDate
     * @param {string} value
     */
    set tradeDate(value) {
        this._tradeDate = value;
    }
    /**
     * Setter type
     * @param {string} value
     */
    set type(value) {
        this._type = value;
    }
    /**
     * Setter ticker
     * @param {string} value
     */
    set ticker(value) {
        this._ticker = value;
    }
    /**
     * Setter operationType
     * @param {string} value
     */
    set operationType(value) {
        this._operationType = value;
    }
    /**
     * Setter quantity
     * @param {string} value
     */
    set quantity(value) {
        this._quantity = value;
    }
    /**
     * Setter price
     * @param {string} value
     */
    set price(value) {
        this._price = value;
    }
    /**
     * Setter brokerageName
     * @param {string} value
     */
    set brokerageName(value) {
        this._brokerageName = value;
    }
    /**
     * Setter brokerageFees
     * @param {string} value
     */
    set brokerageFees(value) {
        this._brokerageFees = value;
    }
    /**
     * Setter taxGeneral
     * @param {string} value
     */
    set taxGeneral(value) {
        this._taxGeneral = value;
    }
    /**
     * Setter taxGoverment
     * @param {string} value
     */
    set taxGoverment(value) {
        this._taxGoverment = value;
    }
    /**
     * Setter taxIRRF
     * @param {string} value
     */
    set taxIRRF(value) {
        this._taxIRRF = value;
    }
}
exports.TransactionInfo = TransactionInfo;
