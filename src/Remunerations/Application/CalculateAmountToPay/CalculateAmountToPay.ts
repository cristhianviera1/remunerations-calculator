import WorkedTime from "../../../Shared/Domain/ValueObject/WorkedTime";
import Hour from "../../../Shared/Domain/ValueObject/Hour";
import Remuneration from "../../Domain/Remuneration";
import RemunerationRepository from "../../Domain/RemunerationRepository";
import RemunerationsNotFound from "../../Domain/RemunerationsNotFound";

export default class CalculateAmountToPay {
    constructor(
        private readonly remunerationRepository: RemunerationRepository
    ) {
    }

    public run(timeWorked: WorkedTime[]) {
        return timeWorked.reduce((amountToPay, timeRecord) => {
            let amountsByDay = this.remunerationRepository.fetchRemunerationsByDay(timeRecord.day);
            if (amountsByDay == null) {
                throw new RemunerationsNotFound(timeRecord.day.value);
            }
            amountToPay += this.remunerationsByTime(amountsByDay, timeRecord.startAt, timeRecord.endAt)
            return amountToPay;
        }, 0);
    }

    private remunerationsByTime(timeWorked: Remuneration[], startAt: Hour, endAt: Hour): number {
        return timeWorked.reduce((amountToPay, remuneration) => {
            const startHour = startAt.hour;
            const endHour = endAt.hour;
            const remunerationStart = remuneration.startAt;
            const remunerationEnd = remuneration.endAt;
            const remunerationAmount = remuneration.amount;
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