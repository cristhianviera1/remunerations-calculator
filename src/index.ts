import * as fs from 'fs';
import { calculateAmountToPay } from './Controllers/CalculateAmountToPay';
import { extractInfo, parseDays, validateInputFormat } from './Controllers/ExtractInputData';
(()=>{
    try{
        const filePath = `${__dirname}/../employees-data.txt`;
        if (!fs.existsSync(filePath)) {
            throw new Error("The employees-data.txt was not found, please create it.")            
        }
        const inputFile = fs.readFileSync(filePath,'utf8');
        const employeesData = inputFile.split('\n');
        employeesData.map((inputRow:any, index)=>{
            if(!validateInputFormat(inputRow)){
                return console.error(`Row ${index+1} is invalid, please read the Readme file to check the right format`)
            }
            const employeeInfo = extractInfo(inputRow);
            const parsedDays = parseDays(employeeInfo.workedTime);
            let amountToPay = calculateAmountToPay(parsedDays);
            console.log(`The amount to pay to ${employeeInfo.name} is: $${amountToPay} USD`);
        })
    }catch(err){
        console.error(err.message);
    }
})();