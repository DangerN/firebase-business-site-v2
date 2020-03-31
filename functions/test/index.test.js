const chai = require('chai');
chai.should();

const sinon = require('sinon');

const admin = require('firebase-admin');

const test = require('firebase-functions-test')();

describe('Cloud Functions', () => {
  let myFunctions, adminInitStub;

  before(() => {
    console.log('calling befres');
    adminInitStub = sinon.stub(admin, 'initializeApp');
    myFunctions = require('../index.js');
  });

  after(() => {
    adminInitStub.restore();
    test.cleanup();
  })

  describe('base', () => {
    it('should return a string', (done) => {
      const req = {get: {route: '/'}}
      const res = {
        response: (res) => {
          console.log(res);
          res.should.equal('im the base route')
          done()
        }
      }
    })

  });
});
