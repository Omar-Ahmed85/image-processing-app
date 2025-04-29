import sharp from 'sharp';
import { promises as fs } from 'node:fs';
export default async function imageResizer(req, res) {
    const filename = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;
    if (!filename || !width || !height) {
        res.status(400).json({
            message: 'Invalid Input. You should select an image, set a width and a height.',
            type: 'Error',
        });
        return;
    }
    const checkUploads = await checkUploadExistence(filename);
    if (!checkUploads) {
        res.status(400).json({
            message: 'Image Not Found. Please Upload It First',
            type: 'Error',
        });
        return;
    }
    const checkProcessed = await checkImageExistence(filename, +width, +height);
    const imageUrl = `processed/${filename} __ ${width}x${height}.jpg`;
    if (checkProcessed) {
        res.status(200).json({
            message: 'Image Already Exists',
            type: 'Success',
            imageUrl,
        });
    }
    else {
        await sharp(`uploads/${filename}`)
            .resize(+width, +height)
            .toFile(`processed/${filename} __ ${width}x${height}.jpg`);
        res.status(200).json({
            message: 'Image Resized Successfully',
            type: 'Success',
            imageUrl,
        });
    }
}
async function checkImageExistence(filename, width, height) {
    try {
        await fs.access(`processed/${filename} __ ${width}x${height}.jpg`);
        return true;
        /* eslint no-unused-vars: 0 */
    }
    catch (error) {
        return false;
    }
}
async function checkUploadExistence(filename) {
    try {
        await fs.access(`uploads/${filename}`);
        return true;
    }
    catch (error) {
        return false;
    }
}
