import InvalidArgumentError from '../Shared/Domain/InvalidArgumentError';
import {extractInfo, validateInputFormat} from './ExtractInputData';
import JsonRemunerationRepository from '../Remunerations/Infrastructure/JsonRemunerationRepository';
import CalculateAmountToPay from '../Remunerations/Application/CalculateAmountToPay/CalculateAmountToPay';

const repository = new JsonRemunerationRepository();
const calculateAmountToPay = new CalculateAmountToPay(repository);

export const isValidIndex = (index: number, employeesData: string[]): void => {
    if (index == -1 || employeesData[index] === undefined) {
        throw new InvalidArgumentError('Index of specified Employee was not found');
    }
}

export const processRow = (inputRow: string, index: number): void => {
    if (!validateInputFormat(inputRow)) {
        return console.error(`Row ${index} is invalid, please read the Readme file to check the right format`)
    }
    const employee = extractInfo(inputRow);
    const amountToPay = calculateAmountToPay.run(employee.workedTime);
    console.log(`The amount to pay to ${employee.name} is: $${amountToPay} USD`);
    return;
}