import express from 'express';
import { getImages } from '../../middleware/services/imageGetter.js';

const router = express.Router();

router.get('/', getImages);

export default router;
