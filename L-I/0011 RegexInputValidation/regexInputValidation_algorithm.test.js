const validateInput = require('./regexInputValidation_algorithm')

describe('validateInput()', () => {
    test('should validate a valid email address', () => {
        const email = 'test@example.com';
        const isValidEmail = validateInput(email, 'email');

        expect(isValidEmail).toBe(true);
    });

    test('should not validate an invalid email address', () => {
        const email = 'test@example';
        const isValidEmail = validateInput(email, 'email');

        expect(isValidEmail).toBe(false);
    });

    test('should validate a valid name', () => {
        const name = 'John Doe';
        const isValidName = validateInput(name, 'name');

        expect(isValidName).toBe(true);
    });

    test('should not validate an invalid name', () => {
        const name = '12345';
        const isValidName = validateInput(name, 'name');

        expect(isValidName).toBe(false);
    });

    test('should validate a valid address', () => {
        const address = '123 Main Street, Anytown, CA 91234';
        const isValidAddress = validateInput(address, 'address');

        expect(isValidAddress).toBe(true);
    });

    test('should not validate an invalid address', () => {
        const address = '   ';
        const isValidAddress = validateInput(address, 'address');

        expect(isValidAddress).toBe(false);
    });

    test('should validate a valid zip code', () => {
        const zipCode = '91234';
        const isValidZipCode = validateInput(zipCode, 'zip code');

        expect(isValidZipCode).toBe(true);
    });

    test('should not validate an invalid zip code', () => {
        const zipCode = '123456';
        const isValidZipCode = validateInput(zipCode, 'zip code');

        expect(isValidZipCode).toBe(false);
    });

    test('should validate a valid telephone number', () => {
        const telephoneNumber = '123-456-7890';
        const isValidTelephoneNumber = validateInput(telephoneNumber, 'tel');

        expect(isValidTelephoneNumber).toBe(true);
    });

    test('should not validate an invalid telephone number', () => {
        const telephoneNumber = '123-456';
        const isValidTelephoneNumber = validateInput(telephoneNumber, 'tel');

        expect(isValidTelephoneNumber).toBe(false);
    });
});
