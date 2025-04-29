import express from 'express';
import {
	upload,
	imageUploader,
} from '../../middleware/upload/imageUploader.js';

const router = express.Router();

router.post('/', upload.single('image'), imageUploader, (req, res) => {
	res.status(200).json({
		message: 'Image Uploaded Successfully',
		type: 'Success',
	});
});

export default router;
