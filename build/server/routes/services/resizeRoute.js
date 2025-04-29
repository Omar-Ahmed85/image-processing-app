import express from 'express';
import imageResizer from '../../middleware/services/imageResizer.js';
const router = express.Router();
router.post('/', imageResizer);
export default router;
