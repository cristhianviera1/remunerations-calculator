import Amount from "./Remuneration/ValueObjects/Amount";
import Hour from "./Time/ValueObjects/Hour";

export default class AmountByTime{
    readonly startAt: Hour;
    readonly endAt: Hour;
    readonly amount: Amount;
    constructor(startAt: Hour, endAt: Hour, amount: Amount){
        this.startAt = startAt;
        this.endAt = endAt;
        this.amount = amount;
    }
}