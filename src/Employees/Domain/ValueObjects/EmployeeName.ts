import {StringValueObject} from "../../../Shared/Domain/ValueObject/StringValueObject";
import InvalidArgumentError from "../../../Shared/Domain/InvalidArgumentError";

export default class EmployeeName extends StringValueObject{
    constructor(value:string) {
        super(value);
        this.ensureLengthCharacters(value);
    }
    private ensureLengthCharacters = (value:string):void => {
        if (value.length <=  2) {
            throw new InvalidArgumentError(`The Employee Name <${value}> has less than 2 characters`);
        }
    }
}