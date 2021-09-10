import Day from './Day';
import PeriodOfTime from './PeriodOfTime';
import Hour from './Hour';

export default class WorkedTime {
    private readonly _day: Day;
    private readonly _periodOfTime: PeriodOfTime;

    constructor(day: Day, periodOfTime: PeriodOfTime) {
        this._day = day;
        this._periodOfTime = periodOfTime;
    }

    public get day(): Day {
        return this._day;
    }

    public get startAt(): Hour {
        return this._periodOfTime.startAt;
    }

    public get endAt(): Hour {
        return this._periodOfTime.endAt;
    }
}