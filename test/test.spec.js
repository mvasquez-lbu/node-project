const assert = require('assert');
const app = require('../app');
const request = require('supertest');

describe('GET /', function() {
    it('responds with 200', function(done) {
      request(app)
        .get('/')
        .expect(200, done);
    });
  });
  