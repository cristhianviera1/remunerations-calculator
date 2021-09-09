import Hour from "./Hour";
import InvalidArgumentError from "../InvalidArgumentError";

export default class PeriodOfTime {
    private readonly _startAt: Hour;
    private readonly _endAt: Hour;

    constructor(startAt: Hour, endAt: Hour) {
        this._startAt = startAt;
        this._endAt = endAt;
        this.checkEndAtIsUpperThanStartAt();
    }

    private checkEndAtIsUpperThanStartAt() {
        if(this._endAt > this._startAt){
            throw new InvalidArgumentError(`The end Hour can't be upper than start hour`)
        }
    }

    public get startAt() {
        return this._startAt;
    }

    public get endAt() {
        return this._endAt;
    }
}