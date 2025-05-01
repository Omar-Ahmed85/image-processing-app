import { Request, Response } from 'express';
import sharp from 'sharp';
import { promises as fs } from 'node:fs';

export default async function imageResizer(req: Request, res: Response) {
	const filename = req.query.filename as string;
	const width = req.query.width as unknown as number;
	const height = req.query.height as unknown as number;

	if (!filename || !width || !height) {
		res.status(400).json({
			message:
				'Invalid Input. You should select an image, set a width and a height.',
			type: 'error',
		});
		return;
	}

	const checkUploads = await checkUploadExistence(filename);

	if (!checkUploads) {
		res.status(404).json({
			message: 'Image Not Found. Please Upload It First',
			type: 'error',
		});
		return;
	}

	const checkProcessed = await checkImageExistence(filename, +width, +height);
	const imageUrl = `processed/${filename} __ ${width}x${height}.jpg`;

	if (checkProcessed) {
		res.status(200).json({
			message: 'Image Already Exists',
			type: 'check_circle',
			imageUrl,
		});
	} else {
		try {
			await sharp(`uploads/${filename}`)
				.resize(+width, +height)
				.toFile(`processed/${filename} __ ${width}x${height}.jpg`);

			res.status(200).json({
				message: 'Image Resized Successfully',
				type: 'check_circle',
				imageUrl,
			});
		} catch (error: unknown) {
			res.status(500).json({
				message: 'Failed To Resize The Image',
				type: 'error',
				error: error,
			});
		}
	}
}

async function checkImageExistence(
	filename: string,
	width: number,
	height: number,
): Promise<boolean> {
	try {
		await fs.access(`processed/${filename} __ ${width}x${height}.jpg`);
		return true;
		/* eslint no-unused-vars: 0 */
	} catch (error) {
		return false;
	}
}

async function checkUploadExistence(filename: string): Promise<boolean> {
	try {
		await fs.access(`uploads/${filename}`);
		return true;
	} catch (error) {
		return false;
	}
}

// Function For Testing

export async function transform(
	inputPath: string,
	width: number,
	height: number,
	outputPath: string,
) {
	try {
		const image = await sharp(inputPath)
			.resize(width, height)
			.toFile(`${outputPath}`);

		return image;
	} catch (error) {
		throw new Error(error as string);
	}
}
