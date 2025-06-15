import supertest from 'supertest';
import app from '../server.js';
describe('GET /', () => {
    it('Returns an HTML Page With Status 200', async () => {
        const response = await supertest(app).get('/');
        expect(response.status).toEqual(200);
    });
});
