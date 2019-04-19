const server = require('./server.js');
const request = require('supertest');

describe('server.js', () => {
    it('should return a 200 when passing', async () => {
        const expectedStatusCode = 200;
        const response = await request(server).get('/');
  
        expect(response.status).toEqual(expectedStatusCode);
    })

    it('should return a JSON object fron the index route', async () => {
      const expectedBody = { api: 'running' };

      const response = await request(server).get('/');

      expect(response.body).toEqual(expectedBody);
    });

    it('should return a JSON object from the index route', async () => {
      const response = await request(server).get('/');

      expect(response.type).toEqual('application/json');
    });

  });