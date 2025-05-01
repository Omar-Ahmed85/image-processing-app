import supertest from 'supertest';
const app = 'http://localhost:3000';
describe('POST /api/resize', () => {
    it('Resizes an image to a specific width and height', async () => {
        const response = await supertest(app).post('/api/resize?filename=placeholder_4.jpg&width=1000&height=500');
        expect(response.body.imageUrl).toMatch('processed/placeholder_4.jpg __ 1000x500.jpg');
    });
    it('Returns an error because the image isn\'t in the "uploads" folder', async () => {
        const response = await supertest(app).post('/api/resize?filename=hello.jpg&width=500&height=500');
        expect(response.status).toEqual(404);
    });
});
