import EmployeeName from './ValueObjects/EmployeeName';
import WorkedTime from '../../Shared/Domain/ValueObject/WorkedTime';

export default class Employee {
    private readonly _name: EmployeeName;
    private readonly _workedTime: WorkedTime[];

    constructor(name: EmployeeName, workedTime: WorkedTime[]) {
        this._name = name;
        this._workedTime = workedTime;
    }
    public get name():string{
        return this._name.value;
    }
    public get workedTime():WorkedTime[]{
        return this._workedTime;
    }
}