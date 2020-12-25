const multiplyAmount = require('./multiCurrency');

describe('multiplyAmount()', () => {
  it('multiply amount by a number and return an amount', () => {
    expect(multiplyAmount(25, 4)).toEqual(100);
  });
});
