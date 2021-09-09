import RemunerationRepository from "../Domain/RemunerationRepository";
import Day from "../../Shared/Domain/ValueObject/Day";
import Remuneration from "../Domain/Remuneration";
import PeriodOfTime from "../../Shared/Domain/ValueObject/PeriodOfTime";
import Hour from "../../Shared/Domain/ValueObject/Hour";
import Amount from "../../Shared/Domain/ValueObject/Amount";

export default class JsonRemunerationRepository implements RemunerationRepository {
    fetchRemunerationsByDay(day: Day): Remuneration[] {
        if (!day || !Object.keys(daysWithRates).includes(day.value)) {
            return [];
        }
        return daysWithRates[day.value].map((remuneration) => new Remuneration(
                new PeriodOfTime(new Hour(remuneration.startAt), new Hour(remuneration.endAt)),
                new Amount(remuneration.amount)
            )
        )
    }
}

const fromMondayToFriday = [
    {
        startAt: "00:01",
        endAt: "09:00",
        amount: 25
    },
    {
        startAt: "09:01",
        endAt: "18:00",
        amount: 15
    },
    {
        startAt: "18:01",
        endAt: "00:00",
        amount: 20
    },
];

const fromSaturdayToSunday = [
    {
        startAt: "00:01",
        endAt: "09:00",
        amount: 30
    },
    {
        startAt: "09:01",
        endAt: "18:00",
        amount: 20
    },
    {
        startAt: "18:01",
        endAt: "00:00",
        amount: 25
    },
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