import JsonRemunerationRepository from '../src/Remunerations/Infrastructure/JsonRemunerationRepository';
import CalculateAmountToPay from '../src/Remunerations/Application/CalculateAmountToPay/CalculateAmountToPay';
import {extractInfo} from '../src/Utils/ExtractInputData';
import each from 'jest-each';

describe('Test to CalculateAmountToPay', () => {
    each`
    expectedOut | inputMock
    ${85}       | ${'ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'}
    ${215}      | ${'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00'} 
    ${240}      | ${'GABRIEL=MO10:00-12:00,TU10:00-12:00,WE01:00-03:00,TH14:00-18:00,FR20:00-21:00,SA20:00-21:00,SU20:00-21:00'}
    `.test('Should return $expectedOut when given $inputMock', ({inputMock, expectedOut})=>{
        const repository = new JsonRemunerationRepository();
        const calculateAmountToPay = new CalculateAmountToPay(repository);
        const employeeInfo = extractInfo(inputMock);
        const amountToPay = calculateAmountToPay.run(employeeInfo.workedTime);
        expect(amountToPay).toBe(expectedOut);
    });
});

