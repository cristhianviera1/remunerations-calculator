import InvalidArgumentError from '../InvalidArgumentError';

export default class Hour {
    private readonly value: string;
    private readonly hourWithMinutes: number;

    constructor(value: string) {
        if (!hourPattern.test(value)) {
            throw new InvalidArgumentError(`The ${value} is invalid hour, please use specified format in Readme file.`)
        }
        this.value = Hour.parseIfItsMidnightHour(value);
        this.hourWithMinutes = Hour.extractHourWithMinutes(this.value);
    }

    private static parseIfItsMidnightHour(value: string): string {
        return value == '00:00' ? '24:00' : value;
    }

    private static extractHourWithMinutes(value: string): number {
        const hourWithMinutes = value.replace(':','');
        return Number(hourWithMinutes);
    }

    public get hour():number {
        return this.hourWithMinutes;
    }


}
const hourPattern = /^([01]\d|2[0-3]):([0-5]\d)$/;