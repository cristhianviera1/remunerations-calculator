import Amount from '../../Shared/Domain/ValueObject/Amount';
import PeriodOfTime from '../../Shared/Domain/ValueObject/PeriodOfTime';

export default class Remuneration {
    private readonly _periodOfTime: PeriodOfTime;
    private readonly _amount: Amount;

    constructor(periodOfTime: PeriodOfTime, amount: Amount) {
        this._periodOfTime = periodOfTime;
        this._amount = amount;
    }

    //It could be stricter in worked hours with Math.floor
    public static getHoursWorked(start: number, end: number): number {
        return Math.round((start - end) / 100);
    }

    public get startAt(): number {
        return this._periodOfTime.startAt.hour;
    }

    public get endAt(): number {
        return this._periodOfTime.endAt.hour;
    }

    public get amount(): number {
        return this._amount.value;
    }
}