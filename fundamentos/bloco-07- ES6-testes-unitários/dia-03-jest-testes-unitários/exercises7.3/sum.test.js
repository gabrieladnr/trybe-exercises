const { default: TestRunner } = require("jest-runner");
const sum = require('./sum.js');

describe('the function sum', () => {
    test('sum of 4 and 5', () => {
      expect(sum(4, 5)).toBe(9);
      expect(sum(0, 0)).toBe(0);
    });
    test('if error',() => {
        expect(() => sum(4, '5')).toThrow(Error);
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    });
});