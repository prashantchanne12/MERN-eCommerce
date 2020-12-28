import path from 'path'
import express from 'express';
import multer from 'multer';

const uploadRouter = express.Router();

const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, 'uploads/');
    },
    filename(req, file, callback) {
        callback(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const checkFileType = (file, callback) => {
    const fileTypes = /jpg|jpeg|png/
    const extname = fileTypes.test(path.extname(file.originalname).toLocaleLowerCase());
    const mimeType = fileTypes.test(file.mimeType);

    if (extname && mimeType) {
        return callback(null, true);
    } else {
        return callback('Images Only');
    }
}

const upload = multer({
    storage,
    fileFilter: function (req, file, callback) {
        checkFileType(file, callback);
    }
});

uploadRouter.post('/', upload.single('image'),
    (req, res, next) => {
        res.send(`/${req.file.path}`);
    });



export default uploadRouter;