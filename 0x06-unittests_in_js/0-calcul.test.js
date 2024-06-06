const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return the correct sum of rounded numbers', function () {
    assert.strictEqual(calculateNumber(2.4, 3.5), 6);
  });

  it('should handle negative numbers and return the correct sum', function () {
    assert.strictEqual(calculateNumber(-1.6, 5.3), 3);
  });

  it('should handle zero values and return the correct sum', function () {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
