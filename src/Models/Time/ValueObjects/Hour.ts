export default class Hour{
    private readonly value: string;
    readonly hour: number;

    constructor(value: string) {
        if(!hourPattern.test(value)){
            throw new Error(`The ${value} is invalid hour, please use specified format in Readme file.`)
        }
        this.value = value;
        if(value == '00:00'){
            this.value = '24:00'
        }
        const hourWithMinutes = this.value.split(":");
        this.hour = Number(`${hourWithMinutes[0]}${hourWithMinutes[1]}`);
    }
}
const hourPattern = /([01]\d|2[0-3]):([0-5]\d)/;