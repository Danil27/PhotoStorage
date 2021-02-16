'use strict';

const multer = require('@koa/multer');
const Path = require('path');
const UPLOAD_DIR = Path.resolve(__dirname, './public');

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, UPLOAD_DIR),
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
  limits: {
    fileSize: 20 * 1000 * 1000,
  },
});
module.exports = Router => {
  return new Router().post('/save', upload.single('avatar'), ctx => {
    console.log('ctx.request.file', ctx.request.files);
    ctx.status = 200;
  });
};
