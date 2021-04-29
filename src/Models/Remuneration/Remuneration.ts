import Day from "../Time/ValueObjects/Day";
import Hour from "../Time/ValueObjects/Hour";
import TimeWorked from "../TimeWorked";
import Amount from "./ValueObjects/Amount";

export default class Remuneration extends TimeWorked{
    readonly amount: Amount;
    constructor(day: Day, startAt: Hour, endAt: Hour,amount:Amount){
        super(day,startAt,endAt);
        this.amount = amount;
    }
}