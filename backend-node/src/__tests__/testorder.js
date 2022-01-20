const supertest = require("supertest");
const expect = require('expect');
const app = require("../server");
const request = supertest(app);


describe('Testing api/order/orders ', () => {
    
  it('api/order/orders should list created orders', (done) => {

    request
    .get('/api/order/orders')
    .set('Accept', 'application/json')
    .expect(200)
    .expect((res) => {
        expect(200)
        console.log(res.body)
        expect(res.body).not.toBeNull();
        expect.arrayContaining([
            expect.objectContaining({ID: "1"}),
        ])
    })
    .end(done);

});
}) 