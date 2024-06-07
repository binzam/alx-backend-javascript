const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return a resolved promise with the correct data when success is true', function (done) {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.have.property('data');
      done();
    });
  });
});
