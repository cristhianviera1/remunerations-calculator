import InvalidArgumentError from '../InvalidArgumentError';

export default class Day {
    private readonly _value: DayType

    constructor(value: string) {
        if (!DaysData.includes(value as DayType)) {
            throw new InvalidArgumentError(`The ${value} day is invalid, please check Readme file first.`)
        }
        this._value = value as DayType;
    }

    public get value(): DayType {
        return this._value;
    }
}

export type DayType = 'MO' | 'TU' | 'WE' | 'TH' | 'FR' | 'SA' | 'SU';
export const DaysData: DayType[] = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
