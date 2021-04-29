import Amount from "../Models/Remuneration/ValueObjects/Amount";
import Remuneration from "../Models/Remuneration/Remuneration";
import Day from "../Models/Time/ValueObjects/Day";
import Hour from "../Models/Time/ValueObjects/Hour";
import AmountByTime from "../Models/AmountByTime";

export default class RemunerationsRepository{
    getAmountsByDay = (day: Day) :Remuneration[] | undefined => {
        if(!day || !Object.keys(daysWithRates).includes(day.value)){
            return;
        }
        return daysWithRates[day.value].map((remuneration) => new Remuneration(
            day,
            remuneration.startAt,
            remuneration.endAt,
            remuneration.amount
            )
        )
    }
}
const fromMondayToFriday : AmountByTime[] = [
    new AmountByTime(
        new Hour("00:01"),
        new Hour("09:00"),
        new Amount(25)
    ),
    new AmountByTime(
        new Hour("09:01"),
        new Hour("18:00"),
        new Amount(15)
    ),
    new AmountByTime(
        new Hour("18:01"),
        new Hour("00:00"),
        new Amount(20)
    ),
];

const fromSaturdayToSunday: AmountByTime[] = [
    new AmountByTime(
        new Hour("00:01"),
        new Hour("09:00"),
        new Amount(30)
    ),
    new AmountByTime(
        new Hour("09:01"),
        new Hour("18:00"),
        new Amount(20)
    ),
    new AmountByTime(
        new Hour("18:01"),
        new Hour("00:00"),
        new Amount(25)
    ),
];
const daysWithRates = {
    "MO": fromMondayToFriday,
    "TU": fromMondayToFriday,
    "WE": fromMondayToFriday,
    "TH": fromMondayToFriday,
    "FR": fromMondayToFriday,
    "SA": fromSaturdayToSunday,
    "SU": fromSaturdayToSunday
}