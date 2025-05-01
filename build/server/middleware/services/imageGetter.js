import { promises as fs } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export async function getImages(req, res) {
	const uploadsDir = path.join(
		__dirname,
		'..',
		'/..',
		'/..',
		'/..',
		'/uploads',
	);
	try {
		const files = await fs.readdir(uploadsDir, 'utf8');
		res.status(200).json(files);
		/* eslint no-unused-vars: 0 */
	} catch (error) {
		res.status(500).json({
			message: 'Failed To Load The Uploads Directory',
			type: 'error',
		});
	}
}
