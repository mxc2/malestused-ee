const supertest = require("supertest");
const expect = require('expect');
const app = require("../server");
const request = supertest(app);

describe('Testing /endpoint (images) ', () => {
    
  it('/endpoint should return json img list', (done) => {
          request.get('/endpoint')
          .expect(200)
          .end(done);
  })
})