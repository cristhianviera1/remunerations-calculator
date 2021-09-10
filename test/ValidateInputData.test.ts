import {extractInfo} from '../src/Utils/ExtractInputData';
import Day from '../src/Shared/Domain/ValueObject/Day';
import WorkedTime from '../src/Shared/Domain/ValueObject/WorkedTime';
import Hour from '../src/Shared/Domain/ValueObject/Hour';
import PeriodOfTime from '../src/Shared/Domain/ValueObject/PeriodOfTime';
import InvalidArgumentError from '../src/Shared/Domain/InvalidArgumentError';

describe('Test to validate inputs string', () => {
    it('Validate extract name arg', () => {
        const inputMock = 'ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00';
        const employeeInfo = extractInfo(inputMock);
        const expectedName = 'ASTRID';
        expect(employeeInfo.name).toBe(expectedName);
    });
    it('Validate extract and parse of days', () => {
        const inputMock = 'ASTRID=MO10:00-12:00,SA20:00-21:00';
        const employeeInfo = extractInfo(inputMock);
        const expectedDays = [
            new WorkedTime(
                new Day('MO'),
                new PeriodOfTime(
                    new Hour('10:00'),
                    new Hour('12:00')
                )
            ),
            new WorkedTime(
                new Day('SA'),
                new PeriodOfTime(
                    new Hour('20:00'),
                    new Hour('21:00')
                )
            ),
        ]
        expect(employeeInfo.workedTime).toStrictEqual(expectedDays);
    });
    it('Validate wrong input day', () => {
        const inputMock = 'ASTRID=LU10:00-12:00';
        const expectedError = 'The LU day is invalid, please check Readme file first.';
        expect(() => extractInfo(inputMock)).toThrow(new InvalidArgumentError(expectedError));
    });

    it('Validate wrong input hour', () => {
        const inputMock = 'ASTRID=MO25:00-12:00';
        const expectedError = 'The 25:00 is invalid hour, please use specified format in Readme file.';
        expect(() => extractInfo(inputMock)).toThrow(new InvalidArgumentError(expectedError));
    });
});

