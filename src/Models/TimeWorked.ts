import Day from "./Time/ValueObjects/Day";
import Hour from "./Time/ValueObjects/Hour";

export default class TimeWorked {
    readonly day: Day;
    readonly startAt: Hour;
    readonly endAt: Hour;
    constructor(day: Day, startAt: Hour, endAt: Hour){
        this.day = day;
        this.startAt = startAt;
        this.endAt = endAt;
    }
}