// Add the unit tests of the sum function here
const sum = require('../src/sum.js');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('type verification', () => {
    expect(sum(1,'v9')).toBe(false);
});