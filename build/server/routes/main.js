import express from 'express';
import uploadRoute from './upload/uploadRoute.js';
import resizeRoute from './services/resizeRoute.js';
import getImagesRoute from './services/getImagesRoute.js';
const router = express.Router();
router.use('/upload', uploadRoute);
router.use('/resize', resizeRoute);
router.use('/uploads', getImagesRoute);
export default router;
