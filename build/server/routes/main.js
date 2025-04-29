import express from 'express';
import uploadRoute from './upload/uploadRoute.js';
import resizeRoute from './services/resizeRoute.js';
const router = express.Router();
router.use('/upload', uploadRoute);
router.use('/resize', resizeRoute);
export default router;
