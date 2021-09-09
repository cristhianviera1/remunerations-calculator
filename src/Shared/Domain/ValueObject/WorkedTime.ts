import Day from "./Day";
import Hour from "./Hour";

export default class WorkedTime {
    private readonly _day: Day;
    private readonly _startAt: Hour;
    private readonly _endAt: Hour;

    constructor(day: Day, startAt: Hour, endAt: Hour) {
        this._day = day;
        this._startAt = startAt;
        this._endAt = endAt;
    }

    public get day() {
        return this._day;
    }

    public get startAt() {
        return this._startAt;
    }

    public get endAt() {
        return this._endAt;
    }
}