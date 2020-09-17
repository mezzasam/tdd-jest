// Add the unit tests of the sum function here
const fizzbuzz = require('../src/fizzbuzz');

test('should change %3 in fizz and %5 in buzz', () => {
    expect(fizzbuzz(3)).toBe('fizz');
});