import { calculateAmountToPay } from '../src/Controllers/CalculateAmountToPay';
import { extractInfo, parseDays } from '../src/Controllers/ExtractInputData';

describe("Test to CalculateAmountToPay", () => {
  it(`For input ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00 | The ouput should be 85 USD`,
    () =>  {
    const inputMock = "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00";
    const employeeInfo = extractInfo(inputMock);
    const parsedDays = parseDays(employeeInfo.workedTime);
    let amountToPay = calculateAmountToPay(parsedDays);
    expect(amountToPay).toBe(85);
  });

  it(`For input RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00 | The ouput should be 215 USD`,
    () =>  {
    const inputMock = "RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00";
    const employeeInfo = extractInfo(inputMock);
    const parsedDays = parseDays(employeeInfo.workedTime);
    let amountToPay = calculateAmountToPay(parsedDays);
    expect(amountToPay).toBe(215);
  });

  it(`For input GABRIEL=MO10:00-12:00,TU10:00-12:00,WE01:00-03:00,TH14:00-18:00,FR20:00-21:00,SA20:00-21:00,SU20:00-21:00 | The ouput should be 240 USD`,
    () =>  {
    const inputMock = "GABRIEL=MO10:00-12:00,TU10:00-12:00,WE01:00-03:00,TH14:00-18:00,FR20:00-21:00,SA20:00-21:00,SU20:00-21:00";
    const employeeInfo = extractInfo(inputMock);
    const parsedDays = parseDays(employeeInfo.workedTime);
    let amountToPay = calculateAmountToPay(parsedDays);
    expect(amountToPay).toBe(240);
  });
});

