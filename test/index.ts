import * as request from 'supertest';
import app from '../src/index';

/**
 * Get current user
 */
describe('GET', function () {
  it('response current user', function (done) {
    request(app).get('/v1/Accounts/Current').expect({
      id: 1,
      name: 'user name 123',
      token: 'Athor: sdad232ad32asdadsdadasdaddsdwqw12',
    }, done);
  });
});


/**
 * Get list user
 */
describe('GET', function () {
  it('response list user', function (done) {
    request(app).get('/v1/Accounts/Users').expect(
      [{
        createdAt: new Date('1995-02-02'),
        email: 'test@test.com',
        id: 1
      },
      {
        createdAt: new Date('1995-02-02'),
        email: 'test2@test2.com',
        id: 2,
      }], done
    );
  });
});

