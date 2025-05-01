import supertest from 'supertest';
describe('GET /api/uploads', () => {
    it('Returns a JSON object containing the images names', async () => {
        const response = await supertest('http://localhost:3000').get('/api/uploads');
        expect(response.body).toContain('placeholder_4.jpg');
    });
});
