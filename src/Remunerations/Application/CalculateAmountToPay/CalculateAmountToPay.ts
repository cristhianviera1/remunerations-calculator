import WorkedTime from '../../../Shared/Domain/ValueObject/WorkedTime';
import Hour from '../../../Shared/Domain/ValueObject/Hour';
import Remuneration from '../../Domain/Remuneration';
import RemunerationRepository from '../../Domain/RemunerationRepository';

export default class CalculateAmountToPay {
    constructor(
        private readonly remunerationRepository: RemunerationRepository
    ) {
    }

    public run(timeWorked: WorkedTime[]):number {
        return timeWorked.reduce((amountToPay, {day, endAt, startAt}) => {
            const amountsByDay = this.remunerationRepository.fetchRemunerationsByDay(day);
            amountToPay += this.remunerationsByTime(amountsByDay, startAt, endAt)
            return amountToPay;
        }, 0);
    }

    private remunerationsByTime(timeWorked: Remuneration[], startAt: Hour, endAt: Hour): number {
        return timeWorked.reduce((amountToPay, {
            amount: remunerationAmount,
            endAt: remunerationEnd,
            startAt: remunerationStart
        }) => {
            const startHour = startAt.hour;
            const endHour = endAt.hour;
            if (
                startHour < remunerationEnd &&
                endHour > remunerationEnd
            ) {
                const hoursWorked = Remuneration.getHoursWorked(remunerationEnd, startHour);
                amountToPay += (remunerationAmount * hoursWorked);
            }
            if (startHour <= remunerationStart &&
                endHour <= remunerationEnd &&
                remunerationStart < endHour
            ) {
                const hoursWorked = Remuneration.getHoursWorked(endHour, remunerationStart);
                amountToPay += (remunerationAmount * hoursWorked);
            }
            if (remunerationStart <= startHour && remunerationEnd >= endHour) {
                const hoursWorked = Remuneration.getHoursWorked(endHour, startHour);
                amountToPay += (remunerationAmount * hoursWorked);
            }
            return amountToPay;
        }, 0);
    }
}