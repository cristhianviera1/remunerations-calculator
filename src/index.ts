import * as fs from 'fs';
import CalculateAmountToPay from "./Remunerations/Application/CalculateAmountToPay/CalculateAmountToPay";
import JsonRemunerationRepository from "./Remunerations/Infrastructure/JsonRemunerationRepository";
import {extractArgs} from "./Utils/ExtractArgsFromCli";
import {extractInfo, validateInputFormat} from "./Utils/ExtractInputData";

(() => {
    try {
        const {path, row, name} = extractArgs();
        const filePath = path ? path : `${__dirname}/../employees-data.txt`;

        if (!fs.existsSync(filePath)) {
            return console.error("The file .txt was not found, please create it or check the file path");
        }
        const repository = new JsonRemunerationRepository();
        const calculateAmountToPay = new CalculateAmountToPay(repository);
        const inputFile = fs.readFileSync(filePath, 'utf8');
        const employeesData = inputFile.split('\n');

        const processRow = (inputRow: any, index: number) => {
            if (!validateInputFormat(inputRow)) {
                return console.error(`Row ${index} is invalid, please read the Readme file to check the right format`)
            }
            const employee = extractInfo(inputRow);
            let amountToPay = calculateAmountToPay.run(employee.workedTime);
            console.log(`The amount to pay to ${employee.name} is: $${amountToPay} USD`);
        }

        const isValidIndex = (index: number): void => {
            if (index == -1 || employeesData[index] === undefined) {
                throw new Error(`Index of specified Employee was not found`);
            }
        }

        if (name) {
            const indexOfName = employeesData.findIndex((employee: string) => employee.includes(name));
            isValidIndex(indexOfName);
            return processRow(employeesData[indexOfName], indexOfName);
        }

        if (row) {
            isValidIndex(row);
            return processRow(employeesData[row], row);
        }
        return employeesData.map((inputRow: any, index) => processRow(inputRow, index));

    } catch (err) {
        console.error(err.message);
    }
})();