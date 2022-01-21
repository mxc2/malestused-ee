const supertest = require("supertest");
const expect = require('expect');
const app = require("../server");
const request = supertest(app);


describe('Testing api/order/orders ', () => {
  it('api/order/orders should list created orders', (done) => {
console.log(request.get('/api/order/orders'))

    request
    .get('/api/order/orders')
    .expect(200)
    .end(done);

});
})

describe('Get order by email', () => {
  it('/api/order/orders/email should return orders made from email', (done) => {
      const email = "123asda123"
      request
      .get('/api/order/orders/:${email}')
      .set('Content-Type', 'application/json')
      .expect(200)

      .end(done);
  
  });
}) 