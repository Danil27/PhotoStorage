'use strict';

const path = require('path');
const fs = require('fs');
const UPLOAD_DIR = path.resolve(__dirname, '../../../public/images');

module.exports = Router => {
  return new Router().post('/save', ctx => {
    try {
      const fileName = ctx.request.files.file.name;
      const filePath = ctx.request.files.file.path;
      fs.writeFileSync(
        path.join(UPLOAD_DIR, fileName),
        fs.readFileSync(filePath),
      );
    } catch (err) {
      console.log(err);
    }

    ctx.status = 200;
  });
};
