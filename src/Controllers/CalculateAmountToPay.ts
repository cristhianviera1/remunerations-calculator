import Remuneration from "../Models/Remuneration/Remuneration";
import Hour from "../Models/Time/ValueObjects/Hour";
import TimeWorked from "../Models/TimeWorked";
import RemunerationsRepository from "../Persistence/Remunerations";

export const calculateAmountToPay = (timeWorked:TimeWorked[]):number => {
    const remunerationRepository = new RemunerationsRepository();
    let amountToPay = 0;
    timeWorked.map((timeRecord)=>{
        let ammountsByDay = remunerationRepository.getAmountsByDay(timeRecord.day)
        amountToPay += remunerationsByTime(ammountsByDay, timeRecord.startAt, timeRecord.endAt)
    });
    return amountToPay;
}
export const remunerationsByTime = (timeWorked:Remuneration[]=[], startAt: Hour, endAt: Hour):number => {
    let amountToPay:number = 0;
    timeWorked.forEach((remuneration)=>{
        const startHour = startAt.hour;
        const endHour = endAt.hour;
        const remunerationStart  = remuneration.startAt.hour;
        const remunerationEnd = remuneration.endAt.hour;
        const remunerationAmount = remuneration.amount.value
        if(
            startHour < remunerationEnd && 
            endHour > remunerationEnd
        ){
            const hoursWorked = getHoursWorked(remunerationEnd, startHour);
            amountToPay += (remunerationAmount * hoursWorked);
        }
        if(startHour <= remunerationStart && 
            endHour <= remunerationEnd && 
            remunerationStart < endHour
        ){
            const hoursWorked = getHoursWorked(endHour, remunerationStart);
            amountToPay += (remunerationAmount * hoursWorked);
        }
        if(remunerationStart <= startHour && remunerationEnd >= endHour){
            const hoursWorked = getHoursWorked(endHour, startHour);
            amountToPay += (remunerationAmount * hoursWorked);
        }
    })
    return amountToPay;
}
//It could be stricter in worked hours with Math.floor
const getHoursWorked = (start:number, end:number):number => Math.round((start - end)/100);