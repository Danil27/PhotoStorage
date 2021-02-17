'use strict';

const path = require('path');
const fs = require('fs');
const UPLOAD_DIR = path.resolve(__dirname, '../../../public/images');

module.exports = Router => {
  return new Router().get('/get', ctx => {
    try {
      const files = fs.readdirSync(UPLOAD_DIR);
      ctx.body = files;
      ctx.status = 200;
    } catch (err) {
      console.log(err);
      ctx.status = 401;
    }
  });
};
