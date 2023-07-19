export class TransactionInfo {

    private _tradeDate: string;
    private _type: string;
    private _ticker: string;
    private _operationType: string;
    private _quantity: number;
    private _price: number;
    private _brokerageName: string;
    private _brokerageFees: number;
    private _taxGeneral: number;
    private _taxGoverment: number;
    private _taxIRRF: number;

    constructor(
        tradeDate: string,
        type: string,
        ticker: string,
        operationType: string,
        quantity: number,
        price: number,
        brokerageName: string,
        brokerageFees: number,
        taxGeneral: number,
        taxGoverment: number,
        taxIRRF: number
    ) {
        this._tradeDate = tradeDate
        this._type = type
        this._ticker = ticker
        this._operationType = operationType
        this._quantity = quantity
        this._price = price
        this._brokerageName = brokerageName
        this._brokerageFees = brokerageFees
        this._taxGeneral = taxGeneral
        this._taxGoverment = taxGoverment
        this._taxIRRF = taxIRRF
    }


    /**
     * Getter tradeDate
     * @return {string}
     */
    public get tradeDate(): string {
        return this._tradeDate;
    }

    /**
     * Getter type
     * @return {string}
     */
    public get type(): string {
        return this._type;
    }

    /**
     * Getter ticker
     * @return {string}
     */
    public get ticker(): string {
        return this._ticker;
    }

    /**
     * Getter operationType
     * @return {string}
     */
    public get operationType(): string {
        return this._operationType;
    }

    /**
     * Getter quantity
     * @return {number}
     */
    public get quantity(): number {
        return this._quantity;
    }

    /**
     * Getter price
     * @return {number}
     */
    public get price(): number {
        return this._price;
    }

    /**
     * Getter brokerageName
     * @return {string}
     */
    public get brokerageName(): string {
        return this._brokerageName;
    }

    /**
     * Getter brokerageFees
     * @return {number}
     */
    public get brokerageFees(): number {
        return this._brokerageFees;
    }

    /**
     * Getter taxGeneral
     * @return {number}
     */
    public get taxGeneral(): number {
        return this._taxGeneral;
    }

    /**
     * Getter taxGoverment
     * @return {number}
     */
    public get taxGoverment(): number {
        return this._taxGoverment;
    }

    /**
     * Getter taxIRRF
     * @return {number}
     */
    public get taxIRRF(): number {
        return this._taxIRRF;
    }

    /**
     * Setter tradeDate
     * @param {string} value
     */
    public set tradeDate(value: string) {
        this._tradeDate = value;
    }

    /**
     * Setter type
     * @param {string} value
     */
    public set type(value: string) {
        this._type = value;
    }

    /**
     * Setter ticker
     * @param {string} value
     */
    public set ticker(value: string) {
        this._ticker = value;
    }

    /**
     * Setter operationType
     * @param {string} value
     */
    public set operationType(value: string) {
        this._operationType = value;
    }

    /**
     * Setter quantity
     * @param {number} value
     */
    public set quantity(value: number) {
        this._quantity = value;
    }

    /**
     * Setter price
     * @param {number} value
     */
    public set price(value: number) {
        this._price = value;
    }

    /**
     * Setter brokerageName
     * @param {string} value
     */
    public set brokerageName(value: string) {
        this._brokerageName = value;
    }

    /**
     * Setter brokerageFees
     * @param {number} value
     */
    public set brokerageFees(value: number) {
        this._brokerageFees = value;
    }

    /**
     * Setter taxGeneral
     * @param {number} value
     */
    public set taxGeneral(value: number) {
        this._taxGeneral = value;
    }

    /**
     * Setter taxGoverment
     * @param {number} value
     */
    public set taxGoverment(value: number) {
        this._taxGoverment = value;
    }

    /**
     * Setter taxIRRF
     * @param {number} value
     */
    public set taxIRRF(value: number) {
        this._taxIRRF = value;
    }


}