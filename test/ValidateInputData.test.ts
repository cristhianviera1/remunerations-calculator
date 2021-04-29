import {extractInfo, parseDays} from '../src/Controllers/ExtractInputData';
import Day from '../src/Models/Time/ValueObjects/Day';
import Hour from '../src/Models/Time/ValueObjects/Hour';
import TimeWorked from '../src/Models/TimeWorked';

describe("Test to validate inputs string", () => {
  it(`Validate name of input`, () => {
    const inputMock = "ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00";
    const employeeInfo = extractInfo(inputMock);
    const expectedName = "ASTRID";
    expect(employeeInfo.name).toBe(expectedName);
  });
  it(`Validate inputs days`, () => {
    const inputMock = `ASTRID=MO10:00-12:00,SA20:00-21:00`;
    const employeeInfo = extractInfo(inputMock);
    const parsedDays = parseDays(employeeInfo.workedTime);
    const expectedDays = [
        new TimeWorked(
            new Day("MO"),
            new Hour("10:00"),
            new Hour("12:00")
        ),
        new TimeWorked(
            new Day("SA"),
            new Hour("20:00"),
            new Hour("21:00")
        ),
    ]
    expect(parsedDays).toStrictEqual(expectedDays);
  });
  it(`Validate wrong input day`, () => {
    const inputMock = `ASTRID=LU10:00-12:00`;
    const expectedError = "The LU day is invalid, please check Readme file first."
    const employeeInfo = extractInfo(inputMock);
    expect(() => parseDays(employeeInfo.workedTime)).toThrow(new Error(expectedError));
  });

  it(`Validate wrong input hour`, () => {
    const inputMock = `ASTRID=MO25:00-12:00`;
    const expectedError = "The 25:00 is invalid hour, please use specified format in Readme file."
    const employeeInfo = extractInfo(inputMock);
    expect(() => parseDays(employeeInfo.workedTime)).toThrow(new Error(expectedError));
  });
});

