'use strict';

const isLeapYear = require('./hiker');

// For example, 2001 is a typical common year and 1996 is a typical leap year, whereas 1900 is an atypical common year and 2000 is an atypical leap year
describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(leap_year()).toEqual(42);
  });
});
