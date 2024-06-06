const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('should return the correct sum of rounded numbers when type is SUM', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return the correct result when type is SUBTRACT', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should handle division and return the correct result when type is DIVIDE', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should handle division by 0 and return "Error" when type is DIVIDE', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
