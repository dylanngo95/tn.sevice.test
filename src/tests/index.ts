import { server, app } from '../index';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
let should = chai.should();
import 'mocha';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Get account current', () => {
  it('should return info account current', (done) => {
      chai.request(app)
      .get('/v1/Accounts/Current')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.should.have.property('name');
        res.body.should.have.property('token');
        done();
      })
  })
});

describe('Add account', () => {
  it('return info account', (done) => {
    chai.request(app)
    .post('/v1/Accounts/Add')
    .send({
      id: 1,
      name: 'test1234',
      address:'Ha Noi',
    })
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('id').eql(1);
      res.body.should.have.property('name');
      res.body.should.have.property('address');
      done();
    });
  });
});

server.close();
