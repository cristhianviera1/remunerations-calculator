import JsonRemunerationRepository from "../src/Remunerations/Infrastructure/JsonRemunerationRepository";
import CalculateAmountToPay from "../src/Remunerations/Application/CalculateAmountToPay/CalculateAmountToPay";
import {extractInfo} from "../src/Utils/ExtractInputData";

describe("Test to CalculateAmountToPay", () => {
    it(`For input ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00 | The ouput should be 85 USD`,
        () => {
            const repository = new JsonRemunerationRepository();
            const calculateAmountToPay = new CalculateAmountToPay(repository);
            const inputMock = "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00";
            const employeeInfo = extractInfo(inputMock);
            let amountToPay = calculateAmountToPay.run(employeeInfo.workedTime);
            expect(amountToPay).toBe(85);
        });

    it(`For input RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00 | The ouput should be 215 USD`,
        () => {
            const repository = new JsonRemunerationRepository();
            const calculateAmountToPay = new CalculateAmountToPay(repository);
            const inputMock = "RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00";
            const employeeInfo = extractInfo(inputMock);
            let amountToPay = calculateAmountToPay.run(employeeInfo.workedTime);
            expect(amountToPay).toBe(215);
        });

    it(`For input GABRIEL=MO10:00-12:00,TU10:00-12:00,WE01:00-03:00,TH14:00-18:00,FR20:00-21:00,SA20:00-21:00,SU20:00-21:00 | The ouput should be 240 USD`,
        () => {
            const repository = new JsonRemunerationRepository();
            const calculateAmountToPay = new CalculateAmountToPay(repository);
            const inputMock = "GABRIEL=MO10:00-12:00,TU10:00-12:00,WE01:00-03:00,TH14:00-18:00,FR20:00-21:00,SA20:00-21:00,SU20:00-21:00";
            const employeeInfo = extractInfo(inputMock);
            let amountToPay = calculateAmountToPay.run(employeeInfo.workedTime);
            expect(amountToPay).toBe(240);
        });
});

