import Employee from "../Employees/Domain/Employee";
import EmployeeName from "../Employees/Domain/ValueObjects/EmployeeName";
import WorkedTime from "../Shared/Domain/ValueObject/WorkedTime";
import Day from "../Shared/Domain/ValueObject/Day";
import Hour from "../Shared/Domain/ValueObject/Hour";

const timeWorkedExpression = /^([A-Za-z])+=([A-Z]{2}[0-9]{2}:[0-9]{2}-[0-9]{2}:[0-9]{2},?)+$/

export const validateInputFormat = (inputRow: string):boolean => {
    return timeWorkedExpression.test(inputRow);
};

export const extractInfo = (inputRow: string):Employee => {
    const dividedInfo = inputRow.split("=");
    const employeeName = dividedInfo[0];
    const workedTime = dividedInfo[1].split(",");
    return new Employee(new EmployeeName(employeeName),parseDays(workedTime));
}

export const parseDays = (workedHours: string[]):WorkedTime[] => {
    return workedHours.map((workedTime)=>{
        return new WorkedTime(
            new Day(workedTime.slice(0,2)),
            new Hour(workedTime.slice(2,7)),
            new Hour(workedTime.slice(8,13))
        )
    });
};