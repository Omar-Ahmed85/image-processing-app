import supertest from 'supertest';
describe('GET /', () => {
    it('Returns an HTML Page With Status 200', async () => {
        const response = await supertest('http://localhost:3000')
            .get('/');
        expect(response.status).toEqual(200);
    });
});
