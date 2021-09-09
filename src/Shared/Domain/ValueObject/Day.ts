export default class Day{
    readonly value:DayType

    constructor(value: string) {
        if(!DaysData.includes(value as DayType)){
            throw new Error(`The ${value} day is invalid, please check Readme file first.`)
        }
        this.value = value as DayType;
    }
}

export type DayType = "MO" | "TU" | "WE" | "TH" | "FR" | "SA" | "SU";
export const DaysData:DayType[] = ["MO" , "TU" , "WE" , "TH" , "FR" , "SA" , "SU"];
