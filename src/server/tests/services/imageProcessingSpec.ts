import { transform } from '../../middleware/services/imageResizer.js';

describe('Ensure Sharp Processing Works', () => {
	const testFilePath = 'src/server/tests/testFiles/Apple Macbook Pro.jpg';
	const testWidth = 1000;
	const testHeight = 500;
	const testOutputPath =
		'src/server/tests/testFiles/Apple Macbook Pro.jpg - modified.jpg';

	it('Resizes an image with specified width and height', async () => {
		const image = await transform(
			testFilePath,
			testWidth,
			testHeight,
			testOutputPath,
		);
		expect(image.height).toEqual(testHeight);
		expect(image.width).toEqual(testWidth);
		expect(image).not.toBeNull();
	});
});
