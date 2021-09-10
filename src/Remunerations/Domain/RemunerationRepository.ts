import Remuneration from './Remuneration';
import Day from '../../Shared/Domain/ValueObject/Day';

export default interface RemunerationRepository{
    fetchRemunerationsByDay(day:Day): Remuneration[];
}