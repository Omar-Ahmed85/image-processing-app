import supertest from 'supertest';
import app from '../../server.js';

describe('POST /api/upload', () => {
	it('Uploads an image to the "/uploads" folder', async () => {
		const response = await supertest(app)
			.post('/api/upload')
			.attach(
				'image',
				'src/server/tests/testFiles/Apple Macbook Pro.jpg',
			);

		expect(response.body.message).toEqual('Image Uploaded Successfully');
	});

	it('Returns an error due to unsupported file extension', async () => {
		const response = await supertest(app)
			.post('/api/upload')
			.attach(
				'image',
				'src/server/tests/testFiles/Software_Dev_Image.png',
			);

		expect(response.status).toEqual(400);
	});
});
