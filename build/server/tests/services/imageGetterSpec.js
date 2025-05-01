import supertest from 'supertest';
import app from '../../server.js';
describe('GET /api/uploads', () => {
	it('Returns a JSON object containing the images names', async () => {
		const response = await supertest(app).get('/api/uploads');
		expect(response.body).toContain('placeholder_4.jpg');
	});
});
