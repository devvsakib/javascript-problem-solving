
const extractFileExtension = require('./FileExtension')

describe('extractFileExtension', () => {
    it('should return the file extension when given a valid file name', () => {
        expect(extractFileExtension('example.txt')).toBe('txt');
        expect(extractFileExtension('document.docx')).toBe('docx');
        expect(extractFileExtension('image.jpg')).toBe('jpg');
    });

    it('should return an empty string when given a file name without an extension', () => {
        expect(extractFileExtension('README')).toBe('');
        expect(extractFileExtension('LICENSE')).toBe('');
    });

    it('should return an empty string when given an empty string', () => {
        expect(extractFileExtension('')).toBe('');
    });
});

/*
test output:
 PASS  ./FileExtension.test.js
  extractFileExtension
    √ should return the file extension when given a valid file name (4 ms)
    √ should return an empty string when given a file name without an extension (1 ms)
    √ should return an empty string when given an empty string

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.958 s, estimated 1 s
Ran all test suites.
*/

/*
Testing with Jest global installation:
> npm install -g jest
> jest
*/
