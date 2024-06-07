const request = require('request');
const expect = require('chai').expect;

describe('Index Page', function () {
  it('responds with status 200', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('responds with the correct result', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart Page', function () {
  it('responds with status 200 when :id is a number', function (done) {
    request.get(
      'http://localhost:7865/cart/12',
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      }
    );
  });

  it('responds with status 404 when :id is NOT a number', function (done) {
    request.get(
      'http://localhost:7865/cart/abc',
      function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      }
    );
  });
});
