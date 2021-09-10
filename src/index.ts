import * as fs from 'fs';
import {extractArgs} from './Utils/ExtractArgsFromCli';
import {isValidIndex, processRow} from './Utils/ProcessInputRow';
import InvalidArgumentError from './Shared/Domain/InvalidArgumentError';

(() => {
    try {
        const {path, row, name} = extractArgs();
        const filePath = path ? path : `${__dirname}/../employees-data.txt`;

        if (!fs.existsSync(filePath)) {
            return console.error('The file .txt was not found, please create it or check the file path');
        }
        const inputFile = fs.readFileSync(filePath, 'utf8');
        const employeesData = inputFile.split('\n');
        if (name) {
            const indexOfName = employeesData.findIndex((employee: string) => employee.includes(name));
            isValidIndex(indexOfName, employeesData);
            processRow(employeesData[indexOfName], indexOfName);
        }
        if (row) {
            isValidIndex(row, employeesData);
            processRow(employeesData[row], row);
        }
        employeesData.map((inputRow: string, index) => processRow(inputRow, index));
    } catch (err: unknown) {
        if(err instanceof InvalidArgumentError){
            console.error(err.message);
        }else{
            console.log(err);
        }
    }
})();