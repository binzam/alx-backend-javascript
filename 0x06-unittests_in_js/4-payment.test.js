const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(function () {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with the correct arguments', function () {
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct message', function () {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
  });
});
