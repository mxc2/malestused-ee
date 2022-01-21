const supertest = require("supertest");
const expect = require('expect');
const app = require("../server");
const request = supertest(app);

describe('Testing / ', () => {
    console.log(request.get('/'))
  it('/ should return Hello World! response', (done) => {
          request.get('/')
          .expect('Hello World!')
          .end(done);
  })
})

describe('User signup', () => {
  it('/api/auth/signup create a new user', (done) => {
      
      const body ={
          firstName: 'Peeter',
          lastName: 'Paan',
          email: 'peeter@paan.com',
          password: 'password123'
      } 
  
    request
      .post('/api/auth/signup')
      .send(body)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(200)
      .expect((res) => {
          expect(200)
          expect(res.body).not.toBeNull();
          expect(res.body.message).toBe("Kasutaja loodud!");
          
      }).end(done);
  });
})

