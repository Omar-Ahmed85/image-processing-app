import multer from 'multer';
const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (_req, file, cb) => {
        cb(null, `${file.originalname.split('.')[0]} __ ${Date.now()}.${file.mimetype.split('/')[1]}`);
    },
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
export const upload = multer({ storage, fileFilter });
export function imageUploader(req, res, next) {
    if (!req.file) {
        res.status(400).json({
            message: 'No Image Uploaded or Invalid File Type. Only .jpg Files are Allowed',
            type: 'error',
        });
        return;
    }
    next();
}
