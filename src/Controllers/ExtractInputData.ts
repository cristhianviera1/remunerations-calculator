import Employee from "../Models/Employee";
import Day from "../Models/Time/ValueObjects/Day";
import Hour from "../Models/Time/ValueObjects/Hour";
import TimeWorked from "../Models/TimeWorked";

const timeWorkedExpression = /^([A-Za-z])+=([A-Z]{2}[0-9]{2}:[0-9]{2}-[0-9]{2}:[0-9]{2},?)+$/
export const validateInputFormat = (inputRow: string):boolean => {
    return timeWorkedExpression.test(inputRow);
};

export const extractInfo = (inputRow: string):Employee => {
    const dividedInfo = inputRow.split("=");
    const employeeName = dividedInfo[0];
    const workedTime = dividedInfo[1].split(",");
    return {name: employeeName, workedTime: workedTime};
}

export const parseDays = (workedHours: string[]):TimeWorked[] => {
    return workedHours.map((workedTime)=>{
        return new TimeWorked(
            new Day(workedTime.slice(0,2)),
            new Hour(workedTime.slice(2,7)),
            new Hour(workedTime.slice(8,13))
        )
    });
};