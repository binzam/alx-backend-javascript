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

  it('check correct content for correct url', function (done) {
    request.get('http://localhost:7865/cart/12', function (err, res, body) {
      expect(body).to.contain('Payment methods for cart 12');
      done();
    });
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

describe('Available Payments Endpoint', function () {
  it('responds with status 200 and the correct result', function (done) {
    request.get(
      'http://localhost:7865/available_payments',
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      }
    );
  });
});

describe('Login Endpoint', function () {
  it('responds with status 200 and the correct result', function (done) {
    request.post(
      'http://localhost:7865/login',
      { json: { userName: 'John' } },
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome John');
        done();
      }
    );
  });
});
