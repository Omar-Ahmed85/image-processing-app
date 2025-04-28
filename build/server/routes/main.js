import express from 'express';
import uploadRoute from './upload/uploadRoute.js';
const router = express.Router();
router.use('/upload', uploadRoute);
export default router;
