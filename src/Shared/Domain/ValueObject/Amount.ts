export default class Amount {
    private readonly _value: number;

    constructor(value: number) {
        if (value < 0) {
            throw new Error('The amount must be upper or equal than zero')
        }
        this._value = value;
    }

    public get value(){
        return this._value;
    }
}