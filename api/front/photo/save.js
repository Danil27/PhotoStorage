'use strict';

const multer = require('@koa/multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const UPLOAD_DIR = path.resolve(__dirname, '../../../public/');

const upload = multer({
  dest: UPLOAD_DIR
});
module.exports = Router => {
  return new Router().post('/save', ctx => {
    try {
      const fileName = ctx.request.files.file.name;
      const path = ctx.request.files.file.path;
      fs.writeFileSync(
        path.join(UPLOAD_DIR, fileName),
        fs.readFileSync(path)
      )
    } catch (err) {
      console.log(err)
    }

    ctx.status = 200;
  });
};
