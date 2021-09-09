import Amount from "../../Shared/Domain/ValueObject/Amount";
import PeriodOfTime from "../../Shared/Domain/ValueObject/PeriodOfTime";

export default class Remuneration{
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

    public get startAt() {
        return this._periodOfTime.startAt.hour;
    }

    public get endAt() {
        return this._periodOfTime.endAt.hour;
    }

    public get amount() {
        return this._amount.value;
    }

    toPrimitives(){
        return {
            amount: this.amount,
            startAt: this.startAt,
            endAt: this.endAt
        }
    }
}