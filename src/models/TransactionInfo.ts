export class TransactionInfo {

    private _tradeDate: string;
    private _type: string;
    private _ticker: string;
    private _operationType: string;
    private _quantity: string;
    private _price: string;
    private _brokerageName: string;
    private _brokerageFees: string;
    private _taxGeneral: string;
    private _taxGoverment: string;
    private _taxIRRF: string;

    constructor(
        tradeDate: string,
        type: string,
        ticker: string,
        operationType: string,
        quantity: string,
        price: string,
        brokerageName: string,
        brokerageFees: string,
        taxGeneral: string,
        taxGoverment: string,
        taxIRRF: string
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
     * @return {string}
     */
	public get quantity(): string {
		return this._quantity;
	}

    /**
     * Getter price
     * @return {string}
     */
	public get price(): string {
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
     * @return {string}
     */
	public get brokerageFees(): string {
		return this._brokerageFees;
	}

    /**
     * Getter taxGeneral
     * @return {string}
     */
	public get taxGeneral(): string {
		return this._taxGeneral;
	}

    /**
     * Getter taxGoverment
     * @return {string}
     */
	public get taxGoverment(): string {
		return this._taxGoverment;
	}

    /**
     * Getter taxIRRF
     * @return {string}
     */
	public get taxIRRF(): string {
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
     * @param {string} value
     */
	public set quantity(value: string) {
		this._quantity = value;
	}

    /**
     * Setter price
     * @param {string} value
     */
	public set price(value: string) {
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
     * @param {string} value
     */
	public set brokerageFees(value: string) {
		this._brokerageFees = value;
	}

    /**
     * Setter taxGeneral
     * @param {string} value
     */
	public set taxGeneral(value: string) {
		this._taxGeneral = value;
	}

    /**
     * Setter taxGoverment
     * @param {string} value
     */
	public set taxGoverment(value: string) {
		this._taxGoverment = value;
	}

    /**
     * Setter taxIRRF
     * @param {string} value
     */
	public set taxIRRF(value: string) {
		this._taxIRRF = value;
	}




}