const { describe } = require('yargs');
const fizzBuzz = require('./fizzbuzz.js');

describe("test function fizzbuzz", () => {
    test("function execute as expected", () =>{
        expect(fizzbuzz(15)).toEqual("FizzBuzz")
    });
});